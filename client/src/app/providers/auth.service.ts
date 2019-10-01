import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private usersEndpoint: string = 'http://localhost:3000/users/';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        withCredentials: true
    };

    private isAuthenticated: boolean = false;
    private isAdmin: boolean = false;

    //setting Authentication
    setAuth(isAuth: boolean): void {
        this.isAuthenticated = isAuth;
    };
    //getting Authentication
    getAuth(): boolean {
        return this.isAuthenticated;
    };
    //setting Admin
    setAdmin(isAdmin: boolean): void {
        this.isAdmin = isAdmin;
    };
    //getting Admin
    getAdmin(): boolean {
        return this.isAdmin;
    };

}