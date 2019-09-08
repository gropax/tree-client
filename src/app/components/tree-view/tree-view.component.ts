import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { of as observableOf, Observable } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Tree } from '../../services/trees.service';
import { MatDialog } from '@angular/material';
import { NewNodeDialogComponent } from '../new-node-dialog/new-node-dialog.component';
import { RenameNodeDialogComponent } from '../rename-node-dialog/rename-node-dialog.component';

export interface INode {
  guid: string;
  type: string;
  name: string;
  children?: INode[];
}

export interface IFlatTreeNode {
  guid: string;
  type: string;
  name: string;
  level: number;
  expandable: boolean;
}

interface ITreeCommand { }

export class NewNodeCommand implements ITreeCommand {
  constructor(
    public parentId: string,
    public name: string) {
  }
}

export class RenameNodeCommand implements ITreeCommand {
  constructor(
    public guid: string,
    public name: string) {
  }
}

@Component({
  selector: 'bgr-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() tree: Observable<Tree>;

  @Output() treeClick = new EventEmitter();
  @Output() nodeClick = new EventEmitter<string>();

  @Output() newNode = new EventEmitter<NewNodeCommand>();
  @Output() renameNode = new EventEmitter<RenameNodeCommand>();

  treeControl: FlatTreeControl<IFlatTreeNode>;
  treeFlattener: MatTreeFlattener<INode, IFlatTreeNode>;
  dataSource: MatTreeFlatDataSource<INode, IFlatTreeNode>;

  constructor(public dialog: MatDialog) {

    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    // Force expansion of the root node.
    //this.dataSource._flattenedData.asObservable().subscribe(
    //  data => this.treeControl.expand(data[0]));
  }

  ngOnInit() {
    this.tree.subscribe(tree => {
      this.setDataSource(tree); 
      this.treeControl.expandAll();
    });
  }

  setDataSource(tree: Tree) {
      this.dataSource.data = !!tree ? [tree] : [];
  }

  nodeClicked(node: IFlatTreeNode) {
    if (node.type == 'tree')  // @fixme
      this.treeClick.emit(node.guid);
    else
      this.nodeClick.emit(node.guid);
  }

  openNewDialog(parentNode: IFlatTreeNode) {
    const dialogRef = this.dialog.open(NewNodeDialogComponent, { });
    var parentId = parentNode.type == 'tree' ? null : parentNode.guid;

    dialogRef.afterClosed().subscribe(name => {
      if (name !== undefined)
        this.newNode.emit(new NewNodeCommand(parentId, name));
    });
  }

  openRenameDialog(node: IFlatTreeNode) {
    const dialogRef = this.dialog.open(RenameNodeDialogComponent, {
      data: { name: node.name },
    });

    dialogRef.afterClosed().subscribe(name => {
      if (name !== undefined)
        this.renameNode.emit(new RenameNodeCommand(node.guid, name));
    });
  }

  /** Transform the data to something the tree can read. */
  transformer(node: INode, level: number) {
    return {
      guid: node.guid,
      name: node.name,
      type: node.type,
      level: level,
      expandable: node == null ? false : node.children.length > 0,
    };
  }

  /** Get the level of the node */
  getLevel(node: IFlatTreeNode) {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: IFlatTreeNode) {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: INode) {
    return observableOf(node.children);
  }
}
