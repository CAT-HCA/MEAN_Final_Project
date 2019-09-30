import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private sub: any;
  private id: number = 0;
  user: Array<any> = [];
  private email: string = '';
  private user_name: string = '';
  updateError: boolean = false;
  deleteRequest: boolean = false;
  errMsg: Array<string> = [];


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // get id from Query Params
    // Subscribe to Observable
    // pass anonymous callback function to subscribe method
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id = params['id'];
      });
    this.userService.getUser(this.id).subscribe(data => {
      this.email = data.email;
      this.user_name = data.user_name;
    });
  };

  onUpdate(): void {
    // call login() method in AuthService to validate login creds
    this.userService.updateUser(this.id, this.email).subscribe(data => {
      if (data['error']) {
        this.errMsg.push("Unable to update email address.");
        this.updateError = true;
      } else {
        this.email = this.email;
        this.errMsg.push("Email Successfully Updated");
        this.updateError = true;
      }
    });
  };


}
