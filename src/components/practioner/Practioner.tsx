import * as React from "react";
import { FlexColumn } from "../../common/FlexColumn";
import { CostAndRevenue } from "./CostAndRevenue";
import { FlexRow } from "../../common/FlexRow";
import Appointments from "./Appointments";
import { FaChevronUp } from 'react-icons/fa';

import { FaChevronDown } from 'react-icons/fa';
export interface IPractionerState {
    isAppointmentShown: boolean;
}

export interface IPractionerProps {
    name: string;
}

export default class Practioner extends React.Component<IPractionerProps, IPractionerState> {
    state: IPractionerState = { startDate: undefined, endDate: undefined, isAppointmentShown: false } as IPractionerState;
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
                 
                    <FlexRow>
                            <div className={"p-2"}>
                                <CostAndRevenue title={"JAN 2018"} cost={"200"} revenue={"100"} />
                            </div>
                            <div className={"p-2"}>
                                <CostAndRevenue title={"FEB 2018"} cost={"200"} revenue={"100"} />
                            </div>
                            <div className={"p-2"}>
                                <CostAndRevenue title={"MAR 2018"} cost={"200"} revenue={"100"} />
                            </div>
                        </FlexRow>
                        {this.state.isAppointmentShown && <div className={"p-2"}>
                            <Appointments />
                        </div>}
                </FlexColumn>
            </div>
                
                        );
                    }
                }
