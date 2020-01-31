import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IStudent } from 'app/models/IStudent';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IStudent, public dialogRefUpdate: MatDialogRef<StudentEditComponent>) { }


  ngOnInit() {

  }

  editStudent() {
    this.dialogRefUpdate.close(this.data);
  }
  cancelEditStudent() {
    this.dialogRefUpdate.close(null);
  }

}
