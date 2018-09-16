import React, { Component } from 'react';
import './Hello.css';

function formatHi(stmt) {
    return stmt.firstWord + ' ' + stmt.lastWord + '!';
}

function getGreeting(stmt) {
    if (stmt) {
      return <h1>{formatHi(stmt)}</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const stmt = {
    firstWord: 'Hello There',
    lastWord: 'React JS'
};

const element = (
    <header className="Hello-header">
        <h1 className="Hello-title">
          {getGreeting(stmt)}
        </h1>
    </header>
);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}


function formatDate(date) {
    return date.toLocaleDateString();
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
               src={props.author.avatarUrl}
               alt={props.author.name} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: '/cat.jpg'
    }
};

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

        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />
      </div>
    );
  }
}

export default Hello;
