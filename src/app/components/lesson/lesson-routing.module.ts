import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LessonPreviewComponent } from './lesson-preview/lesson-preview.component';
import { LessonRemoveComponent } from './lesson-remove/lesson-remove.component';
import { LessonCreateComponent } from './lesson-create/lesson-create.component';
import { LessonResolver } from 'src/app/core/resolvers/lesson.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'preview/:id', component: LessonPreviewComponent, resolve: { lesson: LessonResolver } },
            { path: 'remove/:id', component: LessonRemoveComponent, canActivate: [/* AdminGuard */] },
            { path: 'create', component: LessonCreateComponent, canActivate: [/* AdminGuard */] }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LessonRoutingModule {}