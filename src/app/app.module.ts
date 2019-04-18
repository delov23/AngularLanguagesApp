import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AuthModule } from './components/auth/auth.module';
import { SharedModule } from './components/shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/home/landing/landing.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { CourseModule } from './components/course/course.module';
import { LessonModule } from './components/lesson/lesson.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule,
    AuthModule,
    CourseModule,
    LessonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
