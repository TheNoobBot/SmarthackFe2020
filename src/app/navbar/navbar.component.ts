import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isDoctor = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isUserDoctor();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  public isUserDoctor(){
    this.userService.isUserDoctor(this.authService.currentUserValue.cnp).subscribe((data) => {
      this.isDoctor = data.edoctor;
    });
  }
}
