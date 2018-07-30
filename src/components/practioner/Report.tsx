import * as React from "react";
import Appointments from "./Appointments";
import DateRangePicker from "../../common/DateRangePicker";
import { Moment } from "moment";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}

export interface IReportState {
    startDate: Moment;
    endDate: Moment;
}

export interface IReportProps {
}

export default class Report extends React.Component<IReportProps, IReportState> {
    state: IReportState = { startDate: undefined, endDate: undefined } as IReportState;
    onChangeStartDate = (date: Moment) => {
        this.setState({ startDate: date }, () => {
            //this.getBookings(context);
        });
    }

    onChangeEndDate = (date: Moment) => {
        this.setState({ endDate: date }, () => {
            //this.getBookings(context);
        });
    }

    render() {
        return (
            <>
                <h3>Practioner Report</h3>

                <input />
                <DateRangePicker
                    maxDate={moment()}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    monthsShown={2}
                    onChangeStartDate={(date: Moment) => { this.onChangeStartDate(date) }}
                    onChangeEndDate={(date: Moment) => { this.onChangeEndDate(date) }}
                />

                <Appointments />
            </>
        );
    }
}
