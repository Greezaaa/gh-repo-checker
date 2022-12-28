import { Component } from '@angular/core';
import { GHIssuesService } from 'src/app/services/gh-issues.service';
import { Issue } from 'src/app/intefaces/issues.inteface';
import { GHRepos } from 'src/app/services/gh-repos.service';
import { Repo } from '../../intefaces/issues.inteface';
import { Store } from '@ngrx/store';
import { setRepos } from 'src/app/states/actions/setRepos.action';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {

  // issues:Array<Object> ; 
  issues: Array<Issue>;
  repos$: Observable<Array<Repo>>;
  page_size: number = 5;
  page_number: number = 1;
  totalRepos: number = 0;
  pageSizeOptions: number[] = [3, 5, 10, 25];
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
  constructor(
    private ghReposIssues: GHIssuesService,
    private ghRepos: GHRepos,
    private ghReposStore: Store<{ reposState: Array<Repo> }>,
  ) {
    this.issues = [];
    this.repos$ = ghReposStore.select('reposState');

  }
  //TODO: SACAR DE AQUI y poner en componente aparte!!!
  getIssues() {
    this.ghReposIssues.getData().subscribe((data) => {
      console.log(data.items)
      this.issues = data.items;
    })
  }
  // ///////////////////////////////////////////


  //TODO: Separar esta accion en diferente componente
  search(value: string) {
    console.log(value);
    setTimeout(() => {
      if (value && value.length > 5) {
        this.ghRepos.getData(value).subscribe((data) => {
          this.ghReposStore.dispatch(setRepos({ repos: data.items }));
        })
      }
    }, 500)
    this.repos$.subscribe(repos => {
      this.totalRepos = repos.length;
    });
  }

  // ngOnItin(){}
}
