import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from '@app/_services/authentication.service';
import {Prescription} from '@app/domain/prescription.model';


@Injectable({ providedIn: 'root' })
export class PrescriptionService {
  private URL = 'localhost:8080/api/prescriptions';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
  ) {
    this.URL = this.URL + '/' + this.authService.currentUserValue.cnp;
  }

  getForCurrentUser() {
    return this.http.get<Prescription[]>(this.URL);
  }
}
