import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TreesService, TreeContent, Tree, CreateNode } from '../../services/trees.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NewNodeCommand } from '../../components/tree-view/tree-view.component';

@Component({
  selector: 'tree-view-page',
  templateUrl: './tree-view-page.component.html',
  styleUrls: ['./tree-view-page.component.css']
})
export class TreeViewPageComponent implements OnInit {

  private tree$: Observable<Tree>;
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
    this.router.navigate(["nodes", guid, "details"]);
  }

  createNewNode(cmd: NewNodeCommand) {
    this.treesService.createNode(this.treeGuid, new CreateNode(cmd.parentId, cmd.name));
  }
}
