<?php

namespace App\Http\Controllers;

use App\Models\SideDish2;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Http\Requests\MainDishRequest;

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
    public function store(MainDishRequest $request)
    {
        // Validar el registro, accede directamente a Rules()
        $data = $request->validated();

        $image = $request->file('img');
        $imageName = Str::uuid() . '.jpg';
        $destinationPath = "../../react-d'lish/public/assets/products/sideDish2";
        $image->move($destinationPath, $imageName);
    
        // Abre la imagen usando Intervention Image
        $imagen = Image::make($destinationPath . '/' . $imageName);
        $imagenRecortada = $imagen->fit(500, 500);
        $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
        $imagenRecortada->save($rutaDestinoRecorte);

        // Crear platillo
        $sideDish2 = SideDish2::create([
            'name' => $data['name'],
            'img' => $imageName,
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
    public function update(Request $request, SideDish2 $sideDish2)
    {
        if ($request['editando'] == 1) {

            if($request->hasFile('imgNew')){
                $image = $request->file('imgNew');
                $imageName = Str::uuid() . '.jpg';
                $destinationPath = "../../react-d'lish/public/assets/products/sideDish2";
                $image->move($destinationPath, $imageName);
            
                // Abre la imagen usando Intervention Image
                $imagen = Image::make($destinationPath . '/' . $imageName);
                $imagenRecortada = $imagen->fit(500, 500);
                $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
                $imagenRecortada->save($rutaDestinoRecorte);

                $sideDish2->img = $imageName;
            }

            $sideDish2->name = $request['nameNew'];

        } else{
            // Activa o desactiva
            if ($sideDish2->active == 1) {
                $sideDish2->active = 0;
            } else {
                $sideDish2->active = 1;
            }
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
