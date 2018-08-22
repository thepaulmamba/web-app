import { IUser } from '../user/user.interface';
import { IHost } from '../host/host.interface';

export interface IReport {
  _id?: string;
  generatedReportId?: string;
  title?: string;
  description?: string;
  location?: string;
  long?: number;
  lat?: number;
  note?: string; // this is for host to fill in
  status?: string;
  isVehicleInvolved?: boolean;
  isPeopleInvolved?: boolean;
  vehicleInvolvedDescription?: string;
  peopleInvolvedDescription?: string;
  vehicleInvolvedCount?: number;
  peopleInvolvedCount?: number;
  _reporter?: IUser;
  _host?: IHost;
  date?: string;
  causeOfFinished?: string;
  finishedDate?: string;
  createdAt?: Date;
  updatedAt?: Date;
  language?: string;
}
