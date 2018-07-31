import { IAppointment } from "./IAppointment";

export interface IPractitioner
{
    name: string;
    appointments: IAppointment[];
}