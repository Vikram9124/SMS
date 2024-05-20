import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  stud!: Student[]; 
  constructor(private service:StudentService)
  { }
  ngOnInit(): void {
    this.service.findAll().subscribe(data=>
      {this.stud=data;}); 
  }
}
