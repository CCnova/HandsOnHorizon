<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::namespace('Api')->name('api.')->group(function() {
    Route::prefix('/surfists')->group(function() {
        Route::get('/', 'SurfistController@index')->name('index_surfists');
        Route::get('/{id}', 'SurfistController@show')->name('single_surfists');

        Route::post('/', 'SurfistController@store')->name('store_surfists');
    });
});

Route::namespace('Api')->name('api.')->group(function() {
    Route::prefix('/bateries')->group(function() {
        Route::get('/', 'BateryController@index')->name('index_bateries');
        Route::get('/{id}', 'BateryController@show')->name('single_bateries');

        Route::post('/', 'BateryController@store')->name('store_products');
    });
});

Route::namespace('Api')->name('api.')->group(function() {
    Route::prefix('/waves')->group(function() {
        Route::get('/', 'WaveController@index')->name('index_waves');
        Route::get('/{id}', 'WaveController@show')->name('single_waves');

        Route::post('/', 'WaveController@store')->name('store_waves');
    });
});
