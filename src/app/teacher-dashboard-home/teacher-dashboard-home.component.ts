import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTeacherDialogComponent } from '../add-teacher-dialog/add-teacher-dialog.component';

@Component({
  selector: 'app-teacher-dashboard-home',
  templateUrl: './teacher-dashboard-home.component.html',
  styleUrls: ['./teacher-dashboard-home.component.scss']
})
export class TeacherDashboardHomeComponent {
  constructor(private dialog: MatDialog) { }
  add_teacher() {
    this.dialog.open(AddTeacherDialogComponent, {
      width: '900px'
    })
  }
}
