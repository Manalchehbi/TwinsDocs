<?php

use Illuminate\Support\Facades\Route;

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

Route::get('{any}', function () {
    return view('Home');
})->where('any','.*');
Route::get('employes/all', [EmployesController::class, 'all']);
Route::post('aemployes/create', [EmployesController::class, 'store']);
Route::get('employes/show/{id}', [EmployesController::class, 'show']);
Route::put('employes/update/{id}', [EmployesController::class, 'update']);
Route::delete('aemployes/delete/{id}', [EmployesController::class, 'destory']);