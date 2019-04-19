import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/app/material.module';

const declarations = [
    LoginComponent,
    RegisterComponent
]

@NgModule({
    declarations,
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MaterialModule
    ],
})
export class AuthModule {

}