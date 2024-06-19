import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClassDialogComponent } from '../add-class-dialog/add-class-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Class } from '../shared/interfaces/class.interface';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-classes-dashboard-home',
  templateUrl: './classes-dashboard-home.component.html',
  styleUrls: ['./classes-dashboard-home.component.scss']
})
export class ClassesDashboardHomeComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  displayedColumns: string[] = ['class_id', 'name', 'description']
  dataSource = new MatTableDataSource<Class>()

  constructor(private dialog: MatDialog, private api: ApiService, private http: HttpClient) {
    this.get_classes();
  }

  addClass() {
    this.dialog.open(AddClassDialogComponent, {
      width: '900px'
    })
  }

  get_classes() {
    const url = `${this.api.base_uri_api}classes`
    this.http.get(url, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {
        this.dataSource.data = response.body.classes
        this.dataSource.paginator = this.paginator
      }
    })
  }

  onPageChange(event: PageEvent) {

  }

}
