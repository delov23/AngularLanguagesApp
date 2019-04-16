import { NgModule } from '@angular/core'
import { Routes, RouterModule,  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const postRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(postRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }