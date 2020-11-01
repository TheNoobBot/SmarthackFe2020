import {Medicine} from './medicine.model';

export enum PrescriptionStatus {
  REQUESTED,
  ACTIVE,
  COMPLETED,
  CANCELED
}

export class Prescription {
  public id: string;
  public location: string;
  public diagnostic: string;
  public recipeNumber: string;
  public timestamp: string;
  public firstDelivery: string;
  public recurrencyTime: number;
  public permanent: boolean;
  public recurrencyCount: number;
  public deliveredCount: number;
  public status: PrescriptionStatus;
  public insured: boolean;
  public medicine: Medicine[];
  public items: string;
}
