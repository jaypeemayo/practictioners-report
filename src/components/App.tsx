import * as React from "react";
import "./../assets/scss/App.scss";
import ReportPage from "./practioner/ReportPage";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}



export default class App extends React.Component<AppProps, undefined> {

    componentDidMount(){
     
    }

    
    render() {
        return <ReportPage/>;
    }
}
