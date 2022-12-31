import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/intefaces/alert.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {


  alert_object: Alert = {
    msg: "",
    status: false
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      let lsMSG = localStorage.getItem('msg');
      this.handleLS(lsMSG)
    }, 3000);
    setTimeout(() => {
      localStorage.removeItem('msg')
      this.alert_object = {
        msg: "",
        status: false
      }
    }, 8000);
  }
  handleLS(lsMSG: any) {
    if (lsMSG !== null) {
      this.alert_object = JSON.parse(lsMSG)
    }
  }
}


