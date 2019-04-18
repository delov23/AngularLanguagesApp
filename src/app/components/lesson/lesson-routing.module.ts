import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LessonPreviewComponent } from './lesson-preview/lesson-preview.component';
import { LessonRemoveComponent } from './lesson-remove/lesson-remove.component';
import { LessonCreateComponent } from './lesson-create/lesson-create.component';
import { LessonResolver } from 'src/app/core/resolvers/lesson.resolver';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'preview/:id', component: LessonPreviewComponent, resolve: { lesson: LessonResolver } },
            { path: 'remove/:id', canActivate: [AdminGuard], component: LessonRemoveComponent, resolve: { lesson: LessonResolver } },
            { path: 'create', canActivate: [AdminGuard], component: LessonCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LessonRoutingModule {}