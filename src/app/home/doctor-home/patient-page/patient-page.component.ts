import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Patient} from '../../../domain/user.model';
import {UserService} from '../../../_services/user.service';
import {Medicine} from '../../../domain/medicine.model';
import {PrescriptionService} from '../../../_services/prescription.service';


@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientPageComponent implements OnInit {
  public patient: Patient;
  public medications: Medicine[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
<<<<<<< HEAD
      this.userService.getPatient(params.patientCNP).subscribe((patient: Patient) => {
=======
      this.userService.searchPatients(params.patientId).subscribe((patient: Patient) => {
>>>>>>> origin/master
        this.patient = patient;
        this.cdr.detectChanges();
      });
    });
  }

  public addMed(med: Medicine): void {
    let shouldAdd = true;
    this.medications.forEach((medicine: Medicine) => {
      if (medicine.activeSubstance === med.activeSubstance) {
        shouldAdd = false;
        return;
      }
    });
    if (shouldAdd) {
      this.medications.push(med);
    }

  }

  gotoHome() {
    this.prescriptionService.postResponse();
    this.router.navigate(['home']);
  }
}
