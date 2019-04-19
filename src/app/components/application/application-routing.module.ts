import { NgModule } from '@angular/core'
import { Routes, RouterModule,  } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { ApplicationPreviewComponent } from './application-preview/application-preview.component';

const applicationRoutes: Routes = [
    { path: 'user', component: ApplicationListComponent },
    { path: 'admin', component: ApplicationListComponent, canActivate: [AdminGuard] },
    { path: 'apply', component: ApplicationCreateComponent },
    { path: 'preview/:id', component: ApplicationPreviewComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(applicationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule { }