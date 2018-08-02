import * as React from "react";
import { FlexColumn } from "../../common/FlexColumn";
import { Appointments } from "./Appointments";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { IPractitioner } from "./IPractitioner";
import { IAppointment } from "./IAppointment";
import { AppointmentGroups } from "./AppointmentGroups";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
export interface IPractitionerState {
    isAppointmentShown: boolean;
}

export interface IPractitionerProps extends IPractitioner {
}

export default class Practitioner extends React.Component<IPractitionerProps, IPractitionerState> {
    state: IPractitionerState = { startDate: undefined, endDate: undefined, isAppointmentShown: false } as IPractitionerState;
    onClick = () => {
        this.setState({ isAppointmentShown: !this.state.isAppointmentShown });
    }
    renderChevron = () => {
        if (this.state.isAppointmentShown) {
            return <FaChevronUp />;
        }
        else {
            return <FaChevronDown />;
        }
    }

    groupBy = (item: IAppointment) => {
        return `${moment(item.date).format("MMM")} ${moment(item.date).format("YYYY")}`;

        //below are sample groupBys
        //return `Week ${Math.ceil(moment(item.date).date()/7)} of ${moment(item.date).format("MMMM")} ${moment(item.date).format("YYYY")}`;
        //return moment(item.date).format("YYYY");
    }

    render() {
        return (
            <div className="border border-primary">
                <FlexColumn>
                    <h4 className="p-3 mb-2 bg-primary text-white" onClick={this.onClick}>{this.props.name} {this.renderChevron()}</h4>
                    <AppointmentGroups appointments={this.props.appointments} groupBy={this.groupBy} />
                    {this.state.isAppointmentShown && <div className={"p-2"}>
                        <Appointments appointments={this.props.appointments} />
                    </div>}
                </FlexColumn>
            </div>
        );
    }
}
