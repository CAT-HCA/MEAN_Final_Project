import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private usersEndpoint: string = 'http://localhost:3000/teams/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }
  //Get to return team data, no params
  // GET: http://localhost:3000/teams/data
  getTeams(): Observable<any> {
    return this.http.get(`${this.usersEndpoint}data`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

}