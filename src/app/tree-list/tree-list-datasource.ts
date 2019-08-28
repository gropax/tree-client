import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { TreeContent, TreesService, Pagination, QueryParams } from '../services/trees.service';


/**
 * Data source for the TreeList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TreeListDataSource extends DataSource<TreeContent> {
  paginator: MatPaginator;
  sort: MatSort;

  private treesSubject = new BehaviorSubject<TreeContent[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public total$ = this.totalSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();

  constructor(private treesService: TreesService) {
    super();
  }

  connect(): Observable<TreeContent[]> {
    return this.treesSubject.asObservable();
  }

  disconnect() {
    this.treesSubject.complete();
    this.totalSubject.complete();
    this.loadingSubject.complete();
  }

  loadTrees() {
    this.loadingSubject.next(true);

    let params = new QueryParams(this.paginator.pageIndex, this.paginator.pageSize, this.sort.active, this.sort.direction);
    this.treesService
      .getTrees(params)
      .pipe(
        catchError(() => of(Pagination.empty<TreeContent>(params))),
        finalize(() => this.loadingSubject.next(false)))
      .subscribe(treePage => {
        this.treesSubject.next(treePage.items);
        this.totalSubject.next(treePage.count);
      });
  }
}
