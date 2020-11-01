import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../domain/user.model';
import {RegistrationDetails} from '../domain/registration-details';
import {Router} from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private URL = 'localhost:8080/api/login';


  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get currentUserValue(): User {
    return {id: 10000, cnp: '55555', firstName: 'meh', lastName: 'meh', password: '12345', isDoctor: false};
    // return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.URL, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(registrationDetails: RegistrationDetails) {
    return this.http.post<any>(this.URL, registrationDetails)
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
