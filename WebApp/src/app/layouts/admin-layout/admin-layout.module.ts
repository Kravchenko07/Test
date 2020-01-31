import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MatDialogModule } from '@angular/material/dialog';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { StudentComponent } from 'app/components/student/student.component';
import { StudentAddComponent } from 'app/components/student-add/student-add.component';
import { StudentEditComponent } from 'app/components/student-edit/student-edit.component';
import { DashBoardComponent } from 'app/components/dash-board/dash-board.component';
import { StudentDeleteComponent } from 'app/components/student-delete/student-delete.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  declarations: [
    StudentComponent,
    StudentDeleteComponent,
    StudentAddComponent,
    StudentEditComponent,
    DashBoardComponent,
  ],
  entryComponents: [StudentAddComponent, StudentEditComponent,StudentDeleteComponent]
})

export class AdminLayoutModule { }
