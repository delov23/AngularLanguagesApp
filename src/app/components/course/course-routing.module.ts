import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseLessonsComponent } from './course-lessons/course-lessons.component';
import { CreateCourseComponent } from './create-course/create-course.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'create', component: CreateCourseComponent, canActivate: [/*AdminGuard*/] },
            { path: 'lessons/:id', component: CourseLessonsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CourseRoutingModule {}