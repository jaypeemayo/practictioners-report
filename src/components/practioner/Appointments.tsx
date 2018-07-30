import * as React from "react";
import AppointmentDetails from "./AppointmentDetails";
import { Table } from "../../common/Table";
import Appointment from "./Appointment";

export interface IAppointmentsProps {
}

export default class Appointments extends React.Component<IAppointmentsProps, undefined> {
    render() {
        return (
            <div className="border border-secondary">
                <h6 className="p-3 mb-2 bg-secondary text-white">Appointments</h6>
                <Table head={<tr>
                    <th scope="col">Date</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Revenue</th>
                </tr>}>
                    <>
                        <Appointment date={"10/10/2018"} cost="100" revenue="revenue" />
                        <Appointment date={"10/10/2018"} cost="100" revenue="revenue" />
                        <Appointment date={"10/10/2018"} cost="100" revenue="revenue" />
                        <Appointment date={"10/10/2018"} cost="100" revenue="revenue" />
                        <Appointment date={"10/10/2018"} cost="100" revenue="revenue" />
                        <Appointment date={"10/10/2018"} cost="100" revenue="revenue" />
                    </>
                </Table>   
            </div>
        );
    }
}
