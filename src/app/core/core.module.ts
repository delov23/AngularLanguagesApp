import { NgModule } from "@angular/core";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService
    ]
})
export class CoreModule { }