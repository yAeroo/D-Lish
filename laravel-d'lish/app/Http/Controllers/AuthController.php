<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // Validar el registro, accede directamente a Rules()
        $data = $request->validated();

        // Crear el usuario
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'gender' => $data['gender'],
            'password' => bcrypt($data['password'])
        ]);

        // Retornar una respuesta
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        // Revisar el password
        if (!Auth::attempt($data)) {
            return response([
                'errors' => ['Las credenciales no coinciden']
                // Estatus 422 - Datos ingresados por el usuario pues no son correctos
            ], 422);
        }

        // Autenticar al usuario
        $user = Auth::user();
        // Retornar una respuesta
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
    }

    public function logout(Request $request)
    {
        // Del request obtenido, extraermos el token del usuario
        $user = $request->user();
        $user->currentAccessToken()->delete();

        // Devolvemos como respuesta al usuario en valor nulo
        return [
            'user' => null
        ];
    }
}
