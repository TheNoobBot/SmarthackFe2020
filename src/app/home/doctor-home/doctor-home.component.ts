import { Component, OnInit } from '@angular/core';
import {Patient} from '../../domain/user.model';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  private patients: Patient[];

  constructor() { }

  ngOnInit(): void {
  }

}
