import { Component, OnInit } from '@angular/core';
import {Patient} from '../../domain/user.model';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  public patients: Patient[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPatientsForDoctor().subscribe((patients: Patient[]) => {
      this.patients = patients;
    });
  }

}
