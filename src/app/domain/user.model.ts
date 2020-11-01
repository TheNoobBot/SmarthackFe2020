export class User {
  id: number;
  cnp: string;
  password: string;
  firstName: string;
  lastName: string;
  isDoctor: boolean;
  token?: string;
}

interface PatientDetails {
  healthIsuranceId: string;
  doctorId: number;
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
