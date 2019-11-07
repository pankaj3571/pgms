import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomsComponent } from './rooms/rooms.component';
import {AppRoutingModule} from './app-routing.module';
import{RouterModule} from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import {CommonService} from './common-service/common.service'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    RoomsComponent,
    AddDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
