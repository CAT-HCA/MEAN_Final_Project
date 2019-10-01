import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from './../providers/league.service';
import { TeamService } from './../providers/team.service';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: Array<string> = [];
  teams: Array<string> = [];

  public TeamName: string = '';
  public League: string = '';
  public ManagerName: string = '';
  public Picture: string = '';
  public Name: string = '';
  public Code: string = '';
  public Description: string = '';

  constructor(
    private leagueService: LeagueService,
    private teamService: TeamService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Redirect to Login Page if not Authenticated
   if (!this.authService.getAuth()) {
      this.router.navigate(['users/login']);
   }

    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;

    });
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }
}
