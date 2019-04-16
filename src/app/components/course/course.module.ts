import { NgModule } from "@angular/core";
import { CreateCourseComponent } from './create-course/create-course.component';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const declarations = [CreateCourseComponent];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        CourseRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class CourseModule { }