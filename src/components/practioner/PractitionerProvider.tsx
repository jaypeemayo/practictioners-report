import * as React from "react";
import { IPractitioner } from "./IPractitioner";
import { IAppointment } from "./IAppointment";
import { AuthorizationContext, IAuthorizationContextContext } from "../authorization/AuthorizationProvider";
import { AxiosHelper } from "../../helpers/AxiosHelper";

let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
export interface IPractitionerContextContext {
    state: IPractitionerProviderState;
    get: (searctText: string, startDate: Date, endDate: Date, searchTextType: string) => Promise<void>;
}

export const PractitionerContext = React.createContext<IPractitionerContextContext>({ state: undefined, get: undefined } as IPractitionerContextContext);

export interface PractitionerProps {
    authContext: IAuthorizationContextContext;
}

export interface IPractitionerProviderState {
    practitioners: IPractitioner[];
}

export default class PractitionerProvider extends React.Component<PractitionerProps, IPractitionerProviderState> {
    state: IPractitionerProviderState = { practitioners: [] } as IPractitionerProviderState;
    componentDidMount() {
        this.get("", undefined, undefined, "");
    }

    get = async (searchText: string, startDate: Date, endDate: Date, searchTextType: string): Promise<void> => {

        //await axios.get(`http://localhost:3000/practitioners?name_like=${searchText}`)

        const format = 'YYYY-MM-DDTHH:mm:ss';
        const start = startDate ? moment(startDate).format(format) : undefined;
        const end = endDate ? moment(endDate).format(format) : undefined;
        let bearerToken = `Bearer ${this.props.authContext.state.token}`;
        await AxiosHelper.instance.get(`/practitioners?searchText=${searchText}&start=${start}&end=${end}&searchTextType=${searchTextType}`,
            {
                headers: {
                    "Authorization": bearerToken
                }
            })
            .then((response) => {

                //date filtering should be done in server side. for demo purposes, i do it here.
                //let filteredResponse: IPractitioner[] = this.filter(response.data as IPractitioner[], startDate, endDate, searchTextType);
                this.setState({ practitioners: response.data as IPractitioner[] });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    filter = (practioners: IPractitioner[], startDate: Date, endDate: Date, searchTextType: string): IPractitioner[] => {
        let reducedPractioners: IPractitioner[] = practioners.reduce((practionerAccumulator: IPractitioner[], practionerItem: IPractitioner) => {

            let appointments: IAppointment[] = practionerItem.appointments.reduce((appointmentAccumulator: IAppointment[], appointmentItem: IAppointment) => {
                if ((startDate && endDate && moment(appointmentItem.date).isSameOrAfter(moment(startDate)) && moment(appointmentItem.date).isSameOrBefore(moment(endDate))) ||
                    (startDate && endDate == undefined && moment(appointmentItem.date).isSameOrAfter(moment(startDate))) ||
                    (startDate === undefined && endDate && moment(appointmentItem.date).isSameOrBefore(moment(endDate))) ||
                    (startDate === undefined && endDate === undefined)) {

                    if (searchTextType) {
                        if (appointmentItem.type === searchTextType) {
                            appointmentAccumulator = [...appointmentAccumulator, appointmentItem];
                        }
                    }
                    else {
                        appointmentAccumulator = [...appointmentAccumulator, appointmentItem];
                    }
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
                get: this.get
            }}>
                {this.props.children}
            </PractitionerContext.Provider>
        );
    }
}
