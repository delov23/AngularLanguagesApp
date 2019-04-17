import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './components/auth/auth.module';
import { LandingComponent } from './components/home/landing/landing.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { AnonymousGuard } from './core/guards/anonymous.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LazyAnonymousGuard } from './core/guards/anonymous-lazy.guard';
import { LazyAuthGuard } from './core/guards/auth-lazy.guard';
import { CourseModule } from './components/course/course.module';

// Lazy Loading Issue
const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent, canActivate: [AnonymousGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'auth', canLoad: [LazyAnonymousGuard], loadChildren: () => AuthModule },
  { path: 'course', canLoad: [LazyAuthGuard], loadChildren: () => CourseModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
