import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../intefaces/issues.inteface';
@Injectable({
  providedIn: 'root'
})
export class SearchRepos {

  constructor(
    private http:HttpClient,
  ) { }

  // getData(value:string):Observable<Array<Repo>>{
  getData(value:string):Observable<any>{
    
    const url = "https://api.github.com/search/repositories?q=" + value

    return this.http.get<Array<Repo>>(url)
  }
}