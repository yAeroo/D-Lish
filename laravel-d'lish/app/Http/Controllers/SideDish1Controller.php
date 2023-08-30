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
        //
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
    public function update(Request $request, SideDish1 $sideDish1)
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
        //
    }
}
