import * as React from "react";
import AppointmentDetails from "./AppointmentDetails";

export interface IAppointmentProps {
    date: string,
    cost: string,
    revenue: string
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
                        <AppointmentDetails />
                    </td>
                </tr>}
            </>
        );
    }
}
