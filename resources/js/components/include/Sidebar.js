import React, {Component} from 'react';
import {  Route, Link } from 'react-router-dom';
import { IndexRoute } from 'react-router';

class Sidebar extends Component {

    constructor(){
        super();

        this.state = {
            isLinkActive : false
        };
    }

    handleClick(){
        this.setState({isLinkActive:!this.state.isLinkActive});
    }

    render() {
        return (
            <React.Fragment>
                <div className="sidebar sidebar-main">
                    <div className="sidebar-content">
                        <div className="sidebar-user">
                            <div className="category-content">
                                <div className="media">
                                    <a href="#" className="media-left"><img src={"assets/images/placeholder.jpg"} className="img-circle img-sm" alt=""/></a>
                                    <div className="media-body">
                                        <span className="media-heading text-semibold">Janus Nic</span>
                                        <div className="text-size-mini text-muted">
                                            <i className="icon-pin text-size-small"></i> &nbsp;Kiev NAU, UA
                                        </div>
                                    </div>

                                    <div className="media-right media-middle">
                                        <ul className="icons-list">
                                            <li>
                                                <a href="#"><i className="icon-cog3"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-category sidebar-category-visible">
                            <div className="category-content no-padding">
                                <ul className="navigation navigation-main navigation-accordion">
                                    <li className="navigation-header"><span>Main</span> <i className="icon-menu" title="Main pages"></i></li>
                                    {this.props.routes.map((route, idx) =>{
                                            return (<li key={idx} className={(window.location.pathname == route.path) ? 'active' : ''} >
                                                <Link to={route.path}><i className={route.icon}></i><span>{route.name}</span></Link>
                                            </li>)
                                        },
                                    )}

                                </ul>
                            </div>
                        </div>
                        {/*<!-- /main navigation -->*/}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;
