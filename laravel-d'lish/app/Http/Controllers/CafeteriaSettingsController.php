<?php

namespace App\Http\Controllers;

use App\Models\Cafeteria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CafeteriaSettingsController extends Controller
{
    public function store($id, Request $request){
        $statusChanges = false; // Creación de banderas
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

        return response()->json(['changes' => ['statusChanges' => $statusChanges, 'nameFlag' => $nameFlag, 
                                                'mainPublic' => $mainPublicFlag, 'contactEmailFlag' => $contactEmailFlag]]);
    }
}
