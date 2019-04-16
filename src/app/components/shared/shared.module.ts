import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from 'src/app/material.module';

const declarations = [
    FooterComponent,
    NavigationComponent
]

@NgModule ({
    declarations,
    imports: [
        RouterModule,
        CommonModule,
        MaterialModule
    ],
    exports: declarations,
}) 
export class SharedModule {}