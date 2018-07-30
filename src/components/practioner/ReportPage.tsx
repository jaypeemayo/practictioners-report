import * as React from "react";
import Report from "./Report";

export interface IReportPage {

}

export default class ReportPage extends React.Component<IReportPage, undefined> {
    render() {
        return (
            <>
                <h3>Report</h3>
                <Report />
            </>
        );
    }
}
