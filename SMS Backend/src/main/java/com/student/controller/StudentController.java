package com.student.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.student.entity.Student;
import com.student.repo.StudentRepository;
import com.student.service.StudentService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api/students")
public class StudentController {
	@Autowired
	private StudentService studentService;

	@PostMapping("/add")//PostMapping API for adding the student data to MySql Database 
	public Student addStudent(@RequestBody Student student) {
		return studentService.saveStudent(student);
	}
	@PutMapping("/updateById/{id}")//PutMapping API for update or modify the data by Id
    public Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
        return studentService.updateStudent(newStudent, id);
    }

	@GetMapping("/all")//GetMapping for display all the Student data from the DataBase
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}

	@GetMapping("/{id}")//'http://localhost:8080/api/students/'
	public Student getStudentById(@PathVariable Long id) {
		return studentService.getStudentById(id);
	}

	@GetMapping("/search/{key}")//'http://localhost:8080/api/students/search/'
	public List<Student> getStudentByName(@PathVariable String key) {
		return studentService.searchStudents(key);
	}
	@DeleteMapping("/delete/{id}")//'http://localhost:8080/api/students/delete/'
	public void deleteStudent(@PathVariable("id") Long id)
	{
		studentService.deleteStudentById(id);
	}
}
