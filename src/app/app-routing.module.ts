import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {RoomsComponent} from './rooms/rooms.component';
import { AddDetailsComponent } from './add-details/add-details.component';
const routes: Routes=[
  { path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{path:'dashboard',component:DashboardComponent},
{path:'rooms',component:RoomsComponent},
{path:'addDetails',component:AddDetailsComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
