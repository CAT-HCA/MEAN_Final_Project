import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  loginUserId: number = 0;

  constructor(private http: HttpClient) { }
  //get all user data
  //no params
  // GET: http://localhost:3000/users/data
  getUsers(): Observable<any> {
    return this.http.get(`${this.usersEndpoint}data`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  };
  //get single user data by id
  //param: pass id(integer) from query params
  // GET: http://localhost:3000/users/data/{id}
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.usersEndpoint}data/${id}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  };
  // registering new user (user_name & email, unique)
  //params: pass user object of user_name(string), password(string), email(string), is_admin(boolean)
  register(user_name: string, password: string, email: string): Observable<any> {
    return this.http.post(`${this.usersEndpoint}register`,
      { user_name: user_name, password: password, email: email }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  };
  // logging in user
  //params: pass user object of user_name(string), password(string)
  // POST: http://localhost:3000/users/login
  login(user_name: string, password: string): Observable<any> {
    return this.http.post(`${this.usersEndpoint}login`, { user_name: user_name, password: password }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  };
  // updating user email address
  //params: email(string)
  // PUT http://localhost:3000/users/update/{id}
  updateUser(id: number, email: string): Observable<any> {
    return this.http.put(`${this.usersEndpoint}update/${id}`, { email: email }, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  //deleting user
  //params: pass id(integer)
  // DELETE: http://localhost:3000/users/{id}
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.usersEndpoint}delete/${id}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  };
}