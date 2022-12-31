import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../intefaces/searchedRepos.inteface';

@Injectable({
  providedIn: 'root'
})
export class RepoInfoService {
  constructor(
    private http:HttpClient,
  ) { }

  // getData(value:string):Observable<Array<Repo>>{
  getData(userName:string, repoName:string):Observable<any>{
    const url = `https://api.github.com/repos/${userName}/${repoName} `
    return this.http.get<Repo>(url)
  }
}
