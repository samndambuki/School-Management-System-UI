import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent {
  editStudentForm = new FormGroup({
    first_name:new FormControl(),
    last_name:new FormControl(),
    date_of_birth:new FormControl(),
    gender:new FormControl(),
    address:new FormControl(),
    phone_number:new FormControl()
  })

  constructor(private dialog:MatDialog){}

}
