import { Routes } from '@angular/router';

import { StudentComponent } from 'app/components/student/student.component';
import { DashBoardComponent } from 'app/components/dash-board/dash-board.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'student', component: StudentComponent },

];
