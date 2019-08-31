import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class UpsertTree {
  constructor(
    public name: string,
    public description: string) {
  }
}

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

export class TreeContent {
  constructor(
    public guid: string,
    public type: string,
    public name: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date) {
  }
}

export class Tree extends TreeContent {
  constructor(
    public guid: string,
    public type: string,
    public name: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
    public children: Node[]) {
    super(guid, type, name, description, createdAt, updatedAt);
  }
}

export class Node {
  constructor(
    public guid: string,
    public type: string,
    public name: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
    public children: Node[]) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class TreesService {

  constructor(protected http: HttpClient) { }

  public getTrees(params: QueryParams) : Observable<Pagination<TreeContent>> {
    return this.http.get<Pagination<TreeContent>>(
      `api/trees?page=${params.page}&pageSize=${params.pageSize}&sort=${params.sort}&sortDir=${params.sortDir}`);
  }

  public getTreeContent(guid: string) : Observable<TreeContent> {
    return this.http.get<TreeContent>(`api/trees/${guid}?includeNodes=false`);
  }

  public getTree(guid: string) : Observable<Tree> {
    return this.http.get<Tree>(`api/trees/${guid}?includeNodes=true`);
  }

  public createTree(upsertTree: UpsertTree) : Observable<TreeContent> {
    return this.http.post<Tree>('api/trees', upsertTree);
  }
}
