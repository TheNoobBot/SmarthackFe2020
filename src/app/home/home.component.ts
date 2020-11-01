import {Component, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';
import {User} from '../domain/user.model';
import {UserService} from '../_services/user.service';
import {AuthenticationService} from '../_services/authentication.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
  loading = false;
  users: User[];

  constructor(
    private userService: UserService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  public isDoctor(): boolean {
    return this.authService.currentUserValue.isDoctor;
  }
}