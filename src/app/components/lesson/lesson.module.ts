import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LessonRoutingModule } from './lesson-routing.module';
import { LessonCreateComponent } from './lesson-create/lesson-create.component';
import { LessonPreviewComponent } from './lesson-preview/lesson-preview.component';
import { LessonRemoveComponent } from './lesson-remove/lesson-remove.component';
import { VocabularyComponent } from './lesson-preview/vocabulary/vocabulary.component';
import { GrammarComponent } from './lesson-preview/grammar/grammar.component';
import { TestComponent } from './lesson-preview/test/test.component';

const declarations = [LessonCreateComponent, LessonPreviewComponent, LessonRemoveComponent, VocabularyComponent, GrammarComponent, TestComponent];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        LessonRoutingModule
    ]
})
export class LessonModule { }