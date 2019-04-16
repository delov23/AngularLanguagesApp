import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:9999/';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(body: Object) {
    return this.http.post(`${URL}auth/signup`, body);
  }

  isAuthenticated() {
    return !!sessionStorage.getItem('token');
  }

  isAdmin() {
    return sessionStorage.getItem('isAdmin').toString() === 'true';
  }

  saveUser() {

  }
}
