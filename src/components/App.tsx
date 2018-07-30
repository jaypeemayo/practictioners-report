import * as React from "react";
import "./../assets/scss/App.scss";
import ReportPage from "./practioner/ReportPage";

const reactLogo = require("./../assets/img/react_logo.svg");
import axios from "axios";
export interface AppProps {
}



export default class App extends React.Component<AppProps, undefined> {

    componentDidMount(){
        axios.get('http://localhost:3000/posts/1')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    
    render() {
        return <ReportPage/>;
    }
}
