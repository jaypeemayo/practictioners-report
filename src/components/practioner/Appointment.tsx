import * as React from "react";
import AppointmentDetails from "./AppointmentDetails";
import { IAppointment } from "./IAppointment";
import { FaChevronDown, FaChevronUp } from "../../../node_modules/react-icons/fa";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
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
    renderChevron = () => {
        if (this.state.isAppointmentDetailsShown) {
            return <FaChevronUp />;
        }
        else {
            return <FaChevronDown />;
        }
    }
    render() {
        return (
            <>
                <tr onClick={this.onClick}>
                    <th scope="row">{moment(this.props.date).local().format("DD/MM/YYYY")}</th>
                    <td>{moment(this.props.date).local().format("HH:mm A")}</td>
                    <td>{this.props.cost}</td>
                    <td>{this.props.revenue}</td>
                    <td>{this.renderChevron()}</td>

                </tr>
                {this.state.isAppointmentDetailsShown && <tr>
                    <td colSpan={5}>
                        <AppointmentDetails {...this.props}/>
                    </td>
                </tr>}
            </>
        );
    }
}
