import * as React from "react";
import Report from "./Report";

export interface IReportPageProps {
}

export default class ReportPage extends React.Component<IReportPageProps, undefined> {
    render() {
        return (
            <>
                <h3>Report</h3>
                <Report />
            </>
        );
    }
}
