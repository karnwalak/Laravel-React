<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EmployeeController;

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

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/fetch_employee_list',[EmployeeController::class,'index']);
Route::get('/fetch_single_employee',[EmployeeController::class,'show']);
Route::post('/edit_employee',[EmployeeController::class,'update']);
Route::get('/delete_employee',[EmployeeController::class,'destroy']);
Route::post('/add_employee',[EmployeeController::class,'store']);

