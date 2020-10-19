import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetComponent } from './meet/meet.component';
import { AthletesComponent } from './athletes/athletes.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "meet", component: MeetComponent},
  {path: "athletes", component: AthletesComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
