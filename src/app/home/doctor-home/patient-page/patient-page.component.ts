import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../../../domain/user.model';
import {UserService} from '../../../_services/user.service';
import {Medicine} from '../../../domain/medicine.model';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {
  public patient: Patient;
  public medications: Medicine[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    console.log(this.patient);
    this.route.queryParams.subscribe(params => {
      this.userService.getPatient(params.patientId).subscribe((patient: Patient) => {
        this.patient = patient;
      });
    });
  }

  public addMed(med: Medicine): void {
    this.medications.push(med);
  }
}
