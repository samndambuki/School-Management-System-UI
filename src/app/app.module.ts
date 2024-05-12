import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDashboardHomeComponent } from './student-dashboard-home/student-dashboard-home.component';
import { AddStudentDialogComponent } from './add-student-dialog/add-student-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDashboardComponent,
    StudentDashboardHomeComponent,
    AddStudentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
