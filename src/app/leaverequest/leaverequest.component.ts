import { Component } from '@angular/core';
import { LeaverequestService } from '../leaverequest.service';
@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrl: './leaverequest.component.css'
})
export class LeaverequestComponent {
leaveRequest={
  empName: '',
  empId: '',
  empDepartment: '',
  empContactNumber: '',
  leaveDate: '',
  reason: ''
};
// constructor(private leaveRequestService: LeaverequestService) {}

onSubmit() {
  console.log('Form submitted', this.leaveRequest);
  // Add your form submission logic here
}
  

}
