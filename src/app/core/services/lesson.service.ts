import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL as URL } from './api-keys';
import { ILesson } from 'src/app/components/shared/models/ILesson';

@Injectable()
export class LessonService {

  constructor(private http: HttpClient) { }

  getLessonById(id: string) {
    return this.http.get<{ lesson: ILesson; message: string; }>(`${URL}lesson/${id}`);
  }

  removeLessonById(id: string) {
    return this.http.delete<{ message: string; }>(`${URL}lesson/remove/${id}`);
  }

  createLesson(body) {
    return this.http.post<{ message: string }>(`${URL}lesson/create`, body);
  }

}
