import { Component } from '@angular/core';
import { EmployeeLeave } from '../employee-leave';
import { LeaverequestService } from '../leaverequest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
//   leaves!: EmployeeLeave[];
// constructor(private EmployeeLeaveService: LeaverequestService,Router:Router){
// this.leaves=[];

// }
// displayleaves(){
//   this.EmployeeLeaveService.getleaveList().subscribe(data=>{
//     this.leaves=data;
//   });
// }
}
