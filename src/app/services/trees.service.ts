import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpsertTree } from '../tree-form/tree-form.component';


export class QueryParams {
  constructor(
    public page: number,
    public pageSize: number,
    public sort: string,
    public sortDir: string) {
  }
}

export class Pagination<T> {
  constructor(
    public page: number,
    public pageSize: number,
    public sort: string,
    public sortDir: string,
    public count: number,
    public items: T[]) {
  }

  public static empty<T>(params: QueryParams) {
    return new Pagination<T>(params.page, params.pageSize, params.sort, params.sortDir, 0, []);
  }
}

export class Tree {
  constructor(
    public guid: string,
    public name: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class TreesService {

  constructor(protected http: HttpClient) { }

  public getTrees(params: QueryParams) : Observable<Pagination<Tree>> {
    return this.http.get<Pagination<Tree>>(
      `api/trees?page=${params.page}&pageSize=${params.pageSize}&sort=${params.sort}&sortDir=${params.sortDir}`);
  }

  public getTree(guid: string) : Observable<Tree> {
    return this.http.get<Tree>(`api/trees/${guid}`);
  }

  public createTree(upsertTree: UpsertTree) : Observable<Tree> {
    return this.http.post<Tree>('api/trees', upsertTree);
  }
}
