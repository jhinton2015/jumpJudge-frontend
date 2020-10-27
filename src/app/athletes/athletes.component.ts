import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {
  /*  athlete: Athlete = {
     id: 1,
     name: 'Jimbo',
     entry: 26.8,
     team: 'Nike'
   }; */
  constructor() { }

  ngOnInit() {

  }
}


