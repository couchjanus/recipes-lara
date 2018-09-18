import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect} from 'react-router-dom';
import Mainnavbar from "../include/Mainnavbar";
import Sidebar from "../include/Sidebar";
import Maincontent from "./Maincontent";
import routes from '../Routes';



class Dashboard extends Component {

    render(){
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Mainnavbar/>
                    <div className="page-container">
                        <div className="page-content">
                            <Sidebar routes={routes}/>
                            <Maincontent/>
                        </div>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default Dashboard;