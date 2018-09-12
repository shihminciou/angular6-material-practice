import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, public departmentService: DepartmentService) { }

  // departments = [
  //   {id: 1 , value: '帝寶'},
  //   {id: 2 , value: '都會假期'},
  //   {id: 3 , value: '堂幫'}
  // ];

  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initialFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployees(this.service.form.value);
      this.service.form.reset();
      this.service.initialFormGroup();
    }
  }

}
