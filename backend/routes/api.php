<?php

use App\Http\Controllers\BusinessFormController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/business-forms', [BusinessFormController::class, 'store']);

