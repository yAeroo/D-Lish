<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CafeteriaController;
use App\Models\FinalDish;
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

    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::get('/cafeterias', [CafeteriaController::class, 'index']);

// Route::get('/final_dishes', [CafeteriaController::class, 'finalDishes']);

// Autenticación
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
