import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Repo } from 'src/app/intefaces/issues.inteface';
import { SearchRepos } from 'src/app/services/search-repos.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {


  repositories: Array<Repo> = []
  page_size: number = 5;
  page_number: number = 1;
  totalRepos: number = 0;
  pageSizeOptions: number[] = [3, 5, 10, 25];

  constructor(
    private router: Router,
    private store: Store<{ searchState: string }>,
    private searchRepos: SearchRepos,
  ) { }
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  handleClick(value: string) {
    const link = value;
    const parts = link.split("/");

    const userName = parts[parts.length - 2];  // "DamnWidget"
    const repoName = parts[parts.length - 1];  // "anaconda"

    console.log(userName);  // "DamnWidget"
    console.log(repoName);  // "anaconda"

    this.router.navigate([`/repo-info/${userName}/${repoName}`]);

  }
  getRepositories(e: string) {
    this.searchRepos.getData(e).subscribe((data) => {
      this.repositories = data.items
      this.totalRepos = data.items.length
      const msg = {
        msg: this.totalRepos,
        status: true
      }
      localStorage.setItem('msg', JSON.stringify(msg))
    })
  }
  ngOnInit() {
    this.store.select<string>(state => state.searchState)
      .subscribe(searchedValue => {
        if (!searchedValue) {
          const msg = {
            msg: "Por favor realize la busqueda",
            status: true
          }
          localStorage.setItem('msg', JSON.stringify(msg))
          this.router.navigate(['/']);
          return false
        }

        this.getRepositories(searchedValue)
        return true
      });
  }


}