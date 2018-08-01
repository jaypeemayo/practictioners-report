import * as React from "react";
import { IAppointment } from "./IAppointment";
import { IAppointmentGroup } from "./IAppointmentGroup";
import { ArrayHelper } from "../../helpers/ArrayHelper";
import { FlexRow } from "../../common/FlexRow";
import { AppointmentGroup } from "./AppointmentGroup";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}

export interface IAppointmentGroupsProps {
    appointments: IAppointment[];
}

export interface IAppointmentGroupsState {
    groups: IAppointmentGroup[];
}

export class AppointmentGroups extends React.Component<IAppointmentGroupsProps, IAppointmentGroupsState>  {
    componentDidMount() {
        var groups: IAppointmentGroup[] = this.props.appointments.reduce((accumulator: IAppointmentGroup[], item: IAppointment) => {
            let key = `${moment(item.date).format("MMMM")} ${moment(item.date).format("YYYY")}`;
            let index: number = ArrayHelper.findIndex(accumulator, (g: IAppointmentGroup) => g.groupKey === key);
            if (index >= 0) {
                let group = accumulator[index];
                group = {
                    ...group,
                    cost: group.cost + item.cost,
                    revenue: group.revenue + item.revenue,
                    count: group.count + 1,
                }

                accumulator = ArrayHelper.updateArray(accumulator, index, group);
            }
            else {
                accumulator = [...accumulator,
                { groupKey: key, cost: item.cost, revenue: item.revenue, count: 1 } as IAppointmentGroup]
            }
            return accumulator;

        }, [] as IAppointmentGroup[]);

        this.setState({ groups: groups });
    }

    render() {
        return (
            <FlexRow>
                {this.state && this.state.groups.map(group =>
                    <div className={"p-2"}>
                        <AppointmentGroup {...group} />
                    </div>
                )}
            </FlexRow>
        );
    }
}


