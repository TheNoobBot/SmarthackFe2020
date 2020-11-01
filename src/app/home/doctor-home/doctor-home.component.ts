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
  searchValue: string;
  public currentPatient: Patient;
  error: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.userService.getPatientsForDoctor().subscribe((patients: Patient[]) => {
      this.patients = patients;
    });

  }

  goto(patient: Patient) {
    this.router.navigate(['user'], { queryParams: { patientCNP: patient.cnp } });
  }

  filterPatients() {
    this.userService.searchPatients(this.searchValue).subscribe((patients) => {
      if (patients.length){
        this.error = false;
        this.patients = patients;
      }
      else{
        this.error = true;
        this.patients = [];
      }
    });
  }
}
