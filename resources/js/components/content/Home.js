import React, {Component} from 'react';
import Pageheader from "./Pageheader";


class Home extends Component {

    render(){
        return(
            <React.Fragment>
                <Pageheader/>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-4">
                            {/*<!-- Members online -->*/}
                            <div className="panel bg-teal-400">
                                <div className="panel-body">
                                    <h3 className="no-margin">3,450</h3>
                                    Total
                                    <div className="text-muted text-size-small"></div>
                                    <a className="heading-elements-toggle"><i className="icon-menu"></i></a></div>
                                <div className="container-fluid">
                                    <div id="members-online">
                                        <svg width="195.546875" height="50">
                                            <g width="195.546875">
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- /members online -->*/}
                        </div>

                        <div className="col-lg-4">
                            {/*<!-- Current server load -->*/}
                            <div className="panel bg-pink-400">
                                <div className="panel-body">
                                    <h3 className="no-margin">49.4%</h3>
                                    Male
                                    <div className="text-muted text-size-small"></div>
                                    <a className="heading-elements-toggle"><i className="icon-menu"></i></a></div>

                                <div id="server-load">
                                    <svg width="215.546875" height="50">
                                        <g transform="translate(0,0)" width="215.546875">
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            {/*<!-- /current server load -->*/}
                        </div>

                        <div className="col-lg-4">
                            {/*<!-- Today's revenue -->*/}
                            <div className="panel bg-blue-400">
                                <div className="panel-body">
                                    <h3 className="no-margin">18,390</h3>
                                    Female
                                    <div className="text-muted text-size-small"></div>
                                    <a className="heading-elements-toggle"><i className="icon-menu"></i></a></div>
                                <div id="today-revenue">
                                    <svg width="215.546875" height="50">
                                        <g transform="translate(0,0)" width="215.546875">
                                            <defs>
                                                <clipPath id="clip-line-small"><rect className="clip" width="215.546875" height="50">
                                                </rect>
                                                </clipPath>
                                            </defs>

                                        </g>
                                    </svg>
                                </div>
                                {/*<!-- /today's revenue -->*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/*<!-- Marketing campaigns -->*/}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h6 className="panel-title">Users Summary</h6>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-lg text-nowrap">
                                        <tbody>
                                        <tr>
                                            <td className="col-md-5">
                                                <div className="media-left">
                                                    <div id="campaigns-donut"></div>
                                                </div>
                                                <div className="media-left">
                                                    <h5 className="text-semibold no-margin">38,289</h5>
                                                    <ul className="list-inline list-inline-condensed no-margin">
                                                        <li>
                                                            <span className="text-success text-bold">Present</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>

                                            <td className="col-md-5">
                                                <div className="media-left">
                                                    <div id="campaign-status-pie"></div>
                                                </div>

                                                <div className="media-left">

                                                    <ul className="list-inline list-inline-condensed no-margin">
                                                        <li>
                                                            <span className="text-danger text-bold">Absent</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/*<!-- /marketing campaigns -->*/}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <div className="panel-heading">
                                        <h6 className="panel-title">Today</h6>
                                    </div>
                                    <div className="table-responsive">
                                        <div className="col-md-6">
                                            <table className="table text-nowrap">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="media-left media-middle">
                                                            <a href="#"><img src="assets/images/placeholder.jpg" className="img-circle img-xs" alt=""/></a>
                                                        </div>
                                                        <div className="media-left">
                                                            <div className=""><a href="#" className="text-default text-semibold">Facebook</a></div>
                                                            <div className="text-muted text-size-small">
                                                                <span className="status-mark border-blue position-left"></span>
                                                                02:00 - 03:00
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-muted"></span></td>
                                                    <td></td>
                                                    <td><h6 className="text-semibold">$5,489</h6></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-6">
                                            <table className="table text-nowrap">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="media-left media-middle">
                                                            <a href="#"><img src="assets/images/placeholder.jpg" className="img-circle img-xs" alt=""/></a>
                                                        </div>
                                                        <div className="media-left">
                                                            <div className=""><a href="#" className="text-default text-semibold">Facebook</a></div>
                                                            <div className="text-muted text-size-small">
                                                                <span className="status-mark border-blue position-left"></span>
                                                                02:00 - 03:00
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><span className="text-muted"></span></td>
                                                    <td></td>
                                                    <td><h6 className="text-semibold">$5,489</h6></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
