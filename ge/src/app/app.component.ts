/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ge';
}*/

import { Component } from '@angular/core';
import {TextService} from './text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GE';
  public chat = false;

  constructor(public service: TextService) {
    window.document.body.setAttribute('style', 'margin:0px !important;');
    // console.log(window.parent.document);
   }

  toggle(value) {
    this.chat = value;
    this.service.bottom = '2.5%';
    if (value) {
      this.service.minHeight = '67%';
    } else {
      this.service.minHeight = '0%';
      this.service.chats = [];
    }
  }

  mini(value) {
    this.chat = value;
    this.service.bottom = '2.5%';
    if (value) {
      this.service.minHeight = '67%';
    } else {
      this.service.minHeight = '0%';
    }
  }

  mouse(value) {
    if (value) {
      console.log('mouse is over');
      // window.document.body.setAttribute('style', 'overflow:hidden; margin:0px !important;');
      window.parent.postMessage('over', '*');
    } else {
      console.log('mouse is out');
      // window.document.body.setAttribute('style', 'overflow:auto; margin:0px !important;');
      window.parent.postMessage('out', '*');
    }
  }
}
