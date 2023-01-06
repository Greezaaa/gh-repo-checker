import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppStore } from 'src/app/store/app.states'
import { IssuesList } from '../../interfaces/issue.interface'
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html'
})
export class IssuesComponent {
  issues: IssuesList = [
    {
      id: 0,
  html_url: '',
  body: '',
  title: '',
  author_association: '',
  state: '',
  locked: false,
  comments: 0,
  created_at: '',
  user: {
    id: 0,
    avatar_url: '',
    login: '',
    type: '',
    site_admin: false,
  }
    }
  ]
  constructor(
    private repositoriesStore: Store<AppStore>,
    private sanitizer: DomSanitizer
  ) {
    this.repositoriesStore.select(state => state.repository.issues).subscribe(
      (data => {
        data.list.forEach(issue => {
          console.log(issue);
          
          this.issues.push( ...this.issues, {
            id: issue.id,
            html_url: issue.html_url,
            body: this.sanitizer.bypassSecurityTrustHtml(issue.body),
            title: issue.title,
            author_association: issue.author_association,
            state: issue.state,
            locked: issue.locked,
            comments: issue.comments,
            created_at: issue.created_at,
            user: {
              id: issue.user.id,
              avatar_url: issue.user.avatar_url,
              login: issue.user.login,
              type: issue.user.type,
              site_admin: issue.user.site_admin,
            }
          }
            
          )  
        });

        this.issues = data.list
      })
    )
  }
}

