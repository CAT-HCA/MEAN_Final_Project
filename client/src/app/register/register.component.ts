import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errMsg: Array<string> = [];

  onInputFocus(): void{
    if(this.errMsg.length > 0){
      this.errMsg = [];
      this.registerError = false;
    };
  };

  constructor() { }

  ngOnInit() {
  }

}
