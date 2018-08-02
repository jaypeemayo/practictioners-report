import * as React from "react";
import {DateRangePicker} from "../../common/DateRangePicker";
import { Moment } from "moment";
import { FlexRow } from "../../common/FlexRow";
import { FlexColumn } from "../../common/FlexColumn";
import Practitioner from "./Practitioner";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
import { IPractitioner } from "./IPractitioner";
import PractitionerProvider, { PractitionerContext, IPractitionerContextContext } from "./PractitionerProvider";

export interface IReportState {
    startDate: Moment;
    endDate: Moment;
    searchText: string;
    practitioners: IPractitioner[];
}

export default class Report extends React.Component<null, IReportState> {
    state: IReportState = {
        startDate: undefined,
        endDate: undefined,
        searchText: "",
        practitioners: []
    } as IReportState;
    onChangeStartDate = (date: Moment) => {
        this.setState({ startDate: date });
    }

    onChangeEndDate = (date: Moment) => {
        this.setState({ endDate: date });
    }

    onChangeInput = (event: any) => {
        this.setState({ searchText: event.target.value });
    }

    render() {
        return (
            <PractitionerProvider>
                <PractitionerContext.Consumer>
                    {(context: IPractitionerContextContext) => (
                        <>
                            <h3>Practitioner Report</h3>
                            <FlexColumn>
                                <div className="p-2">
                                    <FlexRow>
                                        <div className="p-2">
                                            <strong> Search Practitioner:</strong>
                                        </div>
                                        <div className="p-2">
                                            <input onChange={this.onChangeInput} />
                                        </div>
                                        <div className="p-2">
                                            <strong>Date Range:</strong>
                                        </div>
                                        <div className="p-2">
                                            <DateRangePicker
                                                minDate={moment().subtract(3, "years")}
                                                maxDate={moment()}
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                monthsShown={2}
                                                onChangeStartDate={(date: Moment) => { this.onChangeStartDate(date) }}
                                                onChangeEndDate={(date: Moment) => { this.onChangeEndDate(date) }}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <input type="button" onClick={() => {
                                                context.get(this.state.searchText,
                                                    this.state.startDate ? this.state.startDate.toDate() : undefined,
                                                    this.state.endDate ? this.state.endDate.toDate() : undefined)
                                            }}
                                                value="Search" />
                                        </div>
                                    </FlexRow>
                                </div>
                                <div className="p-2">
                                    {context.state.practitioners.map((practitioner, i) => <Practitioner key={i} {...practitioner} />)}
                                </div>
                            </FlexColumn>
                        </>
                    )}
                </PractitionerContext.Consumer>
            </PractitionerProvider >
        );
    }
}
