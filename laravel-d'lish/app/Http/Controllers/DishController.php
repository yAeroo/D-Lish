<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderDishRequest;
use App\Models\OrderDish;
use Illuminate\Http\Request;

class DishController extends Controller
{
    public function store(OrderDishRequest $request)
    {
        // Validamos ID's
        $data = $request->validated();

        // Evaluamos si incluyo bebida o no
        $precioFinal = 2.50;

        if ($data['drink'] != null) {
            $precioFinal = 2.75;
        }

        // Creamos el registro
        $orden = OrderDish::create([
            'user_id' => $data['userId'],
            'cafeteria_id' => $data['cafeteriaId'],
            'category' => 'almuerzo',
            //
            'main_dish_id' => $data['main_dish'],
            'side_dish1_id' => $data['side_dish1'],
            'side_dish2_id' => $data['side_dish2'],
            'accompaniment_id' => $data['accompaniement'],
            'drink_id' => $data['drink'],
            //
            'final_price' => $precioFinal,
        ]);

        // Retornar una respuesta
        return [
            'orden' => $orden
        ];
    }
}
