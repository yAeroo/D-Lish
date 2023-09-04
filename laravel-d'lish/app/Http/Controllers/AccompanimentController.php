<?php

namespace App\Http\Controllers;

use App\Models\Accompaniment;
use Illuminate\Http\Request;

class AccompanimentController extends Controller
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
        $sideDish2 = Accompaniment::create([
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
     * @param  \App\Models\Accompaniment  $accompaniment
     * @return \Illuminate\Http\Response
     */
    public function show(Accompaniment $accompaniment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Accompaniment  $accompaniment
     * @return \Illuminate\Http\Response
     */
    public function update(Accompaniment $accompaniment)
    {
        // Activa o desactiva
        if ($accompaniment->active == 1) {
            $accompaniment->active = 0;
        } else {
            $accompaniment->active = 1;
        }

        $accompaniment->save();
        return [
            'accompaniment' => $accompaniment
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Accompaniment  $accompaniment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Accompaniment $accompaniment)
    {
        if (!$accompaniment) {
            return response()->json(['error' => 'El elemento no existe'], 404);
        }

        $accompaniment->delete();

        return response()->json(['message' => 'Elemento eliminado con exito']);
    }
}
