import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
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
    private router: Router) { }

  ngOnInit() {
    // call getUsers() method in userService
    this.userService.getUsers().subscribe((data) => {
      data.forEach((user, index) => {
        if(user.is_admin == 1){
          user.is_admin = "Y";
        } else {
          user.is_admin = "N";
        }
        this.users.push(new User(user.id, user.user_name, user.password, user.email, user.is_admin));
      })
    });

  }
}


