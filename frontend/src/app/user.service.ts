import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users"
  http: any;
  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${this.baseURL}`);
  }
  createUser(user: Users): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  updateUser(id: number, user: Users): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }
  getUserById(id: number): Observable<Users> {
    return this.httpClient.get<Users>(`${this.baseURL}/${id}`);
  }

  
}