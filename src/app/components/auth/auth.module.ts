import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const declarations = [
    LoginComponent,
    RegisterComponent
]

@NgModule({
    declarations,
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule
    ],
})
export class AuthModule {

}