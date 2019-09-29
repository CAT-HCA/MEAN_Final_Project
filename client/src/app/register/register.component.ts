import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { };

  user_name: string = '';
  password: string = '';
  confpassword: string = '';
  email: string = '';


  errMsg: Array<string> = [];
  registerError: boolean = false;
  dupId: boolean = false;



  ngOnInit() {
  }

  onRegister(): void {
    this.errMsg = [];
    this.registerError = false;
    if (this.user_name === '' || this.password === '' || this.confpassword === '' || this.email === '') {
      this.registerError = true;
      this.errMsg.push("Please fill out all fields");
    }
    if (this.password !== this.confpassword) {
      this.errMsg.push("Passwords do not match");
    }
    if (this.errMsg.length > 0) {
      this.registerError = true;
    } else {
      // call login() method in AuthService to validate login creds
      this.userService.login(this.user_name, this.password).subscribe(data => {
        console.log(data);
        if (data["error"]) {
          this.dupId = true;
        } else {
          this.router.navigate(["leagues"]);
        }
      });
    }
  }
}








