import { Component, OnInit } from '@angular/core';
import { STUDENTS } from './mock-student-list';
import { Student } from './Students';

@Component({
  selector: 'app-root',

  templateUrl: './app.comportment.html',
  styles: []
})
export class AppComponent implements OnInit {
  studentList: Student[] = STUDENTS;

  ngOnInit(): void {
    console.table(this.studentList);
    console.log(this.studentList[0].name);
  }

  selectStudent = (studentName: Student) => {
    console.log(` ${studentName}`);
  }


}