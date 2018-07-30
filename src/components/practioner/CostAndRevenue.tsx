import * as React from "react";
import { FlexColumn } from "../../common/FlexColumn";
import { FlexRow } from "../../common/FlexRow";
import { Card } from "../../common/Card";


export interface ICostAndRevenueProps {
    cost: string;
    revenue: string;
    title: string;
}

export const CostAndRevenue = (props: ICostAndRevenueProps) => {
    return (
        <Card title={props.title}>
            <FlexColumn>
                <FlexRow>
                    <div>Cost:</div>
                    <div>{props.cost}</div>
                </FlexRow>
                <FlexRow>
                    <div>Revenue:</div>
                    <div>{props.revenue}</div>
                </FlexRow>
            </FlexColumn>
        </Card>
    );
}

