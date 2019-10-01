import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private usersEndpoint: string = 'http://localhost:3000/leagues/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any> {
    return this.http.get(`${this.usersEndpoint}data`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}