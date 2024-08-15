import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Root injector
})
export class EmployeeService {
  private employees = ['Gaurav', 'Nikita', 'Bhanu',];

  getEmployees() {
    return this.employees;
  }
}
