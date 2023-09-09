<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class UserSettingsController extends Controller
{
    public function store(Request $request, $id){
        if($request->oldPassword != "" && $request->newPassword != "" && $request->newPassword_confirmation){

            $user = User::Find($id); // Buscando al usuario por el Id
            $user->makeVisible('password'); // Haciendo visible la columna 

            if(Hash::check($request->oldPassword, $user->password)){
                if($request->oldPassword != $request->newPassword){
                    $validated = $request->validate([
                        'newPassword' => ['required', 'confirmed', Password::min(6)->letters()->numbers()]
                    ]);
    
                    $sqlUpdateDB = DB::table('users')
                    ->where('id', $id)
                    ->update(['password' => bcrypt($request->newPassword)]);
    
                    return response(['message' => 'Exito'], 200);
                }else{
                    return response(['message' => 'La nueva contraseña debe ser diferente.'], 422);
                }

            }else{
                return response(['message' => 'Contraseña antigua incorrecta.'], 422);
            }
        }else{
            return response(['message' => 'Campos incompletos.'], 400);
        }
    }
}
