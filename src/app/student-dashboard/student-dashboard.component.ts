import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ViewChild('sidenav') public sidenav: MatSidenav | null = null;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  private sidenavSubscription: Subscription | null = null;

  constructor(private sideNavService: SidenavService) { }

  // ngOnInit() {

  //   this.sidenavSubscription = this.sideNavService.getSidenavState().subscribe(isOpen => {
  //     if (isOpen) {
  //       this.sidenav?.open;
  //     }
  //     else {
  //       this.sidenav?.close;
  //     }
  //   })

  //   //opem the sidenav when the component initializes
  //   this.sideNavService.open();
  // }

  ngOnInit(): void {
    console.log('Student DashboardComponent.ngOnInit() called');

  }

  ngAfterViewInit() {
    this.sidenavSubscription = this.sideNavService.getSidenavState().subscribe(isOpen => {
      console.log(`StudentDashBoardComponent: sidenav state changed to ${isOpen}`);

      if (isOpen) {
        this.sidenav?.open;
      }
      else {
        this.sidenav?.close;
      }
    })

    console.log('StudentDashBoardComponent: calling sidenavService.open()');

    //opem the sidenav when the component initializes
    this.sideNavService.open();
  }

  ngOnDestroy() {
    //unsubscribe to prevent memory leaks
    if (this.sidenavSubscription) {
      this.sidenavSubscription.unsubscribe();
    }
  }

  clickMenu() {
    console.log('StudentDashBoardComponent.clickMenu() called');

    this.sideNavService.toggle();
  }


}
