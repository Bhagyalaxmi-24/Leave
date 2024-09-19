import { Component } from '@angular/core';
import { LeaverequestService } from '../leaverequest.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeLeave } from '../employee-leave';
@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrl: './leaverequest.component.css'
})
export class LeaverequestComponent {
constructor() {}
// submitform!: NgForm;
//   private baseURL = "http://http://localhost:8080/api/employee";
//   employee: EmployeeLeave = new EmployeeLeave();

// //   saveEmployee() {
// //     this.leaveRequestService. createLeaveRequest(this.employee).subscribe(data => {
// //       console.log(data);
     
// //     },
// //       error => console.log(error));
// //   }
// ngOnInit(): void { }
//   onSubmit() {
//     console.log(this.employee);


// //     this.saveEmployee();
// //   }
}
