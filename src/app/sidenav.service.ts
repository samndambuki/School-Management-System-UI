import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  //BehaviorSubject - acts as a special kind of observable 
  //and allows components to subscribe to it and receive updates whenever new data is emitted
  //<any> - initial value a subject can hold
  //null - initializes it with a new value
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(true);
  constructor() { }
  public toggle() {
    //value null is emitted whenever we subscribe to the behavior subject
    return this.sideNavToggleSubject.next(true);
  }
}
