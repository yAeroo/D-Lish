<?php

namespace App\Http\Controllers;

use App\Http\Requests\MainDishRequest;
use App\Models\MainDish;
use App\Models\SideDish1;
use Illuminate\Http\Request;

class SideDish1Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validar el registro, accede directamente a Rules()
        $data = $request->validated();

        // Crear el usuario
        $sideDish1 = SideDish1::create([
            'name' => $data['name'],
            'cafeteria_id' => $data['idOwner'],
        ]);

        $responseData = [
            'message' => 'Agregado con éxito a tu menú',
            'data' => $sideDish1, // Aquí puedes incluir cualquier dato adicional que quieras devolver
        ];

        return response()->json($responseData, 200);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SideDish1  $sideDish1
     * @return \Illuminate\Http\Response
     */
    public function show(SideDish1 $sideDish1)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SideDish1  $sideDish1
     * @return \Illuminate\Http\Response
     */
    public function update(SideDish1 $sideDish1)
    {
        // Activa o desactiva
        if ($sideDish1->active == 1) {
            $sideDish1->active = 0;
        } else {
            $sideDish1->active = 1;
        }

        $sideDish1->save();
        return [
            'sideDish1' => $sideDish1
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SideDish1  $sideDish1
     * @return \Illuminate\Http\Response
     */
    public function destroy(SideDish1 $sideDish1)
    {
        if (!$sideDish1) {
            return response()->json(['error' => 'El elemento no existe'], 404);
        }

        $sideDish1->delete();

        return response()->json(['message' => 'Elemento eliminado con éxito']);
    }
}
