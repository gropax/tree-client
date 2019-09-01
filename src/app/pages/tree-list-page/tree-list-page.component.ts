import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuAction } from '../../layout/main-topbar/main-topbar.component';

@Component({
  selector: 'app-tree-list-page',
  templateUrl: './tree-list-page.component.html',
  styleUrls: ['./tree-list-page.component.css']
})
export class TreeListPageComponent implements OnInit {

  private actions: MenuAction[];

  constructor(private router: Router) {
    this.actions = [
      new MenuAction("New tree", "add", () => router.navigate(['trees', 'new'])),
    ];
  }

  ngOnInit() {
  }

  goTree(guid: string) {
    this.router.navigate(['trees', guid]);
  }
}
