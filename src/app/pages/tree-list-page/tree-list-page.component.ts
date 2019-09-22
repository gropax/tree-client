import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuAction } from '../../layout/main-topbar/main-topbar.component';
import { TopbarService, TopbarMode, MainAction, MainActionType } from '../../bgr-resource/services/topbar.service';

@Component({
  selector: 'app-tree-list-page',
  templateUrl: './tree-list-page.component.html',
  styleUrls: ['./tree-list-page.component.css']
})
export class TreeListPageComponent implements OnInit {

  private actions: MenuAction[];

  constructor(
    private router: Router,
    private topbarService: TopbarService
  ) {
    this.actions = [
      new MenuAction("New tree", "add", () => router.navigate(['trees', 'new'])),
    ];
  }

  ngOnInit() {
    this.topbarMainMode()
  }

  topbarMainMode() {
    this.topbarService.setTitle("All trees");
    this.topbarService.setMode(TopbarMode.Navigation);
    this.topbarService.setMainAction(MainActionType.Sidenav);
    this.topbarService.setActions(this.actions);
  }

  goTree(guid: string) {
    this.router.navigate(['trees', guid]);
  }
}
