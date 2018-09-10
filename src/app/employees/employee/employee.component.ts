import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  departments = [
    {id: 1 , value: '帝寶'},
    {id: 2 , value: '都會假期'},
    {id: 3 , value: '堂幫'}
  ];

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initialFormGroup();
  }

}
