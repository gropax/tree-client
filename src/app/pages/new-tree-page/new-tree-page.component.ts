import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TreesService, UpsertTree } from '../../services/trees.service';

@Component({
  selector: 'new-tree-page',
  templateUrl: './new-tree-page.component.html',
  styleUrls: ['./new-tree-page.component.css']
})
export class NewTreePageComponent {
  constructor(private router: Router, private treeService: TreesService) { }

  goTreeList() {
    this.router.navigate(['trees']);
  }

  createTree(upsertTree: UpsertTree) {
    this.treeService.createTree(upsertTree)
      .subscribe(
        tree => this.router.navigate(['trees', tree.guid]),
        error => console.log("Error!"));
  }
}
