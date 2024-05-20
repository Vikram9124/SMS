import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
student: Student = new Student();
constructor(private service:StudentService)
{}
submitForm()
{
  this.service.addStudent(this.student).subscribe
  (response=>{console.log('STUDENT ADDED SUCCESSFULLY', response); 
this.student=new Student() }, 
error=>console.error('Error adding student', error))
}




}
