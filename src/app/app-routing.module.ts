import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDashboardHomeComponent } from './student-dashboard-home/student-dashboard-home.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherDashboardHomeComponent } from './teacher-dashboard-home/teacher-dashboard-home.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'student-dashboard', component: StudentDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      {
        path: 'home', component: StudentDashboardHomeComponent,
      },
    ],
  },
  {
    path: 'teacher-dashboard', component: TeacherDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      {
        path: 'home', component: TeacherDashboardHomeComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
