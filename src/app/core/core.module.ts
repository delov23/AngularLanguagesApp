import { NgModule } from "@angular/core";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { LazyAuthGuard } from './guards/auth-lazy.guard';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthGuard } from './guards/auth.guard';
import { LazyAnonymousGuard } from './guards/anonymous-lazy.guard';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        LazyAuthGuard,
        AnonymousGuard,
        AuthGuard,
        LazyAnonymousGuard
    ]
})
export class CoreModule { }