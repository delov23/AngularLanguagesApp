import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ILesson } from 'src/app/components/shared/models/ILesson';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LessonService } from '../services/lesson.service';

@Injectable()
export class LessonResolver implements Resolve<{ message: string; lesson: ILesson }> {
    constructor(private lessonService: LessonService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{ message: string; lesson: ILesson }> {
        const id: string = route.params['id'];

        return this.lessonService.getLessonById(id);
    }
}