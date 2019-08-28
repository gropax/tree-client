import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TreeListDataSource } from './tree-list-datasource';
import { TreeContent, TreesService } from '../services/trees.service';

@Component({
  selector: 'tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements AfterViewInit, OnInit {
  @Output() rowClick = new EventEmitter<string>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TreeContent>;

  dataSource: TreeListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [/*'guid', */'name', 'createdAt', 'updatedAt'];

  constructor(private treesService: TreesService) {}

  ngOnInit() {
    this.dataSource = new TreeListDataSource(this.treesService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.dataSource.loadTrees();

    this.paginator.page.subscribe(() => this.dataSource.loadTrees());
    this.sort.sortChange.subscribe(() => this.dataSource.loadTrees());
  }
}
