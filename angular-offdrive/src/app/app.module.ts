import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MydriveComponent } from './mydrive/mydrive.component';
import { RecentComponent } from './recent/recent.component';
import { SharedComponent } from './shared/shared.component';
import { TrashComponent } from './trash/trash.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { TestingComponent } from './testing/testing.component';

const appRoutes: Routes = [
  { path:'', component: LoginComponent },
  { path:'mydrive', component: MydriveComponent },
  { path:'recent', component: RecentComponent },
  { path:'shared', component: SharedComponent },
  { path:'trash', component: TrashComponent },
  { path:'profile', component: ProfileComponent },
  { path:'settings', component: SettingsComponent },
  { path:'about', component: AboutComponent },
  { path:'testing', component: TestingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MydriveComponent,
    RecentComponent,
    SharedComponent,
    TrashComponent,
    ProfileComponent,
    SettingsComponent,
    AboutComponent,
    TestingComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
