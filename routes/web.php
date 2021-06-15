<?php

use Illuminate\Support\Facades\Route;

Route::view('/pasiens', 'app');
Route::view('/pasien/edit/{id}', 'app');
Route::view('/pasien/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');
