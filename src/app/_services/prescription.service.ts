import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Prescription, PrescriptionStatus} from '../domain/prescription.model';
import {Observable, of} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PrescriptionService {
  private URL = 'localhost:8080/api/prescriptions';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
  ) {
    this.URL = this.URL + '/' + this.authService.currentUserValue.cnp;
  }

  getForCurrentUser(): Observable<Prescription[]> {
    return of([{id: '1', location: 'str', diagnostic: 'str', recipeNumber: 'str', timestamp: 'str',
    firstDelivery: 'str', recurrencyTime: 7, permanent: true, recurrencyCount: 4,
      deliveredCount: 2, insured: true, medicine: [], status: PrescriptionStatus.ACTIVE
    }]);
    // return this.http.get<Prescription[]>(this.URL);
  }
}
