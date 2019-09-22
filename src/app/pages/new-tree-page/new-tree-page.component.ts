import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreesService, UpsertTree } from '../../services/trees.service';
import { TopbarService, TopbarMode, MainActionType } from '../../bgr-resource/services/topbar.service';

@Component({
  selector: 'new-tree-page',
  templateUrl: './new-tree-page.component.html',
  styleUrls: ['./new-tree-page.component.css']
})
export class NewTreePageComponent implements OnInit {
  constructor(
    private router: Router,
    private topbarService: TopbarService,
    private treeService: TreesService
  ) {
  }

  ngOnInit() {
    this.topbarMainMode();
  }

  topbarMainMode() {
    this.topbarService.setTitle("New tree");
    this.topbarService.setMode(TopbarMode.Contextual);
    this.topbarService.setMainAction(MainActionType.Cancel, () => this.goTreeList());
    this.topbarService.setActions([]);
  }

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
