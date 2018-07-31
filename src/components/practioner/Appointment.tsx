import * as React from "react";
import AppointmentDetails from "./AppointmentDetails";
import { IAppointment } from "./IAppointment";

export interface IAppointmentProps extends IAppointment {
}

export interface IAppointmentState {
    isAppointmentDetailsShown: boolean;
}

export default class Appointment extends React.Component<IAppointmentProps, IAppointmentState> {
    state: IAppointmentState = { isAppointmentDetailsShown: false };
    onClick = () => {
        this.setState({isAppointmentDetailsShown: !this.state.isAppointmentDetailsShown})
    }
    render() {
        return (
            <>
                <tr onClick={this.onClick}>
                    <th scope="row">{this.props.date}</th>
                    <td>{this.props.cost}</td>
                    <td>{this.props.revenue}</td>

                </tr>
                {this.state.isAppointmentDetailsShown && <tr>
                    <td colSpan={3}>
                        <AppointmentDetails {...this.props}/>
                    </td>
                </tr>}
            </>
        );
    }
}
