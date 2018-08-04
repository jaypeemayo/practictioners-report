import * as React from "react";
import axios from "axios";
let moment = require("moment");
if ("default" in moment) {
    moment = moment["default"];
}
export interface IAuthorizationContextContext {
    state: IAuthorizationState;
    getToken: () => Promise<void>;
}

export const AuthorizationContext = React.createContext<IAuthorizationContextContext>({ state: undefined, getToken: undefined } as IAuthorizationContextContext);

export interface IAuthorizationState {
    token: string;
}

export default class AuthorizationProvider extends React.Component<null, IAuthorizationState> {
    state: IAuthorizationState = { token: "" } as IAuthorizationState;
    componentDidMount() {
        this.getToken();
    }

    getToken = async (): Promise<void> => {
        await axios.post(`http://localhost:2553/api/token`, {username: "mario", password: "secret"})
        //await axios.post(`https://corepluswebapi20180803083400.azurewebsites.net/api/token`)
            .then((response) => {         
                this.setState({ token: response.data.token as string });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <AuthorizationContext.Provider value={{
                state: this.state,
                getToken: this.getToken,
            }}>
                {this.props.children}
            </AuthorizationContext.Provider>
        );
    }
}
