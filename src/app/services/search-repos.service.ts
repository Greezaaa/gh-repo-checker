import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../interfaces/searchedRepos.interface';
@Injectable({
  providedIn: 'root'
})
export class SearchRepos {

  constructor(
    private http:HttpClient,
  ) { }

  // getData(value:string):Observable<Array<Repo>>{
  getData(value:string):Observable<Repo[]>{
    
    const url = "https://api.github.com/search/repositories?q=" + value

    return this.http.get<Repo[]>(url)
  }
}