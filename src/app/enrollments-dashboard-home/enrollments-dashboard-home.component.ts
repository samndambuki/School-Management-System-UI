import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddEnrollmentDialogComponent } from '../add-enrollment-dialog/add-enrollment-dialog.component';

@Component({
  selector: 'app-enrollments-dashboard-home',
  templateUrl: './enrollments-dashboard-home.component.html',
  styleUrls: ['./enrollments-dashboard-home.component.scss']
})
export class EnrollmentsDashboardHomeComponent {


  constructor(private dialog: MatDialog) { }



  add_enrollment_dialog() {
    this.dialog.open(AddEnrollmentDialogComponent, {
      width: '900px'
    })
  }

}
