import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/home/employee'; // Adjust as needed
  private currentEmployeeSubject: BehaviorSubject<Employee | null> = new BehaviorSubject<Employee | null>(null);
  public currentEmployee$: Observable<Employee | null> = this.currentEmployeeSubject.asObservable();
  constructor( private http: HttpClient) { }
  login(email: string, password:string):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiUrl}/login`, { email, password });  }
    getEmployeeById(id: number): Observable<Employee> {
      return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }
    
    setCurrentEmployee(employee: Employee) {
      this.currentEmployeeSubject.next(employee);
    }
}


