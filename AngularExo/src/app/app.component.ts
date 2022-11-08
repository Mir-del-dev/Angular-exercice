import { Component, OnInit } from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Students';

@Component({
  selector: 'app-root',

  templateUrl: './app.comportment.html',
  styles: []
})
export class AppComponent implements OnInit {
  StudentList: Student[] = STUDENTS;
  studentSelected:Student|undefined;

  ngOnInit(): void {
    console.table(this.StudentList);
  }

  selectOneStudent (StudentId: String) {
  const student: Student|undefined = this.StudentList.find(
    Student => Student.id == +StudentId
  );
  
  if (student) {
    console.log('vous avez cliqué sur létudiant ${Student.name}');
     this.studentSelected = student;
  }
  else{
    console.log("létudiant nexiste pas");
    this.studentSelected = student;
  }

  } 


}

