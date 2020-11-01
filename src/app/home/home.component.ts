import {Component, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';
import {User} from '../domain/user.model';
import {UserService} from '../_services/user.service';
import {AuthenticationService} from '../_services/authentication.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
  loading = false;
  users: User[];
  isDoctor: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.isUserDoctor();
  }

  public isUserDoctor(){
    this.userService.isUserDoctor(this.authService.currentUserValue.cnp).subscribe((data) =>{
      console.log(data);
      this.isDoctor = data.edoctor;
    });
  }
}
