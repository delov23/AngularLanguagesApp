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

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        LazyAuthGuard,
        AnonymousGuard,
        AuthGuard,
        LazyAnonymousGuard,
        CourseService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
    ]
})
export class CoreModule { }