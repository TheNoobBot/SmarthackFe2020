export class User {
  cnp: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  edoctor: boolean;
  epacient: boolean;
  token?: string;
}

interface PatientDetails {
  healthIsuranceId: string;
  doctorCnp: number;
}

export type Patient = User & PatientDetails;

enum DoctorStatus {
  REGISTERED,
  CONFIRMED,
  DENIED
}

interface DoctorDetails {
  pic: string;
  doctorStatus: DoctorStatus;
}

export type Doctor = User & DoctorDetails;
