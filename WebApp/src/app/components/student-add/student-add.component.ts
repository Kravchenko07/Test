import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IStudent } from 'app/models/IStudent';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public studentEntity: IStudent, public dialogRefCreate: MatDialogRef<StudentAddComponent>) { }

  ngOnInit() {

  }

  addStudent() {
    (Object.keys(this.studentEntity).length == 0) ? this.dialogRefCreate.close(null) : this.dialogRefCreate.close(this.studentEntity);
  }
  cancelAddStudent() {
    this.dialogRefCreate.close(null);
  }

}
