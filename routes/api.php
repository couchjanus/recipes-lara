<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('/categories', 'Api\CategoriesController');


// Вы должны помнить, что ко всем маршрутам заданным в файле routes/api.php автоматически добавляется префикс api.
// Изменить это вы можете в файле RouterServiceProvider в методе mapApiRoutes():

Route::get(
    '/users',
    function () {
        return \App\User::all();
    }
);
