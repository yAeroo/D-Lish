<?php

namespace App\Http\Controllers;

use App\Models\OrderDish;
use Illuminate\Http\Request;
use App\Http\Resources\OrderDishResource;
use App\Http\Resources\OrderDishCollection;


class PedidoController extends Controller
{
    // Busqueda de Ordenes según ID de la cafetería
    public function index($id)
    {
        // Las relaciones se cargarán automáticamente debido a la propiedad `$with` en el modelo 
        $orderDishes = OrderDish::where('cafeteria_id', $id)->get();

        // El Resource `OrderDishResource se crea una colección transformada de los datos en el formato deseado.
        return OrderDishResource::collection($orderDishes);
    }
}
