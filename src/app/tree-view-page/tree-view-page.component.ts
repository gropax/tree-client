import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TreesService, TreeContent } from '../services/trees.service';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'tree-view-page',
  templateUrl: './tree-view-page.component.html',
  styleUrls: ['./tree-view-page.component.css']
})
export class TreeViewPageComponent implements OnInit {

  private treeSubject = new BehaviorSubject<TreeContent>(null);
  public tree$ = this.treeSubject.asObservable();

  private treeGuid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private treesService: TreesService,
  ) { }

  ngOnInit() {
    this.tree$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.treesService.getTree(params.get('guid')))
    );
    this.tree$.subscribe(tree => this.treeGuid = tree.guid);
  }

  goTreeDetails() {
    this.router.navigate(["trees", this.treeGuid, "details"]);
  }

  goNodeDetails(guid: string) {
    this.router.navigate(["trees", this.treeGuid, "nodes", guid]);
  }
}
