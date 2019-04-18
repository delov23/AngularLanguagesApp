import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL as URL } from './api-keys';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  userAddCourse(courseId: string, userId: string) {
    return this.http.post<{ message: string; }>(`${URL}user/addCourse`, { courseId, userId });
  }

}
