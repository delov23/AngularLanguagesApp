import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL as URL } from './api-keys';
import { IUser, IUserEntity } from 'src/app/components/shared/models/IUser';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token() {
    return sessionStorage.getItem('token');
  }

  get userId() {
    return sessionStorage.getItem('userId');
  }

  registerUser(body: IUser) {
    return this.http.post(`${URL}auth/signup`, body);
  }

  loginUser(body: IUser) {
    return this.http.post(`${URL}auth/signin`, body);
  }

  logoutUser() {
    sessionStorage.clear();
  }

  isAuthenticated() {
    return !!sessionStorage.getItem('token');
  }

  isAdmin() {
    if (sessionStorage.getItem('isAdmin') === null || sessionStorage.getItem('isAdmin') === undefined) {
      return false;
    }
    return sessionStorage.getItem('isAdmin').toString() === 'true';
  }

  saveUser(user: IUserEntity) {
    sessionStorage.setItem('token', user.token);
    sessionStorage.setItem('isAdmin', user.role === 'Admin' ? 'true' : 'false');
    sessionStorage.setItem('userId', user.userId);
  }
}
