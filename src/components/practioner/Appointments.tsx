import * as React from "react";
import { Table } from "../../common/Table";
import Appointment from "./Appointment";
import { IAppointment } from "./IAppointment";


export interface IAppointmentsProps {
    appointments: IAppointment[];
}

export default class Appointments extends React.Component<IAppointmentsProps, undefined> {
    render() {
        return (
            <div className="border border-secondary">
               
                <h6 className="p-3 mb-2 bg-secondary text-white">Appointments</h6>
                <Table head={<tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Revenue</th>
                    <th scope="col"></th>
                </tr>}>
                    <>
                        {this.props.appointments.map(appointment => <Appointment {...appointment} />)}
                    </>
                </Table>
            </div>
        );
    }
}
