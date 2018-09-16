# recipes-lara

1. Create a Heroku app

Create an app name
```
app_name=recipes-lara
```

Create Heroku app
```
heroku apps:create $app_name

Creating ⬢ recipes-lara... done
```

```
heroku addons:create heroku-postgresql:hobby-dev --app $app_name

Creating heroku-postgresql:hobby-dev on ⬢ recipes-lara... free
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Created postgresql-amorphous-61023 as DATABASE_URL
Use heroku addons:docs heroku-postgresql to view documentation
```

```
heroku buildpacks:add heroku/php --app $app_name
```
Buildpack added. Next release on recipes-lara will use heroku/php.
Run git push heroku master to create a new release using this buildpack.

```
heroku buildpacks:add heroku/nodejs --app $app_name
```
Buildpack added. Next release on recipes-lara will use:
  1. heroku/php
  2. heroku/nodejs
Run git push heroku master to create a new release using these buildpacks.


2. Add Heroku git remote
```
heroku git:remote --app $app_name
```
set git remote heroku to https://git.heroku.com/recipes-lara.git


3. Set config parameters

For Laravel to operate correctly you need to set APP_KEY:
```
heroku config:set --app $app_name APP_KEY=$(php artisan --no-ansi key:generate --show)
```
Setting APP_KEY and restarting ⬢ recipes-lara... done, v4
APP_KEY: base64:3QWpqzRf7xiGks3Xxbg5sWsa2ghCRGAO4CQrmvGj4Q4=

Optionally set your app's environment to development
```
heroku config:set --app $app_name APP_ENV=development APP_DEBUG=true APP_LOG_LEVEL=debug
```

4. Deploy to Heroku
```
 git push heroku master
```
5. Run migrations
```
heroku run -a $app_name php artisan postdeploy:heroku
```

## cviebrock/eloquent-sluggable


# Install NPM dependencies and add vue-router
$ yarn install
# or npm install vue-router
$ yarn add vue-router


# ReactJS

https://github.com/facebook/create-react-app 

## install

```

npm install -g create-react-app

```

## npx

### npx comes with npm 5.2+ and higher

```
npx create-react-app my-app

cd my-app

npm start

```

# Hello World!

```js

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
      </div>
    );
  }
}

export default Hello;

```

# props


```js

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
```


# Встраиваемые выражения в JSX

```js

function formatHi(stmt) {
    return stmt.firstWord + ' ' + stmt.lastWord + '!';
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
        {element}
      </div>
    );
  }
}

```

# Извлечение компонентов


```js
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
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />
      </div>
    );
  }
}

```
# Comment

```js

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
 
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />
      </div>
    );
  }
}
```

# Свойства props – только для чтения

Будете ли вы объявлять компонент как функцию или класс, он никогда не должен модифицировать свои свойства props. Рассмотрим эту sum функцию:

```js    
    function sum(a, b) {
      return a + b;
    }
```
Такие функции называются «чистыми». Потому что они не пытаются изменить свои аргументы и всегда возвращают одинаковый результат для тех же самых аргументов.

В противоположность им, следующая функция не является чистой, потому что она изменяет свои аргументы:

```js   
    function withdraw(account, amount) {
      account.total -= amount;
    }
```

## Все React-компоненты должны работать как чистые функции в отношении своих свойств “props”

# Class

- Создать ES6 класс с тем же самым именем, который расширяет React.Component.
- Добавить в него единственный пустой метод под названием render().
- Поместить тело функции в метод render().
- Заменить props на this.props в теле метода render().

```js
class Timer extends React.Component {
    render() {
      const value = this.props.value
      return (
        <div>
          <p>Таймер:</p>
          <p>
            <span>{Math.round(value/INTERVAL/60/60)} : </span>
            <span>{Math.round(value/INTERVAL/60)} : </span>
            <span>{Math.round(value/INTERVAL)} . </span>
            <span>{value % INTERVAL}</span>
          </p>
        </div>
      );
    }
  }
```
# конструктор класса устанавливает начальное состояние this.state:

```js

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
    }

    render() {
      const value = this.state.value
      return (
        <div>
          <p>Таймер:</p>
          <p>
            <span>{Math.round(value/INTERVAL/60/60)} : </span>
            <span>{Math.round(value/INTERVAL/60)} : </span>
            <span>{Math.round(value/INTERVAL)} . </span>
            <span>{value % INTERVAL}</span>
          </p>
        </div>
      );
    }
  }
 
```
## Компоненты-классы должны всегда вызывать базовый конструктор с props.

# Добавление методов жизненного цикла в класс
# lifecycle hooks

```js

const INTERVAL = 100;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }
   
  // метод increment() выполняется каждую секунду.
  // Он будет использовать this.setState(), чтобы планировать обновления в локальном состоянии компонента:

  increment(){
    this.setState({value: this.state.value + 1});
  }

  // Нам необходимо устанавливать таймер каждый раз, когда Timer отрисовывается в DOM в первый раз. В React это называется «монтированием/монтажом».

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    // Метод componentDidMount() срабатывает после того, как компонент был отрисован в DOM
  }
  
  // Также нам нужно очищать этот таймер, каждый раз когда DOM, созданный компонентом Timer, удаляется. В React это называется «демонтированием/демонтажём».

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const value = this.state.value
    return (<div>
      <p>Таймер:</p>
      <p>
        <span>{`${Math.round(value/INTERVAL/60/60)}`} : </span>
        <span>{`${Math.round(value/INTERVAL/60)}`} : </span>
        <span>{`${Math.round(value/INTERVAL)}`} . </span>
        <span>{`${value % INTERVAL}`}</span>
      </p>
    </div>);
  }
}

/* 
    1. Когда <Timer/> передан в ReactDOM.render(), React вызывает конструктор компонента Timer. Как только Timer нуждается в отображении текущего значения, он инициализирует this.state с объектом, включающим текущее значение таймера.
    2. Далее React вызывает метод render() компонента Timer. Это то, как React понимает, что должно быть отображено на экране. Далее React обновляет DOM, в соответствии с результатом отрисовки Timer.
    3. Когда результат отрисовки Timer вставлен в DOM, React вызывает метод componentDidMount() жизненного цикла. Внутри него компонент Timer обращается к браузеру для установки таймера, чтобы вызывать increment() раз в секунду.
    4. Каждую секунду браузер вызывает метод increment(). Внутри него Timer компонент планирует обновление UI с помощью вызова setState() с объектом, содержащим текущее время. Благодаря вызову setState(), React знает, что состояние изменилось, и вызывает метод render() снова, чтобы узнать, что должно быть на экране. Значение this.state.value в методе render() будет отличаться, поэтому результат отрисовки будет содержать обновленное значение таймера. React обновляет DOM соответственно.
    5. Если компонент Timer в какой-то момент удалён из DOM, React вызывает метод componentWillUnmount() жизненного цикла, из-за чего таймер останавливается.
*/

class Hello extends Component {
  render() {
    return (
      <div className="Hello">
        <header className="Hello-header">
          <h1 className="Hello-title">Cool JS Framework!</h1>
        </header>
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />

        <Timer/>
      </div>
    );
  }
}

```
