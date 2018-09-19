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

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::get('admin', ['uses' => 'Admin\DashboardController@index', 'as' => 'admin']);
// Route::resource('categories', 'Admin\CategoriesController');

// Route::get('/vue', function () {
//     return view('vue');
// });
// Route::get('/vue/news', function () {
//     $results =  \App\Post::all();
//     return $results;
// });

// Route::get('/news', function () {
//     return view('news');
// });



// Route::get('/adm', function () {
//     return view('index');
// });

// Route::get('/{any}', 'SpaController@index')->where('any', '.*');

Route::get('/', function () {
    return view('index');
});
// Route::resource('items', 'ItemController');
