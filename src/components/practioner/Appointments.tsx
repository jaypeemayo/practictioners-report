import * as React from "react";
import AppointmentDetails from "./AppointmentDetails";

export interface IAppointments {

}

export default class Appointments extends React.Component<IAppointments, undefined> {
    render() {
        return (
            <>
                <h3>Appointments</h3>
                <AppointmentDetails />
            </>
        );
    }
}
