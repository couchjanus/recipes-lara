import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <header className="Hello-header">
          <h1 className="Hello-title">Hello React JS!</h1>
        </header>
        <p className="Hello-intro">
          To get started, edit <code>src/Hello.js</code> and save to reload.
        </p>
        <h2>{this.props.message}!</h2>
      </div>
    );
  }
}

export default Hello;
