import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gh_issues_api_reader'
  static title: string

  isOnline: boolean = false
  constructor() {}

  checkConnection(){
    if (window.navigator.onLine) {
      console.log('online');
      this.isOnline = true;
    } else {
      console.log('offline');
      this.isOnline = false;
    }
  }

  ngOnInit(){
    this.checkConnection();
  }
}
