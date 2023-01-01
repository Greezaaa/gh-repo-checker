import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../interfaces/searchedRepos.interface';

@Injectable({
  providedIn: 'root'
})
export class RepoInfoService {
  constructor(
    private http:HttpClient,
  ) { }

  // getData(value:string):Observable<Array<Repo>>{
  getData(userName:string, repoName:string):Observable<Array<Repo>>{
    const url = `https://api.github.com/repos/${userName}/${repoName} `
    return this.http.get<Array<Repo>>(url)
  }
}
