import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AthleteTableDataSource, AthleteTableItem } from './athlete-table-datasource';

@Component({
  selector: 'app-athlete-table',
  templateUrl: './athlete-table.component.html',
  styleUrls: ['./athlete-table.component.css']
})
export class AthleteTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<AthleteTableItem>;
  dataSource: AthleteTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'entry', 'team'];

  ngOnInit() {
    this.dataSource = new AthleteTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
