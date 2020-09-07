import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Student } from './student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student;
  students: Student [];

  constructor(private http: HttpClient) { }

  newStudent(student : Student){
    return this.http.post<any>('http://localhost:3000/api/insert',student)
  }
  getStudent(){
    return this.http.get<any>('http://localhost:3000/api/students');
  }
  updateStudent(student: Student){
    return this.http.put<any>(`http://localhost:3000/api/${student._id}`,student);
  }
  deleteStudent(_id:string){
    return this.http.delete<any>(`http://localhost:3000/api/${_id}`)
  }

}
