<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

class ImageController extends Controller
{
    public function store(Request $request, $id){

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = Str::uuid() . '.jpg';
        
            // Ruta de destino fuera del proyecto Laravel
            $destinationPath = "../../react-d'lish/public/assets/pfp";
        
            $image->move($destinationPath, $imageName);
        
            // Abre la imagen usando Intervention Image
            $imagen = Image::make($destinationPath . '/' . $imageName);

            $deletePath = "../../react-d'lish/public/assets/pfp/" . $imageName;
            
            // Realiza el recorte a 500x500
            $imagenRecortada = $imagen->fit(500, 500);

            $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
            $imagenRecortada->save($rutaDestinoRecorte);
        
            $sqlUpdateDB = DB::table('users')
                ->where('id', $id)
                ->update(['profile_pic' => $imageName]);
        
            return response()->json(['message' => 'La imagen se ha subido correctamente']);
        }

        return response()->json(['error' => 'No image uploaded'], 400);
    }

}
