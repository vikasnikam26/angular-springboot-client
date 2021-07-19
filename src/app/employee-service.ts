import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employees";
  constructor(private http : HttpClient) { }

  getEmployeeList() : Observable<any> {
    return this.http.get(this.baseURL);
  }
}
