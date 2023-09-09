<?php

namespace App\Http\Controllers;

use App\Models\Cafeteria;
use App\Models\MainDish;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public $termino;

    public function search(Request $request)
    {
        // Extraemos el termino de busqueda
        $termino = $request->input('termino');

        // Realiza la búsqueda en las tablas de MainDish
        // "%" = Buscar coincidencia en cualquier parte del string
        $platillos = MainDish::where('name', 'LIKE', "%" . $termino . "%")
            ->where('active', true)
            ->get();

        // Realiza la búsqueda en las tablas Cafeteria 
        $cafeterias = Cafeteria::where('name', 'LIKE', '%' . $termino . '%')->get();

        // if ($platillos->isEmpty() && $cafeterias->isEmpty()) {
        //     // No se encontraron resultados
        //     return response()->json(['message' => 'No se encontraron resultados'], 404);
        // }

        // Devuelve los resultados en formato JSON
        if ($cafeterias or $platillos) {
            return response()->json([
                'platillos' => $platillos,
                'cafeterias' => $cafeterias,
            ]);
        }
    }
}
