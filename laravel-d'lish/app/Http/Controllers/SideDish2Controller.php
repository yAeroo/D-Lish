<?php

namespace App\Http\Controllers;

use App\Models\SideDish2;
use Illuminate\Http\Request;

class SideDish2Controller extends Controller
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
        $sideDish2 = SideDish2::create([
            'name' => $data['name'],
            'cafeteria_id' => $data['idOwner'],
        ]);

        $responseData = [
            'message' => 'Agregado con éxito a tu menú',
            'data' => $sideDish2, // Aquí puedes incluir cualquier dato adicional que quieras devolver
        ];

        return response()->json($responseData, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SideDish2  $sideDish2
     * @return \Illuminate\Http\Response
     */
    public function show(SideDish2 $sideDish2)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SideDish2  $sideDish2
     * @return \Illuminate\Http\Response
     */
    public function update(SideDish2 $sideDish2)
    {
        // Activa o desactiva
        if ($sideDish2->active == 1) {
            $sideDish2->active = 0;
        } else {
            $sideDish2->active = 1;
        }

        $sideDish2->save();
        return [
            'sideDish2' => $sideDish2
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SideDish2  $sideDish2
     * @return \Illuminate\Http\Response
     */
    public function destroy(SideDish2 $sideDish2)
    {
        if (!$sideDish2) {
            return response()->json(['error' => 'El elemento no existe'], 404);
        }

        $sideDish2->delete();

        return response()->json(['message' => 'Elemento eliminado con éxito']);
    }
}
