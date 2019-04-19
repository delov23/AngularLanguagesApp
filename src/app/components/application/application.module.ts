import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationPreviewComponent } from './application-preview/application-preview.component';

const declarations = [
    ApplicationCreateComponent,
    ApplicationListComponent,
    ApplicationPreviewComponent
]

@NgModule({
    declarations,
    imports: [
        CommonModule,
        ApplicationRoutingModule,
        ReactiveFormsModule,
        MaterialModule
    ],
})
export class ApplicationModule { }