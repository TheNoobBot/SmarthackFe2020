import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthenticationService} from '../_services/authentication.service';
import {RegistrationDetails} from '../domain/registration-details';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      cnp: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', ],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.register(this.getRegisterDetails())
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  private getRegisterDetails(): RegistrationDetails {
    const registrationDetails = new RegistrationDetails();

    registrationDetails.cnp = this.f.cnp.value;
    registrationDetails.password = this.f.password.value;
    registrationDetails.email = this.f.email.value;
    registrationDetails.address = this.f.address.value;
    registrationDetails.login = this.f.cnp.value;

    return registrationDetails;
  }

  navigateToLogin() {
    this.router.navigate(['']);
  }
}
