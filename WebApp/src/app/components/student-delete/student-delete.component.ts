import { Component, OnInit, Inject } from '@angular/core';
import { IStudent } from 'app/models/IStudent';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { StudentEditComponent } from '../student-edit/student-edit.component';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.scss']
})
export class StudentDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IStudent, public dialogRefUpdate: MatDialogRef<StudentEditComponent>) { }


  ngOnInit() {

  }

  acceptDelete() {
    this.dialogRefUpdate.close(this.data);
  }

  cancelDelete() {
    this.dialogRefUpdate.close(null);
  }
}
