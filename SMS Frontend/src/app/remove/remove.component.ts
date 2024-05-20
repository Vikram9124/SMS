import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrl: './remove.component.css'
})
export class RemoveComponent implements OnInit{
  stud:Student[] | undefined; 
  constructor(private service:StudentService){}
  ngOnInit(): void 
  {
    this.service.findAll().subscribe(data=>{this.stud=data});
  }
  public deleteById(removeId:number)
  {
   this.service.deleteById(removeId).subscribe(
  (_response)=>
  {
    console.log("Deleted"); 
  },
  (_error)=>
  {
   console.log("Failed to Delete"); 
  }


   );
  }
  

}
