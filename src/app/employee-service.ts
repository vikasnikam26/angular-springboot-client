import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8080/employees';
  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  getEmployee(id: number): Observable<Object> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseURL}`, employee);
  }

  updateEmployee(employee: Object, id: number): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
}
