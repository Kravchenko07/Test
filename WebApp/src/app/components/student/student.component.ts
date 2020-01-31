import { Component, OnInit, Inject } from '@angular/core';
import { RestService } from 'app/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent } from 'app/models/IStudent';
import { StudentAddComponent } from 'app/components/student-add/student-add.component';
import { StudentEditComponent } from 'app/components/student-edit/student-edit.component';
import { StudentDeleteComponent } from '../student-delete/student-delete.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students: IStudent[] = [];
  studentEntity: IStudent;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.students = [];
    this.rest.getStudents().subscribe((data: IStudent[]) => {
      this.students = data;
    });
  }

  createStudent() {
    const dialogRef = this.dialog.open(StudentAddComponent, {
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result != null) {
        result.age = Number(result.age);
        this.rest.addStudent(result).subscribe((resultAdd: IStudent) => {
          this.students.push(resultAdd);
        });
      }
    });
  }

  updateStudent(student: IStudent) {
    const dialogRefUpdate = this.dialog.open(StudentEditComponent, {
      data: student
    });

    dialogRefUpdate.afterClosed().subscribe(result => {
     
      if (result != null) {
        this.rest.updateStudent(result.id, result).subscribe((resultUpdate: IStudent) => {
        });
      }
    });
  }

  deleteStudent(student: IStudent) {
    const dialogRefUpdate = this.dialog.open(StudentDeleteComponent, {
      data: student
    });

    dialogRefUpdate.afterClosed().subscribe(result => {

      if (result != null) {
        this.rest.deleteStudent(student.id).subscribe(() => {

          const index: number = this.students.indexOf(student);
          if (index !== -1) {
            this.students.splice(index, 1);
          }
        });
      }
    });
  }
}

