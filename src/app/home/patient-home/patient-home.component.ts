import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from '../../_services/prescription.service';
import {Prescription} from '../../domain/prescription.model';
import {Medicine} from '../../domain/medicine.model';

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
      console.log(data);
      this.prescriptions = data;
      this.prescriptions.forEach((prescription: Prescription) => {
        const medicine = [];
        const aux = prescription.items.split(';');
        aux.forEach((medicineConcat: string) => {
          const aux2 = medicineConcat.split(',');
          const newMedicine: Medicine = new Medicine();
          newMedicine.activeSubstance = aux2[0];
          newMedicine.concentration = aux2[1];
          medicine.push(newMedicine);
        });
        prescription.medicine = medicine;
      });
    });
  }

}
