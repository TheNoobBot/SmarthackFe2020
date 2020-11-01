import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Patient, User} from '../domain/user.model';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';


@Injectable({ providedIn: 'root' })
export class UserService {
  private URL = 'http://istvan.sudo.rocks:8080/smarthack-be/api';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  getPatientsForDoctor(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.URL + '/patient/doctor/' + this.authService.currentUserValue.cnp);
  }

  isUserDoctor(cnp: string): Observable<any>{
    return this.http.get(this.URL + '/users/' + this.authService.currentUserValue.cnp);
  }

  getPatient(id: string) {
    return this.http.get(this.URL + '/users/' + id);
  }
}
