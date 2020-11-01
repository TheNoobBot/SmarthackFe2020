import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {of} from 'rxjs';
import {PrescriptionStatus} from '../domain/prescription.model';


@Injectable({ providedIn: 'root' })
export class PrescriptionService {
  private URL = 'http://istvan.sudo.rocks:8080/smarthack-be/api';


  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
  ) {
    this.URL = this.URL + '/prescriptions/' + this.authService.currentUserValue.cnp;

  }

  getPrescriptionsForCurrentUser() {
    // return this.http.get<Prescription[]>(this.URL);
    return of([{id: '1', location: 'str', diagnostic: 'str', recipeNumber: 'str', timestamp: 'str',
      firstDelivery: 'str', recurrencyTime: 7, permanent: true, recurrencyCount: 4,
      deliveredCount: 2, insured: true, medicine: [], status: PrescriptionStatus.ACTIVE
    }]);
  }
}
