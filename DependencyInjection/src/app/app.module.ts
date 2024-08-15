import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: EmployeeService, useClass: EmployeeService } // App-level injector
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
