import * as React from "react";
import Appointments from "./Appointments";

export interface IReport {

}

export default class Report extends React.Component<IReport, undefined> {
    render() {
        return (
            <>
                <h3>Practioner Report</h3>
                <Appointments />
            </>
        );
    }
}
