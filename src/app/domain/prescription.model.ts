enum PrescriptionStatus {
  REQUESTED,
  ACTIVE,
  COMPLETED,
  CANCELED
}

export class Prescription {
  private id: string;
  private location: string;
  private diagnostic: string;
  private recipeNumber: string;
  // private ZonedDateTime timestamp;
  // private ZonedDateTime firstDelivery;
  private recurrencyTime: number;
  private permanent: boolean;
  private recurrencyCount: number;
  private deliveredCount: number;
  private status: PrescriptionStatus;
  private insured: boolean;
}
