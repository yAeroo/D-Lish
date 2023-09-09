<?php

use App\Http\Controllers\AccompanimentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\OwnerController;
use App\Http\Controllers\CafeteriaController;
use App\Http\Controllers\DrinkController;
use App\Http\Controllers\MainDishController;
use App\Http\Controllers\SideDish1Controller;
use App\Http\Controllers\SideDish2Controller;
use App\Http\Controllers\UserSettingsController;
use App\Http\Controllers\CafeteriaSettingsController;
use App\Http\Controllers\SearchController;

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

    // OWNER ================
    Route::get('/owner/{id}', [OwnerController::class, 'index']);
    Route::get('/owner/{id}/menu', [OwnerController::class, 'menu']);
    // Usuario
    Route::get('/owner/{id}/pedidos', [OwnerController::class, 'pedidos']);
    // Vendedor
    Route::get('/owner/{id}/ordenes', [OwnerController::class, 'ordenes']);

    // COMPONENTES DISH ===========
    Route::apiResource('/mainDish', MainDishController::class);
    Route::apiResource('/sideDish1', SideDish1Controller::class);
    Route::apiResource('/sideDish2', SideDish2Controller::class);
    Route::apiResource('/drink', DrinkController::class);
    Route::apiResource('/accompaniment', AccompanimentController::class);

    // ORDENES  ===================
    Route::apiResource('/orden', OrderController::class);

    // SUBIDA DE IMAGEN ==============
    Route::post('/user/{id}/upload-image', [ImageController::class, 'store']);

    // CAMBIO DE CONTRASEÑA ==============
    Route::post('/user/{id}/change-password', [UserSettingsController::class, 'store']);

    // CONFIGURACIÓN DE CAFETÍN ==========
    Route::post('/owner/{id}/settings', [CafeteriaSettingsController::class, 'store']);
});


// AUTENTICACIÓN ================ 
Route::post('/registro', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// CONTENIDO CAFETERIA ==========
Route::apiResource('/cafeterias', CafeteriaController::class);
Route::get('suggestions/mainDish', [OwnerController::class, 'suggestions']);


// Buscador ==========
Route::post('/search', [SearchController::class, 'search']);
