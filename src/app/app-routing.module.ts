import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/home/landing/landing.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { AnonymousGuard } from './core/guards/anonymous.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LazyAnonymousGuard } from './core/guards/anonymous-lazy.guard';
import { LazyAuthGuard } from './core/guards/auth-lazy.guard';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UserResolver } from './core/resolvers/user.resolver';

// Lazy Loading Issue
const routes: Routes = [
  { path: '', pathMatch: 'full', canActivate: [AnonymousGuard], component: LandingComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'auth', canLoad: [LazyAnonymousGuard], loadChildren: './components/auth/auth.module#AuthModule' },
  { path: 'course', canLoad: [LazyAuthGuard], loadChildren: './components/course/course.module#CourseModule' },
  { path: 'lesson', canLoad: [LazyAuthGuard], loadChildren: './components/lesson/lesson.module#LessonModule' },
  { path: 'application', canLoad: [LazyAuthGuard], loadChildren: './components/application/application.module#ApplicationModule' },
  { path: 'user/profile', canActivate: [AuthGuard], component: ProfileComponent, resolve: { user: UserResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
