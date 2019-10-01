import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { AuthService } from '../providers/auth.service';

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
  loginUserId: number = 0;

  // create instance of AuthService
  constructor(
    private userService: UserService, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.loginError = false;
    if (this.user_name === '' || this.password === '') {
      this.loginError = true;
      this.errMsg = 'Username and password are required fields';
    } else {
      this.loginError = false;
      this.errMsg = '';
      // call login() method in AuthService to validate login creds
      this.userService.login(this.user_name, this.password).subscribe(data => {
        console.log(data);
        if (data['error']) {
          this.errMsg = 'Login unsuccessful.';
          this.loginError = true;
          this.authService.setAuth(false);
          this.authService.setAdmin(false);
        } else {
          this.loginError = false;
          this.authService.setAuth(true);
          if (data.is_admin == false) {
            this.userService.loginUserId = data.id;
            this.authService.setAdmin(false);
          }
          else {
            this.userService.loginUserId = data.id;
            this.authService.setAdmin(true);
          };
          // load leagues page
          this.router.navigate(['/leagues']);
        }
      });
    }
  }

}
