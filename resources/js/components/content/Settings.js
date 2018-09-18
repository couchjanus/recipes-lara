import React, {Component} from 'react';
import Pageheader from "./Pageheader";


class Settings extends Component {

    render(){
        return(
            <React.Fragment>
                <Pageheader/>
                <div className="content">
                    <h1>Settings</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Settings;