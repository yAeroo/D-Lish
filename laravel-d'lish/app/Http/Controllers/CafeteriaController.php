<?php

namespace App\Http\Controllers;

use App\Http\Resources\CafeteriaCollection;
use App\Models\Cafeteria;
use Illuminate\Http\Request;

class CafeteriaController extends Controller
{
    // Retornar cafeterias de la DB
    public function index()
    {
        // Antigua forma "simple"
        // return response()->json(['cafeterias' => Cafeteria::all()])

        // Forma API
        return new CafeteriaCollection(Cafeteria::all());
    }
}
