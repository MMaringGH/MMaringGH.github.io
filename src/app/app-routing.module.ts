import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home.component';
import { AboutComponent } from './main/about.component';
import { SocialComponent } from './main/social.component';
import { ProjectsComponent } from './main/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '*', redirectTo: 'home',  pathMatch: 'full'},
  { path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'social', component: SocialComponent },
      { path: 'projects', component: ProjectsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
