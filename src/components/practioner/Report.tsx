import * as React from "react";
import { DateRangePicker } from "../../common/DateRangePicker";
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
import * as debounce from "debounce";
import { AuthorizationContext, IAuthorizationContextContext } from "../authorization/AuthorizationProvider";

export interface IReportState {
    startDate: Moment;
    endDate: Moment;
    searchText: string;
    searchTextType: string;
    practitioners: IPractitioner[];
}

export default class Report extends React.Component<null, IReportState> {
    state: IReportState = {
        startDate: undefined,
        endDate: undefined,
        searchText: "",
        searchTextType: "",
        practitioners: []
    } as IReportState;

    onChangeStartDate = (date: Moment, context: IPractitionerContextContext) => {
        this.setState({ startDate: date }, () => {
            this.getPractitioners(context)
        });
    }

    onChangeEndDate = (date: Moment, context: IPractitionerContextContext) => {
        this.setState({ endDate: date }, () => {
            this.getPractitioners(context)
        });
    }

    onChangeInput = (event: any, context: IPractitionerContextContext) => {
        this.setState({ searchText: event.target.value }, () => {
            this.getPractitioners(context)
        });
    }

    onChangeInputType = (event: any, context: IPractitionerContextContext) => {
        this.setState({ searchTextType: event.target.value }, () => {
            this.getPractitioners(context)
        });
    }

    getPractitioners = debounce((context: IPractitionerContextContext) => {
        context.get(this.state.searchText,
            this.state.startDate ? this.state.startDate.toDate() : undefined,
            this.state.endDate ? this.state.endDate.toDate() : undefined, this.state.searchTextType)
    }, 500);

    render() {
        return (
            <AuthorizationContext.Consumer>
                {(authContext: IAuthorizationContextContext) => (
                    <PractitionerProvider authContext={authContext}>
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
                                                    <input onChange={(event: any) => { this.onChangeInput(event, context) }} />
                                                </div>
                                            </FlexRow>
                                            <FlexRow>
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
                                                        onChangeStartDate={(date: Moment) => { this.onChangeStartDate(date, context) }}
                                                        onChangeEndDate={(date: Moment) => { this.onChangeEndDate(date, context) }}
                                                    />
                                                </div>
                                            </FlexRow>
                                            <FlexRow>
                                                <div className="p-2">
                                                    <strong>Appointment Type:</strong>
                                                </div>
                                                <div className="p-2">
                                                    <input onChange={(event) => { this.onChangeInputType(event, context) }} />
                                                </div>
                                            </FlexRow>
                                            {/* <FlexRow>
                                        <div className="p-2">
                                            <input type="button" onClick={() => {
                                                context.get(this.state.searchText,
                                                    this.state.startDate ? this.state.startDate.toDate() : undefined,
                                                    this.state.endDate ? this.state.endDate.toDate() : undefined, this.state.searchTextType)
                                            }}
                                                value="Search" />
                                        </div>
                                    </FlexRow> */}
                                        </div>
                                        <div className="p-2">
                                            {context.state.practitioners.map((practitioner, i) => <Practitioner key={i} {...practitioner} />)}
                                        </div>
                                    </FlexColumn>

                                </>

                            )}
                        </PractitionerContext.Consumer>
                    </PractitionerProvider >
                )}
            </AuthorizationContext.Consumer>

        );
    }
}
