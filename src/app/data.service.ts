import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }


  public getAthletes(){
  return  this.http.get("https://corona.lmao.ninja/v2/countries");
  }
}
