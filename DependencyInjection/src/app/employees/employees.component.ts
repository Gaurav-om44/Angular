// src/app/employees/employees.component.ts
import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [{ provide: EmployeeService, useClass: EmployeeService }] // Component-level injector
})
export class EmployeesComponent implements OnInit {
  employees: string[];
  departments: string[];

  constructor(
    @SkipSelf() private departmentService: DepartmentService,
    @Optional() private employeeService: EmployeeService
  ) {
    // Handle Optional service
    if (this.employeeService) {
      this.employees = this.employeeService.getEmployees();
    } else {
      this.employees = ['No employees available'];
    }

    // Use SkipSelf to bypass local injector and get department service
    this.departments = this.departmentService.getDepartments();
  }

  ngOnInit(): void {}
}
