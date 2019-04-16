import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './components/auth/auth.module';
import { LandingComponent } from './components/home/landing/landing.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { AnonymousGuard } from './core/guards/anonymous.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LazyAnonymousGuard } from './core/guards/anonymous-lazy.guard';

// Lazy Loading Issue
const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent, canActivate: [AnonymousGuard] },
  { path: 'auth', canLoad: [LazyAnonymousGuard], loadChildren: () => AuthModule },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
