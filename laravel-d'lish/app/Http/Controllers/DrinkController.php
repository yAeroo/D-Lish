<?php

namespace App\Http\Controllers;

use App\Http\Requests\MainDishRequest;
use App\Models\Drink;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class DrinkController extends Controller
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
        $destinationPath = "../../react-d'lish/public/assets/products/drinks";
        $image->move($destinationPath, $imageName);
    
        // Abre la imagen usando Intervention Image
        $imagen = Image::make($destinationPath . '/' . $imageName);
        $imagenRecortada = $imagen->fit(500, 500);
        $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
        $imagenRecortada->save($rutaDestinoRecorte);

        // Crear platillo
        $drinks = Drink::create([
            'name' => $data['name'],
            'img' => $imageName,
            'cafeteria_id' => $data['idOwner'],
        ]);

        $responseData = [
            'message' => 'Agregado con éxito a tu menú',
            'data' => $drinks, // Aquí puedes incluir cualquier dato adicional que quieras devolver
        ];

        return response()->json($responseData, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Drink  $drink
     * @return \Illuminate\Http\Response
     */
    public function show(Drink $drink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Drink  $drink
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Drink $drink)
    {
        if ($request['editando'] == 1) {

            if($request->hasFile('imgNew')){
                $image = $request->file('imgNew');
                $imageName = Str::uuid() . '.jpg';
                $destinationPath = "../../react-d'lish/public/assets/products/drinks";
                $image->move($destinationPath, $imageName);
            
                // Abre la imagen usando Intervention Image
                $imagen = Image::make($destinationPath . '/' . $imageName);
                $imagenRecortada = $imagen->fit(500, 500);
                $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
                $imagenRecortada->save($rutaDestinoRecorte);

                $drink->img = $imageName;
            }

            $drink->name = $request['nameNew'];

        } else{
            // Activa o desactiva
            if ($drink->active == 1) {
                $drink->active = 0;
            } else {
                $drink->active = 1;
            }
        }

        $drink->save();
        return [
            'drink' => $drink
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Drink  $drink
     * @return \Illuminate\Http\Response
     */
    public function destroy(Drink $drink)
    {
        if (!$drink) {
            return response()->json(['error' => 'El elemento no existe'], 404);
        }

        $drink->delete();

        return response()->json(['message' => 'Elemento eliminado con exito']);
    }
}
