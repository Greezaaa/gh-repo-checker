import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="message">{{message}}</div>
  `
})
export class MessageComponent implements OnInit {
  message: string = '';

  constructor() {}

  ngOnInit() {
    let msg = localStorage.getItem('msg');
    console.log(msg);
    
  }
}
