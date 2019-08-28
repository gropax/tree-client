import { Component, Output, EventEmitter } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { of as observableOf } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import { files } from './example-data';

export interface INode {
  guid: string;
  name: string;
  children?: INode[];
}

export interface IFlatTreeNode {
  guid: string;
  name: string;
  type: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'bgr-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {

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
    this.dataSource.data = files;

    // Force expansion of the root node.
    this.dataSource._flattenedData.asObservable().subscribe(
      data => this.treeControl.expand(data[0]));
  }

  goNode(guid: string) {
    console.log(`Node [${guid}]`);
  }

  goTree(guid: string) {
    console.log(`Tree [${guid}]`);
  }

  /** Transform the data to something the tree can read. */
  transformer(node: INode, level: number) {
    return {
      guid: node.guid,
      name: node.name,
      type: node.constructor.name.toLowerCase(),
      level: level,
      expandable: node == null ? false : node.children.length > 0,
    };
  }

  isRoot(index: number, node: IFlatTreeNode) {
    console.log("isRoot");
    return node.type == 'tree';
  }

  isChild(index: number, node: IFlatTreeNode) {
    console.log("isChild");
    return node.type == 'node';
  }

  /** Get the level of the node */
  getLevel(node: IFlatTreeNode) {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: IFlatTreeNode) {
    return node.expandable;
  }

  /** Get whether the node has children or not. */
  hasChild(index: number, node: IFlatTreeNode) {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: INode) {
    return observableOf(node.children);
  }
}
