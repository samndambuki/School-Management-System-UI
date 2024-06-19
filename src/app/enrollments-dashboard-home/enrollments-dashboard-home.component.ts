import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEnrollmentDialogComponent } from '../add-enrollment-dialog/add-enrollment-dialog.component';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Enrollment } from '../shared/interfaces/enrollment.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-enrollments-dashboard-home',
  templateUrl: './enrollments-dashboard-home.component.html',
  styleUrls: ['./enrollments-dashboard-home.component.scss']
})
export class EnrollmentsDashboardHomeComponent {
  displayedColumns: string[] = ['student_id', 'class_id'];
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null
  dataSource = new MatTableDataSource<Enrollment>();

  constructor(private dialog: MatDialog, private api: ApiService, private http: HttpClient) {
    this.get_enrollments();
  }

  add_enrollment_dialog() {
    this.dialog.open(AddEnrollmentDialogComponent, {
      width: '900px'
    })
  }

  enrollments: Enrollment[] | undefined

  get_enrollments() {
    const url = `${this.api.base_uri_api}enrollments`;
    this.http.get(url, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        this.dataSource.data = response.body.enrollments
      }
    })
  }

  onPageChange(event: PageEvent) { }

}
