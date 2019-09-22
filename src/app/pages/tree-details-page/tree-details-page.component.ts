import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeContent, TreesService } from '../../services/trees.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TopbarMode, MainActionType, TopbarService } from '../../bgr-resource/services/topbar.service';

@Component({
  selector: 'app-tree-details-page',
  templateUrl: './tree-details-page.component.html',
  styleUrls: ['./tree-details-page.component.css']
})
export class TreeDetailsPageComponent implements OnInit {

  private tree$: Observable<TreeContent>;

  constructor(
    private route: ActivatedRoute,
    private topbarService: TopbarService,
    private treesService: TreesService,
  ) { }

  ngOnInit() {
    this.topbarMainMode();

    this.tree$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.treesService.getTreeContent(params.get('guid'))));

    this.tree$.subscribe(t => this.topbarService.setTitle(t.name));
  }

  topbarMainMode() {
    this.topbarService.setMode(TopbarMode.Navigation);
    this.topbarService.setMainAction(MainActionType.Back);
  }
}
