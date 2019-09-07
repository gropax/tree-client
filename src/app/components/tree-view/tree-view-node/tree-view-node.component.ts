import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { IFlatTreeNode } from '../tree-view.component';

@Component({
  selector: 'bgr-tree-view-node',
  templateUrl: './tree-view-node.component.html',
  styleUrls: ['./tree-view-node.component.css']
})
export class TreeViewNodeComponent implements OnInit {

  @Input() treeControl: FlatTreeControl<IFlatTreeNode>;
  @Input() node: IFlatTreeNode;

  @Output() click = new EventEmitter<IFlatTreeNode>();

  constructor() { }

  ngOnInit() {
  }

  nodeClick() {
    this.click.emit(this.node);
  }

  menuClick(event) {
    event.stopPropagation();
  }

  isRoot(node: IFlatTreeNode) {
    return node.type == 'tree';
  }

  isChild(node: IFlatTreeNode) {
    return node.type == 'tree:node';
  }

  hasChild(node: IFlatTreeNode) {
    return node.expandable;
  }
}
