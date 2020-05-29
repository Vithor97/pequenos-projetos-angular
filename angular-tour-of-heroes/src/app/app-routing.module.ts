import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { SigninComponent } from './home/signin/signin.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes:Routes = [
  { path: 'heroes', component: HeroesComponent  },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'main', component: TelaPrincipalComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
