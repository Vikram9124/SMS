import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   Url:string='http://localhost:8080/api/students'; 
   getAll:string='http://localhost:8080/api/students/all'; 
   addData:string='http://localhost:8080/api/students/add';
   filter:string='http://localhost:8080/api/students/search/'; 
   delete:string='http://localhost:8080/api/students/delete/'; 
  status: string='';
  errorMessage: string='';
  constructor(private http:HttpClient) { }
public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getAll);
  }

public addStudent(student: Student): Observable<any> {
    return this.http.post(this.addData, student);
}
public findById(id:any):Observable<any>
{
return this.http.get(`${this.filter}${id}`)
}

public deleteById(id:any):Observable<any>
{
  return this.http.delete(`${this.delete}${id}`)
}
}