import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Home from "./Home";
import Users from "./Users";
import Settings from "./Settings";
import Error404 from "./404";
import Products from "./Products";

import Loadable from 'react-loadable';


class Maincontent extends Component {
    constructor(props)
    {
        super(props);

    }

    render() {
            return (
            <React.Fragment>
                <Switch>
                    <Redirect exact from={'/'} to={'/home'} />
                    <Route path={'/home'} exact={true} component={Home}/>
                    <Route path={'/users'} exact={true}  component={Users}/>
                    <Route path={'/settings'} exact={true}  component={Settings}/>
                    <Route path={'/products'} exact={true}  component={Products}/>
                    <Route path='*' exact={true} component={Error404} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Maincontent;

