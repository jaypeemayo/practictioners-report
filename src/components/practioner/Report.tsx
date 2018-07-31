import * as React from "react";
import Appointments from "./Appointments";
import DateRangePicker from "../../common/DateRangePicker";
import { Moment } from "moment";
import { FlexRow } from "../../common/FlexRow";
import { FlexColumn } from "../../common/FlexColumn";
import Practitioner from "./Practitioner";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
import axios from "axios";
import { IPractitioner } from "./IPractitioner";
import PractitionerProvider, { PractitionerContext, IPractitionerContextContext } from "./PractitionerProvider";

export interface IReportState {
    startDate: Moment;
    endDate: Moment;
    searchText: string;
    practitioners: IPractitioner[];
}

export interface IReportProps {
}

export default class Report extends React.Component<IReportProps, IReportState> {
    state: IReportState = { startDate: undefined, endDate: undefined, searchText: "", practitioners: [] } as IReportState;
    onChangeStartDate = (date: Moment) => {
        this.setState({ startDate: date }, () => {

        });
    }

    onChangeEndDate = (date: Moment) => {
        this.setState({ endDate: date }, () => {

        });
    }


    componentDidMount() {

    }

    onChange = (event: any) => {
        this.setState({ searchText: event.target.value });
    }

    onClick = () => {
        axios.get(`http://localhost:3000/practitioners?name_like=${this.state.searchText}`)
            .then((response) => {
                this.setState({ practitioners: response.data as IPractitioner[] });
            })
            .catch((error) => {
                console.log(error);
            });
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
                                            <input onChange={this.onChange} />
                                        </div>
                                        <div className="p-2">
                                            <input type="button" onClick={()=>{context.get(this.state.searchText)}} value="Search" />
                                        </div>
                                    </FlexRow>
                                </div>
                                <div className="p-2">
                                    <FlexRow>
                                        <div className="p-2">
                                            <strong>Date Range:</strong>
                                        </div>
                                        <div className="p-2">
                                            <DateRangePicker
                                                maxDate={moment()}
                                                startDate={this.state.startDate}
                                                endDate={this.state.endDate}
                                                monthsShown={2}
                                                onChangeStartDate={(date: Moment) => { this.onChangeStartDate(date) }}
                                                onChangeEndDate={(date: Moment) => { this.onChangeEndDate(date) }}
                                            />
                                        </div>

                                    </FlexRow>
                                </div>
                                <div className="p-2">
                                    {context.state.practitioners.map(practioner => <Practitioner {...practioner} />)}
                                </div>
                            </FlexColumn>
                        </>
                    )}
                </PractitionerContext.Consumer>
            </PractitionerProvider >
        );
    }
}
