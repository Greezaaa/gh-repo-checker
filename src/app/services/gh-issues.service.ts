import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GHIssuesService {

  constructor(
    private http:HttpClient,
  ) { }

  getData():Observable<any>{
    
    const url = "https://api.github.com/search/repositories?q=is:open+is:issue+%3E1"

    return this.http.get<any>(url)
  }
}
