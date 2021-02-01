import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountryReports } from '../countryReports';
import { DataService } from '../data.service';


@Component({
  selector: 'app-athlete-table',
  templateUrl: './athlete-table.component.html',
  styleUrls: ['./athlete-table.component.css']
})
export class AthleteTableComponent implements OnInit {


  @Input('ELEMENT_DATA') ELEMENT_DATA!: CountryReports[];
  //displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'add'];
  displayedColumns: string[] = ['name', 'team', 'entry']
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }


  public getAllReports() {
    let resp = this.service.getAthletes();
    resp.subscribe(report => this.dataSource.data = report as CountryReports[])
  }

}
