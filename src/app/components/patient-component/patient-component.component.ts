import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../domain/user.model';

@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css']
})
export class PatientComponentComponent implements OnInit {
  @Input() public patient: Patient;

  constructor() { }

  ngOnInit(): void {
  }

}
