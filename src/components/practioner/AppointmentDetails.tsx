import * as React from "react";
import { IAppointment } from "./IAppointment";

export interface IAppointmentDetailsProps extends IAppointment {
}

export default class AppointmentDetails extends React.Component<IAppointmentDetailsProps, undefined> { //todo make stateless component
    render() {
        return (<div className="border border-secondary">
            <h6 className="p-3 mb-2 bg-secondary text-white">Appointments Details</h6>

            <div className="row">
                <div className="col-6 text-right display">
                    <strong> Client Name:</strong>
                </div>
                <div className="col-6">
                    {this.props.clientName}
                </div>

            </div>
            <div className="row">
                <div className="col-6 text-right">
                    <strong>  Appointment Type:</strong>
                </div>
                <div className="col-6">
                    {this.props.type}
                </div>

            </div>
            <div className="row">
                <div className="col-6 text-right">
                    <strong>Duration:</strong>
                </div>
                <div className="col-6">
                    {this.props.duration} min
                </div>

            </div>
        </div>
        );
    }
}
