import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  styles: [

  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
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
