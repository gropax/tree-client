import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpsertTree } from '../tree-form/tree-form.component';
import { TreesService } from '../services/trees.service';

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
    //this.treeService.
    console.log(upsertTree);
  }
}
