import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name: string = '';
  password: string = '';
  private errMsg: string = '';
  loginError: boolean = false;

  // create instance of AuthService
  constructor(
    private userService: UserService,
    private router: Router) { }



  ngOnInit() {
  }

  onLogin(): void {
    this.loginError = false;
    if (this.user_name === '' || this.password === '') {
      this.errMsg = 'User Name and Password are required.';
      this.loginError = true;
    } else {
      // call login() method in AuthService to validate login creds
      this.userService.login(this.user_name, this.password).subscribe(data => {
        console.log(data);
        if (data.success == false) {
          this.errMsg = 'Login unsuccessful.';
          this.loginError = true;
        } else {
          this.loginError = false;
          // load mountains "page"
          this.router.navigate(['/']);
        }
      });
    }
  }

}
