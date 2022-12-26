import { Component } from '@angular/core';
import { GhIssuesService } from 'src/app/services/gh-issues.service';
import { Issue } from 'src/app/intefaces/issues.inteface';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {

  // issues:Array<Object> ; 
  issues: Array<Issue>;
  constructor(
    private ghService: GhIssuesService,
  ) {
    this.issues = [];
  }

  getIssues() {
    this.ghService.getData().subscribe((data) => {
      console.log(data.items)
      this.issues = data.items; // asignamos a la propiedad "issues" del componente el valor de la propiedad "items" de la respuesta de la API
    })
  }
  search(value: string) {
    console.log(value);
    if (value && value.length > 3) {
      console.log("holi!!!!");
    }
  }

ngOnItin():void{}
}
