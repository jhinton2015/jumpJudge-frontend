import { Component, OnInit } from '@angular/core';
import { Athlete } from './athlete.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jump Judge';

  athletes$: Athlete[]
  constructor(private dataService: DataService) {}

  ngOnInit() {
  }
}
