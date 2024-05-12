import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';

@Component({
  selector: 'app-student-dashboard-home',
  templateUrl: './student-dashboard-home.component.html',
  styleUrls: ['./student-dashboard-home.component.scss']
})
export class StudentDashboardHomeComponent {
  constructor(private dialog: MatDialog) { }
  addStudent() {
    this.dialog.open(AddStudentDialogComponent,
      { width: '900px' }
    )
  }
}
