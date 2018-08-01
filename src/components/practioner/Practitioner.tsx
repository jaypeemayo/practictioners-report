import * as React from "react";
import { FlexColumn } from "../../common/FlexColumn";
import { AppointmentGroup } from "./AppointmentGroup";
import { FlexRow } from "../../common/FlexRow";
import Appointments from "./Appointments";
import { FaChevronUp } from 'react-icons/fa';

import { FaChevronDown } from 'react-icons/fa';
import { IPractitioner } from "./IPractitioner";
import { IAppointment } from "./IAppointment";
import { IAppointmentGroup } from "./IAppointmentGroup";
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


    render() {
        return (
            <div className="border border-primary">
                <FlexColumn>
                    <h4 className="p-3 mb-2 bg-primary text-white" onClick={this.onClick}>{this.props.name} {this.renderChevron()}</h4>

                    <AppointmentGroups appointments={this.props.appointments} />

                    {this.state.isAppointmentShown && <div className={"p-2"}>
                        <Appointments appointments={this.props.appointments} />
                    </div>}
                </FlexColumn>
            </div>
        );
    }
}
