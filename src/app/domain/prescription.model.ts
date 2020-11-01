import {Medicine} from './medicine.model';

export enum PrescriptionStatus {
  REQUESTED,
  ACTIVE,
  COMPLETED,
  CANCELED
}

export class Prescription {
  private _id: string;
  private _location: string;
  private _diagnostic: string;
  private _recipeNumber: string;
  private _timestamp: string;
  private _firstDelivery: string;
  private _recurrencyTime: number;
  private _permanent: boolean;
  private _recurrencyCount: number;
  private _deliveredCount: number;
  private _status: PrescriptionStatus;
  private _insured: boolean;
  private _medicine: Medicine[];


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get diagnostic(): string {
    return this._diagnostic;
  }

  set diagnostic(value: string) {
    this._diagnostic = value;
  }

  get recipeNumber(): string {
    return this._recipeNumber;
  }

  set recipeNumber(value: string) {
    this._recipeNumber = value;
  }

  get timestamp(): string {
    return this._timestamp;
  }

  set timestamp(value: string) {
    this._timestamp = value;
  }

  get firstDelivery(): string {
    return this._firstDelivery;
  }

  set firstDelivery(value: string) {
    this._firstDelivery = value;
  }

  get recurrencyTime(): number {
    return this._recurrencyTime;
  }

  set recurrencyTime(value: number) {
    this._recurrencyTime = value;
  }

  get permanent(): boolean {
    return this._permanent;
  }

  set permanent(value: boolean) {
    this._permanent = value;
  }

  get recurrencyCount(): number {
    return this._recurrencyCount;
  }

  set recurrencyCount(value: number) {
    this._recurrencyCount = value;
  }

  get deliveredCount(): number {
    return this._deliveredCount;
  }

  set deliveredCount(value: number) {
    this._deliveredCount = value;
  }

  get status(): PrescriptionStatus {
    return this._status;
  }

  set status(value: PrescriptionStatus) {
    this._status = value;
  }

  get insured(): boolean {
    return this._insured;
  }

  set insured(value: boolean) {
    this._insured = value;
  }

  get medicine(): Medicine[] {
    return this._medicine;
  }

  set medicine(value: Medicine[]) {
    this._medicine = value;
  }
}
