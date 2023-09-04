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
        //
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
    public function update(Request $request, Accompaniment $accompaniment)
    {
        //
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
