import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './providers/user.service';
import { LeagueService } from './providers/league.service';
import { TeamService } from './providers/team.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { LeaguesComponent } from './leagues/leagues.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/admin', component: AdminComponent},
  {path: 'users/update', component: UpdateComponent},
  {path: 'leagues', component: LeaguesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UpdateComponent,
    LeaguesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, LeagueService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
