import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL as URL } from './api-keys';
import { ICourse } from 'src/app/components/shared/models/ICourse';
import { ILesson } from 'src/app/components/shared/models/ILesson';

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get<{ courses: ICourse[]; message: string; }>(`${URL}course/all`);
  }

  getLessonsByCourse(id: string) {
    return this.http.get<{ lessons: ILesson[]; message: string; }>(`${URL}lesson/findByCourse/${id}`);
  }

  createCourse(body: ICourse) {
    return this.http.post<{ message: string; }>(`${URL}course/create`, body);
  }
}
