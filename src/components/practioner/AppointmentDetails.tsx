import * as React from "react";

export interface IAppointmentDetailsProps {
}

export default class AppointmentDetails extends React.Component<IAppointmentDetailsProps, undefined> {
    render() {
        return (<div className="border border-secondary">
            <h6 className="p-3 mb-2 bg-secondary text-white">Appointments Details</h6>

            <div className="row">
                <div className="col-6 text-right display">
                    <strong> Client Name:</strong>
                </div>
                <div className="col-6">
                    Jaypee Mayo
                </div>

            </div>
            <div className="row">
                <div className="col-6 text-right">
                    <strong>  Appointment Type:</strong>
                </div>
                <div className="col-6">
                    Type 1
                </div>

            </div>
            <div className="row">
                <div className="col-6 text-right">
                    <strong>Duration:</strong>
                </div>
                <div className="col-6">
                    50 mins
                </div>

            </div>
        </div>
        );
    }
}
