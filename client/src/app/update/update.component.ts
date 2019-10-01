import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private sub: any;
  user: Array<any> = [];
  private email: string = '';
  private user_name: string = '';
  updateError: boolean = false;
  deleteRequest: boolean = false;
  errMsg: string = '';



  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Redirect to Login Page if not Authenticated
    if (!this.authService.getAuth()) {
      this.router.navigate(['users/login']);
    }
    // call get user method to return 1 user by id
    // pass in id param
    this.userService.getUser(this.userService.loginUserId).subscribe(data => {
      this.email = data.email;
      this.user_name = data.user_name;
    });
  };
  onUpdate(): void {
    // call login() method in AuthService to validate login creds
    this.userService.updateUser(this.userService.loginUserId, this.email).subscribe(data => {
      if (data['error']) {
        this.errMsg = 'Unable to update email address.';
        this.updateError = true;
      } else {
        this.errMsg = 'Email Successfully Updated.';
        this.updateError = true;
      }
    });
  };
  onReqDel(): void {
    this.deleteRequest = true;
  };
  onDelConf(): void {
    // call login() method in AuthService to validate login creds
    this.userService.delete(this.userService.loginUserId).subscribe(data => {
      if (data['error']) {
        this.errMsg = 'Unable to delete your account.';
        this.updateError = true;
      } else {
        this.authService.setAuth(false);
        this.authService.setAdmin(false);
        this.router.navigate(['/']);
      }
    });
  };
}
