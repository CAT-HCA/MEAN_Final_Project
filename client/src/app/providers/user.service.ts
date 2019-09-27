import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  login(user_name: string, password: string) : Observable<any> {
    return this.http.post(`${this.usersEndpoint}login`, {user_name : user_name, password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}