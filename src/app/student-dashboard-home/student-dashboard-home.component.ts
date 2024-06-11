import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Student, StudentsResponse } from '../shared/interfaces/student.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-dashboard-home',
  templateUrl: './student-dashboard-home.component.html',
  styleUrls: ['./student-dashboard-home.component.scss']
})
export class StudentDashboardHomeComponent {
  displayedColumns: string[] = ['first_name', 'last_name', 'date_of_birth', 'gender', 'address', 'phone_number'];
  dataSource = new MatTableDataSource<Student>();
  //view child decorator is used to get reference to a child element
  //@ViewChild(MatPaginator) - tells angular to look for MatPaginator directive inside the template
  //paginator:MatPaginator - :MatPaginator is the property name
  //! - non-null assertion operator. tells typescript compiler that a particular variable will not be null or undefined
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  students: any

  constructor(private dialog: MatDialog, private api: ApiService, private http: HttpClient) {
    this.get_students();
  }

  addStudent() {
    this.dialog.open(AddStudentDialogComponent,
      { width: '900px' }
    )
  }

  get_students() {
    const url = `${this.api.base_uri_api}students`;
    this.http.get(url, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.ok) {
          this.students = response.body.students
        }
      }
    })
  }

}
