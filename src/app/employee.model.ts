// employee.model.ts
export interface Employee {
    emp_id: number;
    emp_name: string;
    emp_salary: number;
    emp_email: string;
    emp_number: number;
    emp_department: string;
    emp_password: string; // Ideally, avoid exposing this in the frontend
}
