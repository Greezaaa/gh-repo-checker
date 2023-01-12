import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gh_issues_api_reader'
  static title: string

  isOnline = false

  checkConnection (): boolean {
    if (window.navigator.onLine) this.isOnline = true
    return this.isOnline
  }

  ngOnInit ():void {
    this.checkConnection()
  }
}
