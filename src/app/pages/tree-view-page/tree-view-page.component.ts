import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TreesService, TreeContent, Tree, CreateNode, UpdateNode, DeleteNodes } from '../../services/trees.service';
import { switchMap } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { NewNodeCommand, RenameNodeCommand } from '../../components/tree-view/tree-view.component';

@Component({
  selector: 'tree-view-page',
  templateUrl: './tree-view-page.component.html',
  styleUrls: ['./tree-view-page.component.css']
})
export class TreeViewPageComponent implements OnInit {

  private treeUpdateSubject = new BehaviorSubject<string>(null);
  private treeUpdate$ = this.treeUpdateSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(true);
  private loading$ = this.loadingSubject.asObservable();

  private tree$: Observable<Tree>;
  private treeGuid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private treesService: TreesService,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) =>
      this.treeUpdateSubject.next(params.get('guid')));

    this.tree$ = this.treeUpdate$.pipe(
      switchMap(guid => this.treesService.getTree(guid)));

    this.tree$.subscribe(tree => {
      this.treeGuid = tree.guid
      this.loadingSubject.next(false);
    });
  }

  ngOnInit() {
  }

  goTreeDetails() {
    this.router.navigate(["trees", this.treeGuid, "details"]);
  }

  goNodeDetails(guid: string) {
    this.router.navigate(["nodes", guid, "details"]);
  }

  createNewNode(cmd: NewNodeCommand) {
    this.loadingSubject.next(true);
    this.treesService.createNode(this.treeGuid, new CreateNode(cmd.parentId, cmd.name))
      .subscribe(() => this.treeUpdateSubject.next(this.treeGuid));
  }

  renameNode(cmd: RenameNodeCommand) {
    this.loadingSubject.next(true);
    this.treesService.updateNode(cmd.guid, new UpdateNode(cmd.name))
      .subscribe(() => this.treeUpdateSubject.next(this.treeGuid));
  }

  deleteNode(guid: string) {
    this.loadingSubject.next(true);
    this.treesService.deleteNode(this.treeGuid, new DeleteNodes([guid], true))
      .subscribe(() => this.treeUpdateSubject.next(this.treeGuid));
  }
}
