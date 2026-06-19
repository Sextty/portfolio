<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/admin', [ProjectController::class, 'admin']);
Route::post('/projects', [ProjectController::class, 'store']);
