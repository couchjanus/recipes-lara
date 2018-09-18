# recipes-lara

php artisan preset react

React scaffolding installed successfully.

Please run "npm install && npm run dev" to compile your fresh scaffolding.


Установите react, react-dom и babel-preset-react с использованием npm. Возможно, неплохо было бы установить yarn. Не секрет, что Laravel и React предпочитают yarn по сравнению с npm.

Перейдите в webpack.mix.js, расположенный внутри корневого каталога вашего Laravel проекта. Это файл конфигурации, в котором вы объявляете, как ваши ассеты должны быть скомпилированы. Замените строку mix.js('resources/js/app.js', 'public/js'); на mix.react('resources/js/app.js', 'public/js');. app.js является точкой входа для наших JavaScript файлов, а скомпилированные файлы будут находиться внутри public/js. Запустите npm install в терминале, чтобы установить все зависимости.

let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

Затем перейдите к resources/js. Там уже есть папка с компонентами и несколько других JavaScript файлов. Компоненты React войдут в каталог components. Удалите существующий файл Example.vue и создайте новый файл для примера компонента React.

resources/assets/js/component/Main.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Main extends Component {
    render() {
        return (
            <div>
                <h3>All Products</h3>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
Обновите app.js, чтобы удалить весь связанный с Vue код и импортировать компонент React.

resources/assets/js/app.js

require('./bootstrap');

/* Import the Main component */
import Main from './components/Main';

Теперь нам просто нужно сделать ассеты доступными для представлений. Файлы представлений находятся внутри каталога resources/views. Давайте добавим тэг <script>  в welcome.blade.php, который является страницей по умолчанию, отображаемой при переходе на localhost:8000/. Удалите содержимое файла представления и замените его следующим кодом:

resources/views/welcome.blade.php

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
    <h2 style="text-align: center"> Laravel and React application </h2>
        <div id="root"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
Наконец, выполните npm run dev или yarn run dev для компиляции ассетов. Если вы перейдете на localhost:8000, вы должны увидеть:


Laravel 5.5 ReactJS Tutorial
Laravel ReactJS Tutorial
By Krunal  Last updated Feb 22, 2018
 61,087
	429 4272
By clicking the subscribe button you will never miss the new articles!

Subscribe
Laravel 5.5 ReactJS Tutorial topic, we will cover today. For the frontend framework, there are lots of ReactJS developers out there, who want to deep dive into Laravel PHP Framework and vice versa for Laravel Developers. So this tutorial is created because, from this tutorial, you will do the following things.


How to connect Laravel API to ReactJS
How to define Laravel and ReactJS Project structure.
How to use Laravel Mix to make ReactJS Scaffold.
Content Overview [hide]

1 Prerequisites of Laravel ReactJS Tutorial
2 Laravel 5.5 React Preset
3 Laravel 5.5 ReactJS Tutorial
4 Step 1: Install Laravel 5.5 and Configure the database.
5 Step 2: Make ReactJS Frontend For Laravel backend.
6 Step 3: We need to install some dependencies regarding reactjs.
7 Step 4: Configure the ReactJS routes for our application.
8 Step 5: Use axios to make AJAX Post request to the Laravel 5.5 Development Server.
9 Step 6: Make Laravel 5.5 Backend
10 Step 7: Display the data into ReactJS Frontend
11 Step 8: Edit and Update the data.
12 Step 9: Delete The Data.
Prerequisites of Laravel ReactJS Tutorial
Laravel 5.5 Tutorial With Example From Scratch
ReactJS Tutorial For Beginners 2017
Laravel 5.5 React Preset
Laravel 5.5 ships with one add on called React Preset.

On any fresh Laravel application, you may use the presetcommand with the react option:
php artisan preset react
This command will create a basic scaffold for us. Now, let us start our project ReactJS Laravel Tutorial

Laravel 5.5 ReactJS Tutorial
Step 1: Install Laravel 5.5 and Configure the database.
Type the following command to get Laravel 5.5

composer create-project --prefer-dist laravel/laravel ReactJSLaravelTutorial
After installation was done, we need to install the JavaScript dependencies of our project. By default, package.json file is there, so we just need to type the following command to get the NPM dependencies.

npm install
Now go to your database manager, for example, phpMyAdmin or MySQL work bench and create one database.

Go to .env file and enter your database credentials.

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=LaravelReact
DB_USERNAME=root
DB_PASSWORD=mysql
Next step, would be, go to the project root and open the terminal and type the following command.

php artisan migrate
It will create the two tables, which is by default ships by Laravel 5.5

Step 2: Make ReactJS Frontend For Laravel backend.

As we have discussed earlier, type the following command for React Preset.

php artisan preset react
In the terminal, you can see like this.

React scaffolding installed successfully.
Please run “npm install && npm run dev” to compile your new scaffolding.
Next, switch to the following structure directories.
ReactJSLaravelTutorial  >> resources  >>  assets  >>   js  there is one folder and two javascript files.

The folder name is components, which is react component and the second file is app.js other file is bootstrap.js

RELATED POSTS
Laravel 5.7 Email Verification Tutorial Example

Sep 11, 2018
Laravel 5.7 CRUD Example Tutorial For Beginners From Scratch

Sep 6, 2018
Go to the resources  >>  views  >>  welcome.blade.php file and copy the following code to it. Remove the existing code.

<!-- welcome.blade.php -->

<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="example"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>
Go to the CMD and type the following command.

npm run dev
It will compile all of our assets and put bundled javascript file into the public >> js  >>  app.js file.

Again, go to the CMD and type the following command.

php artisan serve
It will boot up a development server, which is started at port 8000

ReactJS Laravel Tutorial

Step 3: We need to install some dependencies regarding reactjs.
The first thing we will install is a react-router package for routing our application. So type the following command.

npm install react-router@2.8.1
For better convenient experience, I have installed an old version of react-router.

Go to terminal and type the following command.

npm run watch
It will watch the changes done in the assets folder and recompile automatically.

We are modifying ReactJS by default scaffold and shape the project structure to our need.

First, copy the following code and paste it into the App.js file.

// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Example from './components/Example';

render(<Example />, document.getElementById('example'));
Next change is to modify the Example.js component, copy paste the following code in that file.

// Example.js

import React, { Component } from 'react';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component</div>

                            <div className="panel-body">
                                I am an example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
After saving the file, Laravel Mix will recompile all of our assets and build successful bundled app.js file.

When you switch to the browser and refresh the page, you will see as it is, nothing changes, but we are now going through our flow, which is great news.

Now, we need to create one another component called Master.js inside components folder.

// Master.js

import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">AppDividend</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;
Now, modify the app.js file and put this component as a root component.

// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';

render(<Master />, document.getElementById('example'));
Step 4: Configure the ReactJS routes for our application.
Create three components inside components folder.

CreateItem.js
DisplayItem.js
EditItem.js
Make a CreateItem.js form to save the items data.

// CreateItem.js

import React, {Component} from 'react';

class CreateItem extends Component {
    render() {
      return (
      <div>
        <h1>Create An Item</h1>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" className="form-control col-md-6" />
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateItem;
In app.js, we need to configure the routes.

// app.js

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';
import CreateItem from './components/CreateItem';

render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateItem} />
      </Route>
    </Router>,
        document.getElementById('example'));
If you have done all correct and save the file, then Laravel Mix recompile it and if you have not started the Laravel development server, then please start it by php artisan serve

Switch the browser to this URL: http://localhost:8000/

Laravel 5.5 ReactJS CRUD Tutorial

Now, click the CreateItem link, you will see the following screen.

Your URL will like this: http://localhost:8000/add-item

Laravel ReactJS CRUD Tutorial
Step 5: Use axios to make AJAX Post request to the Laravel 5.5 Development Server.
Add some events to get the input data from the form and send the AJAX post request to the server.

// CreateItem.js

import React, {Component} from 'react';

class CreateItem extends Component {
  constructor(props){
    super(props);
    this.state = {productName: '', productPrice: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange1(e){
    this.setState({
      productName: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      productPrice: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const products = {
      name: this.state.productName,
      price: this.state.productPrice
    }
    let uri = 'http://localhost:8000/items';
    axios.post(uri, products).then((response) => {
      // browserHistory.push('/display-item');
    });
  }

    render() {
      return (
      <div>
        <h1>Create An Item</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" className="form-control" onChange={this.handleChange1}/>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateItem;
Step 6: Make Laravel 5.5 Backend
Next step would be from moving ReactJS to Laravel and make a backend for our project. We will use Web routes for this project, so we need to put all of our routes in the routes  >>  web.php file.

We will perform CRUD operations on items data. So first let’s define the schema for it. Then we create controller and routes.

Switch to your command line interface and type the following command.

php artisan make:model Item -m
It creates two files.

Model file.
Migration file.
Navigate to the migration file in the database  >>  migrations  >>  create_items_table and copy the following code into it.

<?php

// create_items_table

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
Switch to the command line and type the following command.

php artisan migrate
It creates the items table in the database. Also, one model file Item.php is created which is in the app folder.

Also, create one resource controller called ItemController by the hitting following command.

php artisan make:controller ItemController --resource
ItemController contains all its functions of CRUD operations. We just need to put the code in it. I am right now putting the whole file with all the functions in it.

<?php

// ItemController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Item::all();
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $item = new Item([
          'name' => $request->get('name'),
          'price' => $request->get('price')
        ]);
        $item->save();
        return response()->json('Successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $item = Item::find($id);
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $item = Item::find($id);
        $item->name = $request->get('name');
        $item->price = $request->get('price');
        $item->save();

        return response()->json('Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $item = Item::find($id);
      $item->delete();

      return response()->json('Successfully Deleted');
    }
}
We also need to create protected $fillable field in Item.php file otherwise ‘mass assignment exception‘ will be thrown.

<?php

// Item.php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['name', 'price'];
}
Update the routes >> web.php file.

<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::resource('items', 'ItemController');
Now, if you try to insert the values in the database, you might face the following issue.

Possible Errors: XMLHttpRequest cannot load http://localhost:8000/items. No ‘Access-Control-Allow-Origin’ header is present on the requested resource. Origin ‘http://localhost:3000’ is therefore not allowed access. The response had HTTP status code 500.
This error is caused by CORS security. When Browser hits the request to another domain, by default, it denies the request.

Possible Solutions:
We need to allow this origin to Laravel server side. So we need to create one middleware at the backend and apply this middleware to every API request. By putting this middleware, we are explicitly told Laravel that we are allowing this request to access our resources.

Download the following Laravel Specific CORS package to avoid this issue and follow the steps.

composer require barryvdh/laravel-cors
Add the Cors\ServiceProvider to your config/app.php provider’s array

Barryvdh\Cors\ServiceProvider::class,
To allow CORS for all your routes, add the HandleCors middleware in the $middleware property of app/Http/Kernel.phpclass:

protected $middleware = [
    // ...
    \Barryvdh\Cors\HandleCors::class,
];
You can publish the config using this command:

php artisan vendor:publish --provider="Barryvdh\Cors\ServiceProvider"
Now, try again, it will save the data into the database. I have not set the redirect after saving the data but will set in short, while you can check the values in the database.

Step 7: Display the data into ReactJS Frontend
Make DisplayItem.js component inside components folder.

// DisplayItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';

class DisplayItem extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', items: ''};
     }
     componentDidMount(){
       axios.get('http://localhost:8000/items')
       .then(response => {
         this.setState({ items: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.items instanceof Array){
         return this.state.items.map(function(object, i){
             return <TableRow obj={object} key={i} />;
         })
       }
     }

  render(){
    return (
      <div>
        <h1>Items</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Item</Link>
          </div>
        </div><br />

        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayItem;
Now, make TableRow.js component.

// TableRow.js

import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
Register this route in our application.

// app.js

import DisplayItem from './components/DisplayItem';

render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateItem} />
        <Route path="/display-item" component={DisplayItem} />
      </Route>
    </Router>,
        document.getElementById('example'));
One thing we need to change is that, when we save the data, we need to redirect to this component. So in CreateItem.js file, we need to modify a bit of code.

// CreateItem.js

import {browserHistory} from 'react-router';

axios.post(uri, products).then((response) => {
      browserHistory.push('/display-item');
    });
Step 8: Edit and Update the data.
Make EditItem.js component inside components folder.

// EditItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class EditItem extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '', price: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`http://localhost:8000/items/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ name: response.data.name, price: response.data.price });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      name: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      price: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = {
      name: this.state.name,
      price: this.state.price
    }
    let uri = 'http://localhost:8000/items/'+this.props.params.id;
    axios.patch(uri, products).then((response) => {
          this.props.history.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Item</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Items</Link>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange1} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.price}
                  onChange={this.handleChange2} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default EditItem;
Now, register this route in the app.js file.

// app.js

import EditItem from './components/EditItem';

render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateItem} />
        <Route path="/display-item" component={DisplayItem} />
        <Route path="/edit/:id" component={EditItem} />
      </Route>
    </Router>,
        document.getElementById('example'));
We need to update the TableRow.js component file.

<Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
Step 9: Delete The Data.
For delete the data, we just need to define the delete function in the TableRow.js file.

// TableRow.js

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = `http://localhost:8000/items/${this.props.obj.id}`;
    axios.delete(uri);
      browserHistory.push('/display-item');
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;
So, finally our Laravel 5.5 ReactJS Tutorial CRUD Operations From Scratch is over.
https://github.com/KrunalLathiya/ReactJSLaravel5.5
