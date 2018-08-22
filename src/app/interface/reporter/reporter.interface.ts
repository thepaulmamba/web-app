import { IUser } from '../user/user.interface';
import { IHost } from '../host/host.interface';

export interface IReporter {
    _id?: string;
    isVolunteer?: boolean;
    fname?: string;
    lname?: string;
    gender?: string;
    streetName?: string;
    postalCode?: string;
    city?: string;
    email?: string;
    phoneNumber?: string;
    username?: string;
    status1?: string;
    status2?: string;
    dateRegistrationReporter?: string;
    dateCreationTeam?: string;
    _reporter?: IUser;
    _host?: IHost;
    createdAt?: Date;
    updatedAt?: Date;
    teamLeaders?: any[];
    teamMembers?: any[];
}
