import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL as URL } from './api-keys';
import { IUser } from 'src/app/components/shared/models/IUser';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  userAddCourse(courseId: string, userId: string) {
    return this.http.post<{ message: string; }>(`${URL}user/addCourse`, { courseId, userId });
  }

  getUserProfile(userId: string) {
    return this.http.get<{ message: string; user: IUser }>(`${URL}user/profile/${userId}`)
  }
}
