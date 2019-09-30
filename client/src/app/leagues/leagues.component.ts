import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeagueService } from './../providers/league.service';
import { TeamService } from './../providers/team.service';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.leagueService.getLeagues().subscribe(data => {
      console.log(data);
      this.leagues = data;

    });
    this.teamService.getTeams().subscribe(data => {
      console.log(data);
      this.teams = data;
    });
  }
}
