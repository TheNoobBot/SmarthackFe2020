import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from '../../_services/prescription.service';
import {Prescription} from '../../domain/prescription.model';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
  public prescriptions: Prescription[];

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit(): void {
    this.prescriptionService.getPrescriptionsForCurrentUser().subscribe((data) => {
      this.prescriptions = data;
    });
  }

}
