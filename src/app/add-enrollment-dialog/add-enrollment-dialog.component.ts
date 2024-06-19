import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-enrollment-dialog',
  templateUrl: './add-enrollment-dialog.component.html',
  styleUrls: ['./add-enrollment-dialog.component.scss']
})
export class AddEnrollmentDialogComponent {
  enrollment_form = new FormGroup({
    student_id: new FormControl(),
    class_id: new FormControl()
  });
  constructor(private api: ApiService, private http: HttpClient,) { }
  add_enrollment() {
    const url = `${this.api.base_uri_api}enrollments`;
    const formData = this.enrollment_form.value;
    this.http.post(url, formData, { withCredentials: true, observe: 'response' }).subscribe({
      next: (response: HttpResponse<any>) => {

      }
    })
  }


}
