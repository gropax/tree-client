import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeContent, TreesService } from '../../services/trees.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tree-details-page',
  templateUrl: './tree-details-page.component.html',
  styleUrls: ['./tree-details-page.component.css']
})
export class TreeDetailsPageComponent implements OnInit {

  private tree$: Observable<TreeContent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private treesService: TreesService,
  ) { }

  ngOnInit() {
    this.tree$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.treesService.getTreeContent(params.get('guid')))
    );
    //this.tree$.subscribe(tree => this.treeGuid = tree.guid);
  }

}
