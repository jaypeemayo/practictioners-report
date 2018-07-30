import * as React from "react";
import "./../assets/scss/App.scss";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface IMyComponent {
    name: string;
}

export default class MyComponent extends React.Component<IMyComponent, undefined> {
    render() {
        return (
            <div className="app">
                <h4>{this.props.name}</h4>
                <h1>Hello World!</h1>
                <p>Foo to the barz test</p>
                <img src={reactLogo} height="480"/>
            </div>
        );
    }
}
