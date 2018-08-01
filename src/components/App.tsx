import * as React from "react";
import "./../assets/scss/App.scss";
import ReportPage from "./practioner/ReportPage";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}


//Read me:
//go to directory where package.json is located then npm install
//run <json-server --watch db.json> to start fake db
//run <npm run start-dev> (link is shown in the command prompt eg. http://localhost:8084/)
//go to the link

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return <ReportPage/>;
    }
}
