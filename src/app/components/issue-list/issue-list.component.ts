import { Component } from '@angular/core';
import { GHIssuesService } from 'src/app/services/gh-issues.service';
import { Issue } from 'src/app/intefaces/issues.inteface';
import { GHRepos } from 'src/app/services/gh-repos.service';
import { Repo } from '../../intefaces/issues.inteface';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {

  // issues:Array<Object> ; 
  issues: Array<Issue>;
  repos:Array<Repo>;
  constructor(
    private ghReposIssues: GHIssuesService,
    private ghRepos: GHRepos
  ) {
    this.issues = [];
    this.repos = [];
  }

  getIssues() {
    this.ghReposIssues.getData().subscribe((data) => {
      console.log(data.items)
      this.issues = data.items;
    })
  }
  search(value: string) {
    console.log(value);
    if (value && value.length > 3) {
        //TODO:
        this.ghRepos.getData(value).subscribe((data) => {
          console.log(data.items);
          this.repos = data.items;
          
        })
    }
  }

ngOnItin():void{}
}
