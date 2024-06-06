import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDashboardHomeComponent } from './student-dashboard-home/student-dashboard-home.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'student-dashboard', component: StudentDashboardComponent,
    data: { active: 'student-dashboard' },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      {
        path: 'home', component: StudentDashboardHomeComponent,
        data: { active: 'home' }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
