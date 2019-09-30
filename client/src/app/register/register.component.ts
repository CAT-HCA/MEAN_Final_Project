import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user_name: string = '';
  password: string = '';
  confpassword: string = '';
  email: string = '';
  dupId: boolean = false;


  errMsg: Array<string> = [];
  registerError: boolean = false;


  constructor(private userService: UserService, private router: Router) { };

  ngOnInit() { }

  onRegister(): void {
    console.log("in register function");
    console.log(this.user_name, this.password, this.confpassword, this.email);
    this.registerError = false;
    if (this.user_name === '' || this.password === '' || this.confpassword === '' || this.email === '') {
      this.errMsg.push("Please fill out all fields");
    }
    if (this.password != this.confpassword) {
      this.errMsg.push("Passwords do not match");
    }
    if (this.errMsg.length > 0) {
      this.registerError = true;
    } else {
      console.log("about to submit register")
      this.registerError = false;
      this.dupId = false;
      // call login() method in AuthService to validate login creds
      this.userService.register(this.user_name, this.password, this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg.push("Unable to register user.");
          this.registerError = true;
        } else {
          this.router.navigate(['users/login']);
        }
      });
    }
  }
}







