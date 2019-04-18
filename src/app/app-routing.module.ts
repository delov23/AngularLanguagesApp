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
import { LessonModule } from './components/lesson/lesson.module';

// Lazy Loading Issue
const routes: Routes = [
  { path: '', pathMatch: 'full', canActivate: [AnonymousGuard], component: LandingComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'auth', canLoad: [LazyAnonymousGuard], loadChildren: () => AuthModule },
  { path: 'course', canLoad: [LazyAuthGuard], loadChildren: () => CourseModule },
  { path: 'lesson', canLoad: [LazyAuthGuard], loadChildren: () => LessonModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
