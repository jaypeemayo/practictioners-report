import * as React from "react";
import { FlexColumn } from "../../common/FlexColumn";
import { FlexRow } from "../../common/FlexRow";
import { Card } from "../../common/Card";
import { IAppointmentGroup } from "./IAppointmentGroup";

export interface IAppointmentGroupProps extends IAppointmentGroup {
}

export const AppointmentGroup = (props: IAppointmentGroupProps) => {
    return (
        <Card title={props.groupKey}>
            <FlexColumn>
                <FlexRow>
                    <div>Cost:</div>
                    <div>{props.cost}</div>
                </FlexRow>
                <FlexRow>
                    <div>Revenue:</div>
                    <div>{props.revenue}</div>
                </FlexRow>
                <FlexRow>
                    <div>Count:</div>
                    <div>{props.count}</div>
                </FlexRow>
            </FlexColumn>
        </Card>
    );
}

