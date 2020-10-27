import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CountryReports } from '../countryReports';
import { DataService } from '../data.service';



@Component({
  selector: 'app-athlete-table',
  templateUrl: './athlete-table.component.html',
  styleUrls: ['./athlete-table.component.css']
})
export class AthleteTableComponent implements OnInit {

  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  CountryReports[];
  displayedColumns: string[] = ['country','cases','todayCases','deaths'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  constructor(private service: DataService) { }

  ngOnInit(){
    this.getAllReports();
  }
  

  public getAllReports(){
    let resp=this.service.getAthletes();
    resp.subscribe(report=>this.dataSource.data=report as CountryReports[])
  }

}
