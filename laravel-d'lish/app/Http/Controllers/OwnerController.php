<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\OrderDish;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\OwnerResource;
use App\Http\Resources\OrderDishResource;

class OwnerController extends Controller
{
    public function index($id)
    {
        $owners = DB::table('users')
            ->where('type', 'owner')
            ->get();

        if ($owners->isEmpty()) {
            // Manejar el caso en que no se encuentren usuarios propietarios
            return response()->json(['message' => 'Cafetería no encontrada'], 404);
        }

        $user = User::find($id);

        return new OwnerResource($user);
    }

    public function pedidos($id)
    {
        // Las relaciones se cargarán automáticamente debido a la propiedad `$with` en el modelo 
        $orderDishes = OrderDish::where('cafeteria_id', $id)->get();

        // El Resource `OrderDishResource se crea una colección transformada de los datos en el formato deseado.
        return OrderDishResource::collection($orderDishes);
    }
}
