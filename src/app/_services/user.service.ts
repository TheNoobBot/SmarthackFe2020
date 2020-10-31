import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../domain/user.model';
import {environment} from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
  private URL = 'localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(this.URL);
  }
}
