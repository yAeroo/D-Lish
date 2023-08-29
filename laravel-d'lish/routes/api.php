<?php

use App\Models\OrderDish;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CafeteriaController;

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

    // DESLOGUEO ================
    Route::post('/logout', [AuthController::class, 'logout']);

    // ORDENES  ===================
    Route::apiResource('/orden', OrderController::class);
});

// AUTENTICACIÓN ================ 
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// CONTENIDOS ===================
Route::apiResource('/cafeterias', CafeteriaController::class);

// CONTENIDO CAFETERIA ==========
Route::apiResource('/cafeterias/{id}', CafeteriaController::class);
