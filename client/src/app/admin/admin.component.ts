import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { AuthService } from './../providers/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: Array<User> = [];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { };

  ngOnInit() {
    // Redirect to Login Page if not Authenticated and Admin
    if (!this.authService.getAdmin()) {
      this.router.navigate(['users/login']);
    };

    // call getUsers() method in userService
    this.userService.getUsers().subscribe((data) => {
        this.users = data;
    });

  };
};


