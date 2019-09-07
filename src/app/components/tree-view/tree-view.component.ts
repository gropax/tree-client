import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { of as observableOf, Observable } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Tree } from '../../services/trees.service';

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

@Component({
  selector: 'bgr-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  //@Input() tree: Observable<Tree>;
  @Input() tree: Tree;

  @Output() treeClick = new EventEmitter();
  @Output() nodeClick = new EventEmitter<string>();

  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<IFlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<INode, IFlatTreeNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeFlatDataSource<INode, IFlatTreeNode>;

  constructor() {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    // Force expansion of the root node.
    this.dataSource._flattenedData.asObservable().subscribe(
      data => this.treeControl.expand(data[0]));
  }

  ngOnInit() {
    this.setDataSource(this.tree);
  }

  ngOnChanges() {
    this.setDataSource(this.tree);
  }

  setDataSource(tree: Tree) {
      this.dataSource.data = !!tree ? [tree] : [];
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

  nodeClicked(node: IFlatTreeNode) {
    if (node.type == 'tree')  // @fixme
      this.treeClick.emit(node.guid);
    else
      this.nodeClick.emit(node.guid);
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
