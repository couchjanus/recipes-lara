import React, {Component} from 'react';
import $ from 'jquery'
class Mainnavbar extends Component {

   constructor(){
       super();
   }

   logout()
   {
   }

    render() {

        return (
            <React.Fragment>
                <div className="navbar navbar-inverse">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><img src={'/assets/images/logo_light.png'} alt="Logo"/></a>

                        <ul className="nav navbar-nav visible-xs-block">
                            <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
                            <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
                        </ul>
                    </div>

                    <div className="navbar-collapse collapse" id="navbar-mobile">
                        <ul className="nav navbar-nav">
                            <li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"></i></a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown dropdown-user">
                                <a className="dropdown-toggle" data-toggle="dropdown">
                                    <img src={'/assets/images/placeholder.jpg'} alt=""/>
                                        <span>Admin</span>
                                        <i className="caret"></i>

                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="#"><i className="icon-user-lock"></i> Profile</a></li>
                                    <li><a href="#"><i className="icon-user-plus"></i>Admin Create</a></li>
                                    <li><a href="#"><i className="icon-cog5"></i> Edit Profile</a></li>
                                    <li><a onClick={this.logout} href="#"><i className="icon-switch2"></i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }


}



export default Mainnavbar;
