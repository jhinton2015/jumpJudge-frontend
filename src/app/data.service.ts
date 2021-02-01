import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }


  // public getAthletes(){
  // return  this.http.get("https://corona.lmao.ninja/v2/countries");
  // }

  public getAthletes(){
    return this.http.get("http://localhost:9001/athletes/337aae9b-d00e-4d91-888b-6f98ba91df03");
  }
}
