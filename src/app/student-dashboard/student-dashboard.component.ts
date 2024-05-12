import { Component, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  @ViewChild('sidenav') public sidenav: MatSidenav | null = null;
  constructor(private sideNavService: SidenavService) { }

  clickMenu() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav?.toggle();
    })
  }
}
