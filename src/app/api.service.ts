import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = 'http://localhost:8000/api';

  constructor() { }
}
