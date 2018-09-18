import React, {Component} from 'react';


class Pageheader extends Component {

    render(){
        return(
            <React.Fragment>
                <div className="page-header-content">
                    <div className="page-title">
                        <h4><i className="icon-arrow-left52 position-left"></i> <span className="text-semibold">Home</span></h4>
                    </div>
                </div>
                <div className="breadcrumb-line">
                    <ul className="breadcrumb">
                        <li><a href=""><i className="icon-home2 position-left"></i>Home</a></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Pageheader;