// src/app/department/department.component.ts
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: string[];

  constructor(private departmentService: DepartmentService) {
    this.departments = this.departmentService.getDepartments();
  }

  ngOnInit(): void {}
}
