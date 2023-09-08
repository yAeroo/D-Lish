<?php

namespace App\Http\Controllers;

use App\Http\Requests\MainDishRequest;
use App\Models\Accompaniment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

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
    public function store(MainDishRequest $request)
    {
        // Validar el registro, accede directamente a Rules()
        $data = $request->validated();

        $image = $request->file('img');
        $imageName = Str::uuid() . '.jpg';
        $destinationPath = "../../react-d'lish/public/assets/products/accompaniment";
        $image->move($destinationPath, $imageName);
    
        // Abre la imagen usando Intervention Image
        $imagen = Image::make($destinationPath . '/' . $imageName);
        $imagenRecortada = $imagen->fit(500, 500);
        $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
        $imagenRecortada->save($rutaDestinoRecorte);

        // Crear platillo
        $accompaniment = Accompaniment::create([
            'name' => $data['name'],
            'img' => $imageName,
            'cafeteria_id' => $data['idOwner'],
        ]);

        $responseData = [
            'message' => 'Agregado con éxito a tu menú',
            'data' => $accompaniment, // Aquí puedes incluir cualquier dato adicional que quieras devolver
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
    public function update(Request $request, Accompaniment $accompaniment)
    {
        if ($request['editando'] == 1) {

            if($request->hasFile('imgNew')){
                $image = $request->file('imgNew');
                $imageName = Str::uuid() . '.jpg';
                $destinationPath = "../../react-d'lish/public/assets/products/accompaniment";
                $image->move($destinationPath, $imageName);
            
                // Abre la imagen usando Intervention Image
                $imagen = Image::make($destinationPath . '/' . $imageName);
                $imagenRecortada = $imagen->fit(500, 500);
                $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
                $imagenRecortada->save($rutaDestinoRecorte);

                $accompaniment->img = $imageName;
            }

            $accompaniment->name = $request['nameNew'];

        } else{
            // Activa o desactiva
            if ($accompaniment->active == 1) {
                $accompaniment->active = 0;
            } else {
                $accompaniment->active = 1;
            }
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
