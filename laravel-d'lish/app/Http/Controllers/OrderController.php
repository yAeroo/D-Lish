<?php

namespace App\Http\Controllers;

use App\Models\OrderDish;
use Illuminate\Http\Request;
use App\Http\Requests\OrderDishRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return "Correcto...";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrderDishRequest $request)
    {
        // Validamos ID's
        $data = $request->validated();

        // Evaluamos si incluyo bebida ó acompañantes
        $precioFinal = 2.50;

        if ($data['drink'] != 0) {
            $precioFinal = 2.75;
        } else {
            $data['drink'] = null;
        }

        if ($data['accompaniement'] == 0) {
            $data['accompaniement'] = null;
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
