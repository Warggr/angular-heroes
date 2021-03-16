import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaneswalkersComponent } from './planeswalkers/planeswalkers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{path: 'planeswalkers', component: PlaneswalkersComponent },
	{path: 'dashboard', component: DashboardComponent },
	{path: 'detail/:id', component: HeroDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
