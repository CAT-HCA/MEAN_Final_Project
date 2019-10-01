import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

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

  onReset(): void {
    this.user_name = '';
    this.password = '';
    this.confpassword = '';
    this.email = '';
    this.dupId = false;
    this.errMsg = [];
    this.registerError = false;
  }

  onRegister(): void {
    this.dupId = false;
    this.errMsg = [];
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
      this.registerError = false;
      this.dupId = false;
      // call login() method in AuthService to validate login creds
      this.userService.register(this.user_name, this.password, this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg.push("Unable to register user.");
          this.registerError = true;
          this.dupId = true;
        } else {
          this.router.navigate(['users/login']);
        }
      });
    }
  }
}








