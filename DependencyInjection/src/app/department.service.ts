import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments = ['HR', 'Development', 'Design','BDA', 'DevOps'];

  getDepartments() {
    return this.departments;
  }
}
