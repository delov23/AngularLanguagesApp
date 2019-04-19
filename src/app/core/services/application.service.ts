import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL as URL } from './api-keys';
import { IApplication, IApplicationEntity } from 'src/app/components/shared/models/IApplication';

@Injectable()
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getById(id: string) {
    return this.http.get<{ message: string; application: IApplication }>(`${URL}application/${id}`);
  }

  getAll() {
    return this.http.get<{ message: string; applications: IApplication[] }>(`${URL}application/all`);
  }

  apply(body: IApplicationEntity) {
    return this.http.post<{ message: string }>(`${URL}application/apply`, body);
  }

  getByUserId (userId: string) {
    return this.http.get<{ message: string; applications: IApplication[] }>(`${URL}application/user/${userId}`);    
  }

  approve (value: number, id: string) {
    return this.http.put<{ message: string; }>(`${URL}application/approve/${value}/${id}`, {});
  }

}