<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    public function store(Request $request, $id){

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = Str::uuid() . '.' . $image->getClientOriginalExtension();

            $destinationPath  = "../../react-d'lish/public/assets/pfp";

            $image->move("$destinationPath", $imageName);

            $sqlUpdateDB = DB::table('users')
                ->where('id', $id)
                ->update(['profile_pic' => $imageName]);

            return response()->json(['message' => 'Image uploaded successfully']);
        }


        return response()->json(['error' => 'No image uploaded'], 400);
    }

}
