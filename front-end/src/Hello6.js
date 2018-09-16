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

function Avatar(props) {
    return (
      <img className="Avatar"
           src={props.user.avatarUrl}
           alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
}

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
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
    text: 'I hope you enjoy learning React over and over!',
    author: {
      name: 'Hello Cool Kitty',
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
