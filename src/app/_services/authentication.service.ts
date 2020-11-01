import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../domain/user.model';
import {RegistrationDetails} from '../domain/registration-details';
import {Router} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private URL = 'http://istvan.sudo.rocks:8080/smarthack-be/api/';


  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.URL + 'authenticate', { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(registrationDetails: RegistrationDetails) {
    return this.http.post<any>(this.URL + 'register', registrationDetails)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.router.navigate(['']);
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
