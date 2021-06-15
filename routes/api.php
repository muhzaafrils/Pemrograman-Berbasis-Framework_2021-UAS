<?php

use Illuminate\Support\Facades\Route;

Route::get('/pasiens', 'PasienController@index');
Route::post('/pasien/store', 'PasienController@store');
Route::get('/pasien/edit/{id}', 'PasienController@getPasien');
Route::get('/pasien/{id}', 'PasienController@getPasien');
Route::put('/pasien/{id}', 'PasienController@update');
Route::delete('/pasien/delete/{id}', 'PasienController@delete');
