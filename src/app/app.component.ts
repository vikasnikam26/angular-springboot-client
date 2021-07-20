import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employees: Observable<Employee[]> | undefined;

  title = 'angular-springboot-client';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployee(1).subscribe((data) => {
      console.log(data);
    });
  }
}
