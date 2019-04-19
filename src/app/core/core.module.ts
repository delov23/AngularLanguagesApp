import { NgModule } from "@angular/core";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { LazyAuthGuard } from './guards/auth-lazy.guard';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthGuard } from './guards/auth.guard';
import { LazyAnonymousGuard } from './guards/anonymous-lazy.guard';
import { CourseService } from './services/course.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LessonService } from './services/lesson.service';
import { LessonResolver } from './resolvers/lesson.resolver';
import { UserService } from './services/user.service';
import { AdminGuard } from './guards/admin.guard';
import { UserResolver } from './resolvers/user.resolver';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { SuccessInterceptor } from './interceptors/success.interceptor';
import { ApplicationService } from './services/application.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        ApplicationService,
        CourseService,
        LessonService,
        UserService,
        AuthGuard,
        LazyAuthGuard,
        AnonymousGuard,
        LazyAnonymousGuard,
        AdminGuard,
        LessonResolver,
        UserResolver,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SuccessInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }