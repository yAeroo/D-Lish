<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CafeteriaController;
use App\Http\Controllers\DishController;
use App\Models\OrderDish;
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

// Peticiones protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::get('user', function (Request $request) {
        return $request->user();
    });

    // DESLOGUEO =================
    Route::post('/logout', [AuthController::class, 'logout']);

    // ORDEN  ====================
    Route::post('/orden', [DishController::class, 'store']);
});

// AUTENTICACIÓN =================
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// CONTENIDOS ===================
Route::get('/cafeterias', [CafeteriaController::class, 'index']);

// ENPOITN - ROUTE MODEL BINDING - Buscar un contenido en específico
Route::get('/cafeteria/{id}/content', [CafeteriaController::class, 'content']);
