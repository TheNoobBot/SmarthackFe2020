import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../domain/user.model';
import {Observable} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
  private URL = 'http://istvan.sudo.rocks:8080/smarthack-be/api';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.URL);
  }

  isUserDoctor(cnp: string): Observable<any>{
    return this.http.get(this.URL + '/users/' + cnp);
  }
}
