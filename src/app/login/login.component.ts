import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';  // Adjust the import path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Correct property name
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  onLogin() {
    this.employeeService.login(this.email, this.password).subscribe(
      employee => {
        this.employeeService.setCurrentEmployee(employee);
        this.router.navigate(['/profile']); // Navigate to profile component
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
