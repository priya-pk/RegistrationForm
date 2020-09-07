import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.resetForm();
    this.getList();
  }
  resetForm(form?: NgForm){
    if(form)
    form.reset();
    this.studentService.selectedStudent={
      _id: "",
      studentName:"",
      rollNo:null,
      class: "",
      address:"",
      phone:null,
      gender:""
    }
  }

  onSubmit(form : NgForm){
    if(form.value._id ==""){
      this.studentService.newStudent(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.getList();
        alert("Succes");
      })
      console.log("Called")
    }
    else{
      this.studentService.updateStudent(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.getList();
        alert("Succes");
      })
    }
  }


  getList(){
    this.studentService.getStudent().subscribe((res)=>{
      this.studentService.students = res;
    })
  }

  edit(student: Student){
    this.studentService.selectedStudent = student;
  }

  delete(_id: string, form: NgForm){
    if(confirm('Are you sure?')==true){
      this.studentService.deleteStudent(_id).subscribe((res)=>{
        this.getList();
        this.resetForm(form);
      })
    }
  }
}
