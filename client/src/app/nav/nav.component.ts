import { Component, OnInit } from '@angular/core';
import { AuthService } from './../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { };

  ngOnInit() { };

  // Checks if User is Authenticated
  isAuth(): boolean {
    return this.authService.getAuth();
  };
  // Checks if User is Admin
  isAdmin(): boolean {
    return this.authService.getAdmin();
  };

  // home click event - Navigate to index page
  goHome(): void {
    this.router.navigate(['/']);
  };
  // Login click event - Navigate to login page
  goLogin(): void {
    this.router.navigate(['users/login']);
  };
  // Register click event - Navigate to register page
  goRegister(): void {
    this.router.navigate(['users/register']);
  };
  // Leagues click event - Navigate to leagues page
  goLeagues(): void {
    this.router.navigate(['leagues']);
  };
  // Update click event - Navigate to update page
  goUpdate(): void {
    this.router.navigate(['users/update']);
  };
  // Admin click event - Navigate to admin page
  goAdmin(): void {
    this.router.navigate(['users/admin']);
  };
  // logout click event - clears auth and Navigate to index page
  goLogout(): void {
    this.authService.setAuth(false);
    this.authService.setAdmin(false);
    this.router.navigate(['/']);
  };
};
