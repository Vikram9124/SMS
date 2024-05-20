import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  student:Student[] | undefined; 
  studentId: string = '';
  constructor(private service:StudentService)
  {
  }
  public searchById()
  {
    if(this.studentId)
    {
    this.service.findById(this.studentId).subscribe((data: any)=>
    {
      this.student=data;
    });
    }
    else
    {
      console.log("ID Incorrect please enter the valid one!!!")
    }
  }


}
