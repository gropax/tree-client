import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TreeListDataSource, TreeListItem } from './tree-list-datasource';

@Component({
  selector: 'tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TreeListItem>;
  dataSource: TreeListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['guid', 'name', 'createdAt', 'updatedAt'];

  ngOnInit() {
    this.dataSource = new TreeListDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
