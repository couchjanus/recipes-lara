import React, { Component } from 'react';
import './Hello.css';

function formatHi(stmt) {
    return stmt.firstWord + ' ' + stmt.lastWord + '!';
}

function getGreeting(stmt) {
    if (stmt) {
      return <h1>{formatHi(stmt)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const stmt = {
    firstWord: 'Hello',
    lastWord: 'React JS'
};

const element = (
    <header className="Hello-header">
        <h1 className="Hello-title">
          {formatHi(stmt)}!
        </h1>
    </header>
);

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <header className="Hello-header">
          <h1 className="Hello-title">Cool JS Framework!</h1>
        </header>
        {element}
        <p className="Hello-intro">
          To get started, edit <code>src/Hello.js</code> and save to reload.
        </p>
        <h2>{this.props.message}!</h2>
      </div>
    );
  }
}

export default Hello;
