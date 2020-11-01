import { Component, OnInit } from '@angular/core';
import {Patient} from '../../domain/user.model';
import {UserService} from '../../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  public patients: Patient[];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getPatientsForDoctor().subscribe((patients: Patient[]) => {
      this.patients = patients;
    });
  }

  goto(patient: Patient) {
    this.router.navigate(['user'], { queryParams: { patientCNP: patient.cnp } });
  }
}
