import * as React from "react";
import axios from "axios";
import { IPractitioner } from "./IPractitioner";

export interface IPractitionerContextContext {
    state: IPractitionerProviderState;
    get: (searctText: string) => Promise<void>;
}

export const PractitionerContext = React.createContext<IPractitionerContextContext>({ state: undefined, get: undefined } as IPractitionerContextContext);

export interface IPractitionerProviderState {
    practitioners: IPractitioner[];
}

export interface IPractitionerProviderProps {

}

export default class PractitionerProvider extends React.Component<IPractitionerProviderProps, IPractitionerProviderState> {
    state: IPractitionerProviderState = { practitioners: [] } as IPractitionerProviderState;

    get = async (searchText: string): Promise<void> => {
        await axios.get(`http://localhost:3000/practitioners?name_like=${searchText}`)
            .then((response) => {
                this.setState({ practitioners: response.data as IPractitioner[] });
            })
            .catch((error) => {
                console.log(error);
            });
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
