import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-list-page',
  templateUrl: './tree-list-page.component.html',
  styleUrls: ['./tree-list-page.component.css']
})
export class TreeListPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTree(guid: string) {
    this.router.navigate(['trees', guid]);
  }
}
