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
    getGroupKey:(item: IAppointment) => any;
}

export class AppointmentGroups extends React.Component<IAppointmentGroupsProps>  {
    getGroupedAppointments = (): IAppointmentGroup[] =>{
        if(!this.props.appointments)
        {
            return [];
        }
        var groups: IAppointmentGroup[] = this.props.appointments.reduce((accumulator: IAppointmentGroup[], item: IAppointment) => {
            let key = this.props.getGroupKey(item);
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
        return groups;
    }

    render() {
        return (
            <FlexRow>
                {this.getGroupedAppointments().map((group, i) =>
                    <div key={i} className={"p-2"}>
                        <AppointmentGroup key={i} {...group} />
                    </div>
                )}
            </FlexRow>
        );
    }
}


