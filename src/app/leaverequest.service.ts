import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeLeave } from './employee-leave';

@Injectable({
  providedIn: 'root'
})
export class LeaverequestService {
private apiUrl='http://localhost:8080/api/employee';
  constructor(private http:HttpClient) { }
  // createLeaveRequest(leaveRequest: any): Observable<any> {
  //   return this.http.post(this.apiUrl, leaveRequest);
  // }

  // Get all leave requests
  // getAllLeaveRequests(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  addEmployee(employee: EmployeeLeave): Observable<Object>{
    return this.http.post(`${this.apiUrl}`, employee);
  }
getleaveList(): Observable<EmployeeLeave[]>{
  return this.http.get<EmployeeLeave[]>(`${this.apiUrl}`);
  }
}
