import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Medicine} from '../../domain/medicine.model';

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit {
  @Input() public added: boolean;
  @Input() public medication: Medicine;
  @Output() public medicationEmitter: EventEmitter<Medicine> = new EventEmitter<Medicine>();

  public medicationForm;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.medicationForm = this.fb.group({
      name: ['', Validators.required],
      concentration: ['', Validators.required]
    });
  }

  emit() {
    const medicationName = this.medicationForm.controls.name.value;
    const medicationConcentration = this.medicationForm.controls.concentration.value;
    this.medicationEmitter.emit({activeSubstance: medicationName, concentration: medicationConcentration});
  }
}
