import { NgModule } from "@angular/core";
import { CreateCourseComponent } from './create-course/create-course.component';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseLessonsComponent } from './course-lessons/course-lessons.component';

const declarations = [CreateCourseComponent, CourseLessonsComponent];

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