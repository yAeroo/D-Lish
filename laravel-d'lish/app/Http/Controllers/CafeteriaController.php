<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CafeteriaCollection;
use App\Models\Cafeteria;
use App\Http\Resources\FinalDishResource;
use App\Http\Resources\FinalDishCollection;
use App\Models\FinalDish;

class CafeteriaController extends Controller
{
    // Retornar cafeterias de la DB
    public function index()
    {
        return new CafeteriaCollection(Cafeteria::all());
    }

    public function content($id)
    {
        // Buscamos según ID
        $cafeteria = Cafeteria::where('id', $id)->get();
        // Retornamos
        return new CafeteriaCollection($cafeteria);
    }
}
