<?php

namespace App\Http\Controllers;

use App\Models\OrderDish;
use Illuminate\Http\Request;
use App\Http\Requests\OrderDishRequest;
use App\Http\Resources\AccompanimentResource;
use App\Http\Resources\CafeteriaResource;
use App\Http\Resources\DrinkResource;
use App\Http\Resources\MainDishResource;
use App\Http\Resources\SideDish1Resource;
use App\Http\Resources\SideDish2Resource;
use App\Models\Accompaniment;
use App\Models\Cafeteria;
use App\Models\Drink;
use App\Models\MainDish;
use App\Models\SideDish1;
use App\Models\SideDish2;

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
        // Evaluamos Valores posiblemente nulos
        $precioFinal = 2.50;

        if ($data['drink'] != 0) {
            $precioFinal = 2.75;
            $bebida = new DrinkResource(Drink::findOrFail($data['drink']));
            $bebida = $bebida->name;
        } else {
            $bebida = null;
            $data['drink'] = null;
        }

        if ($data['accompaniement'] == 0) {
            $acompant = null;
            $data['accompaniement'] = $acompant;
        } else {
            $acompant = new AccompanimentResource(Accompaniment::findOrFail($data['accompaniement']));
            $acompant = $acompant->name;
        }

        // Creamos el registro
        OrderDish::create([
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

        // Concatenamos respuesta de nombres
        $cafeteria = new CafeteriaResource(Cafeteria::findOrFail($data['cafeteriaId']));
        $mainDish = new MainDishResource(MainDish::findOrFail($data['main_dish']));
        $sideDish1 = new SideDish1Resource(SideDish1::findOrFail($data['side_dish1']));
        $sideDish2 = new SideDish2Resource(SideDish2::findOrFail($data['main_dish']));

        // Retornar una respuesta
        return response([
            'principal' => $mainDish->name,
            'complement1' => $sideDish1->name,
            'complement2' => $sideDish2->name,
            'bebida' => $bebida,
            'acompanante' => $acompant,
            'precio' => $precioFinal
        ], 200);
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
