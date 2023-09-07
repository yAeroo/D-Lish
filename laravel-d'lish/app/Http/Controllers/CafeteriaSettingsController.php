<?php

namespace App\Http\Controllers;

use App\Models\Cafeteria;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Validator;

class CafeteriaSettingsController extends Controller
{
    public function store($id, Request $request){

        $statusChanges = false; $imgWallFlag = false; // Creación de banderas
        $nameFlag = false; $mainPublicFlag = false; $contactEmailFlag = false; 

        if($request->name != ""){
            $validated = $request->validate([
                'name' => 'min:4|unique:cafeterias|regex:/^[\pL\s]+$/u'
            ]);

            $sqlUpdateDB = DB::table('cafeterias')
                    ->where('id', $id)
                    ->update(['name' => $request->name]);
            $statusChanges = true;
            $nameFlag = true;
        } 

        if($request->mainPublic != ""){
            $validator = Validator::make($request->all(), [
                'mainPublic' => ['min:3', 'regex:/^[\pL\s]+$/u'],
            ]);

            if ($validator->fails()) {
                $errors = $validator->errors();
                return response()->json(['errors' => $errors,'changes' => ['statusChanges' => $statusChanges, 'nameFlag' => $nameFlag]], 422);
            }

            $sqlUpdateDB = DB::table('cafeterias')
                    ->where('id', $id)
                    ->update(['mainPublic' => $request->mainPublic]);
            $statusChanges = true;
            $mainPublicFlag = true;
        } 

        if($request->contactEmail != ""){
            $validator = Validator::make($request->all(), [
                'contactEmail' => ['min:5', 'email', 'unique:cafeterias'],
            ]);

            if ($validator->fails()) {
                $errors = $validator->errors();
                return response()->json(['errors' => $errors ,'changes' => ['statusChanges' => $statusChanges, 'nameFlag' => $nameFlag,
                                                        'mainPublic' => $mainPublicFlag, 'contactEmailFlag' => $contactEmailFlag]], 422);
            }

            $sqlUpdateDB = DB::table('cafeterias')
                    ->where('id', $id)
                    ->update(['contactEmail' => $request->contactEmail]);
            $statusChanges = true;
            $contactEmailFlag = true;
        }

        if ($request->hasFile('img_wall')) {
            $image = $request->file('img_wall');
            $imageName = Str::uuid() . '.jpg';
        
            // Ruta de destino fuera del proyecto Laravel
            $destinationPath = "../../react-d'lish/public/assets/cafeterias";
        
            $image->move($destinationPath, $imageName);
        
            // Abre la imagen usando Intervention Image
            $imagen = Image::make($destinationPath . '/' . $imageName);
            
            // Realiza el recorte a 1000x563
            $imagenRecortada = $imagen->fit(1000, 563);

            $rutaDestinoRecorte = $destinationPath . '/' . $imageName;
            $imagenRecortada->save($rutaDestinoRecorte);
        
            $sqlUpdateDB = DB::table('cafeterias')
                ->where('id', $id)
                ->update(['img_wall' => $imageName]);
        
            $statusChanges = true;
            $imgWallFlag = true;
        }

        return response()->json(['changes' => ['statusChanges' => $statusChanges, 'nameFlag' => $nameFlag, 
                                                'mainPublic' => $mainPublicFlag, 'contactEmailFlag' => $contactEmailFlag,
                                                'imgWallFlag' => $imgWallFlag]]);
    }
}
