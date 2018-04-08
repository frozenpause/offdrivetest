import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';

import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path:'', component: ItemsComponent },
  { path:'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AboutComponent
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
