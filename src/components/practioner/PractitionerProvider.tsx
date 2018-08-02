import * as React from "react";
import axios from "axios";
import { IPractitioner } from "./IPractitioner";
import { IAppointment } from "./IAppointment";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
export interface IPractitionerContextContext {
    state: IPractitionerProviderState;
    get: (searctText: string, startDate: Date, endDate: Date) => Promise<void>;
}

export const PractitionerContext = React.createContext<IPractitionerContextContext>({ state: undefined, get: undefined } as IPractitionerContextContext);

export interface IPractitionerProviderState {
    practitioners: IPractitioner[];
}

export default class PractitionerProvider extends React.Component<null, IPractitionerProviderState> {
    state: IPractitionerProviderState = { practitioners: [] } as IPractitionerProviderState;

    get = async (searchText: string, startDate: Date, endDate: Date): Promise<void> => {
        await axios.get(`http://localhost:3000/practitioners?name_like=${searchText}`)
            .then((response) => {
                //date filtering should be done in server side. for demo purposes, i do it here.
                let filteredResponse: IPractitioner[] = this.filteByDate(response.data as IPractitioner[], startDate, endDate);
                this.setState({ practitioners: filteredResponse });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    filteByDate = (practioners: IPractitioner[], startDate: Date, endDate: Date): IPractitioner[] => {
        let reducedPractioners: IPractitioner[] = practioners.reduce((practionerAccumulator: IPractitioner[], practionerItem: IPractitioner) => {

            let appointments: IAppointment[] = practionerItem.appointments.reduce((appointmentAccumulator: IAppointment[], appointmentItem: IAppointment) => {
                if ((startDate && endDate && moment(appointmentItem.date).isSameOrAfter(moment(startDate)) && moment(appointmentItem.date).isSameOrBefore(moment(endDate))) ||
                    (startDate && endDate == undefined && moment(appointmentItem.date).isSameOrAfter(moment(startDate))) ||
                    (startDate === undefined && endDate && moment(appointmentItem.date).isSameOrBefore(moment(endDate))) ||
                    (startDate === undefined && endDate === undefined)) {
                    appointmentAccumulator = [...appointmentAccumulator, appointmentItem];
                }

                return appointmentAccumulator;
            }, [] as IAppointment[]);

            let newPractioner: IPractitioner = { ...practionerItem, appointments: appointments };

            if (appointments.length > 0) {
                practionerAccumulator = [...practionerAccumulator, newPractioner];
            }

            return practionerAccumulator;
        }, [] as IPractitioner[]);

        return reducedPractioners;
    }

    render() {
        return (
            <PractitionerContext.Provider value={{
                state: this.state,
                get: this.get,
            }}>
                {this.props.children}
            </PractitionerContext.Provider>
        );
    }
}
