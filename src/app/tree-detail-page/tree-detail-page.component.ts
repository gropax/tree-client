import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TreesService, Tree } from '../services/trees.service';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'tree-detail-page',
  templateUrl: './tree-detail-page.component.html',
  styleUrls: ['./tree-detail-page.component.css']
})
export class TreeDetailPageComponent implements OnInit {

  private treeSubject = new BehaviorSubject<Tree>(null);

  public tree$ = this.treeSubject.asObservable();

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
  }
}
