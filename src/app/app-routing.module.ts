import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { SocialComponent } from './main/social/social.component';
import { ProjectsComponent } from './main/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/home', pathMatch: 'full'},
  { path: '*', redirectTo: 'main/home', pathMatch: 'full'},
  { path: 'main',
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
