<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Drink;
use App\Models\MainDish;
use App\Models\Cafeteria;
use App\Models\OrderDish;
use App\Models\SideDish1;
use App\Models\SideDish2;
use Illuminate\Http\Request;
use App\Models\Accompaniment;
use App\Http\Resources\DrinkResource;
use App\Http\Requests\OrderDishRequest;
use App\Http\Resources\MainDishResource;
use App\Http\Resources\CafeteriaResource;
use App\Http\Resources\OrderDishResource;
use App\Http\Resources\SideDish1Resource;
use App\Http\Resources\SideDish2Resource;
use App\Http\Resources\AccompanimentResource;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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
        $pagado = false;

        // Traemos usuario
        $user = User::where('id', $data['userId'])->first();

        if ($data['drink'] != 0) {
            $precioFinal = 2.75;
            $bebida = new DrinkResource(Drink::findOrFail($data['drink']));
            $bebida = $bebida->name;
        } else {
            $bebida = null;
            $data['drink'] = null;
        }

        // Comprobamos fondos suficientes
        if ($data['typePay'] == 'fondos') {
            if ($user->saldo_disp < $precioFinal) {
                // Retornar una respuesta
                return response([
                    'errors' => 'Fondos insufientes',
                ], 422);
            }
            // Descontamos dinero de los fondos
            $user->saldo_disp = $user->saldo_disp - $precioFinal;
            $user->saldo_off = $user->saldo_off + $precioFinal;
            // Guardar registro en usuario
            $user->save();
            $pagado = true;
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
            'typePay' => $data['typePay'],
            'pagado' => $pagado,
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
        $sideDish2 = new SideDish2Resource(SideDish2::findOrFail($data['side_dish2']));

        // Retornar una respuesta
        return response([
            'cafeteria' => $cafeteria->name,
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
        // Obtenemos usuario
        $user = User::where('id', $id)->first();
        // Obtén todas las órdenes de comida del usuario
        $ordenes = OrderDish::where('user_id', $user->id)->get();
        // Devuelve las órdenes como una colección
        return OrderDishResource::collection($ordenes);
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
