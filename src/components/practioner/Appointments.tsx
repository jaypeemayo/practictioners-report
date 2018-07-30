import * as React from "react";
import AppointmentDetails from "./AppointmentDetails";

export interface IAppointmentsProps {
}

export default class Appointments extends React.Component<IAppointmentsProps, undefined> {
    render() {
        return (
            <>
                <h3>Appointments</h3>
                <AppointmentDetails />
            </>
        );
    }
}
