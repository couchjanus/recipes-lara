import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Dashboard from './content/Dashboard';

export default class App extends Component {

    constructor(){
        super()
        this.state = {component:<Dashboard/>};
    }

    componentDidMount(){
        this.setState({component:<Dashboard/>});
    }

    render() {
        return (
            this.state.component
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
