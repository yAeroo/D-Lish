<?php

namespace App\Http\Controllers;

use App\Http\Resources\AccompanimentResource;
use App\Http\Resources\DrinkResource;
use App\Http\Resources\MainDishResource;
use App\Models\User;
use App\Models\OrderDish;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\OwnerResource;
use App\Http\Resources\OrderDishResource;
use App\Http\Resources\SideDish1Resource;
use App\Http\Resources\SideDish2Resource;
use App\Models\Accompaniment;
use App\Models\Drink;
use App\Models\MainDish;
use App\Models\SideDish1;
use App\Models\SideDish2;

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

    public function ordenes($id)
    {
        // Las relaciones se cargarán automáticamente debido a la propiedad `$with` en el modelo 
        $orderDishes = OrderDish::where('cafeteria_id', $id)->get();

        // El Resource `OrderDishResource se crea una colección transformada de los datos en el formato deseado.
        return OrderDishResource::collection($orderDishes);
    }

    public function pedidos($id)
    {
        $mainDishes = MainDish::where([['cafeteria_id', $id], ['active', true]])->get();

        return MainDishResource::collection($mainDishes);
    }

    public function suggestions()
    {
        $suggestions = MainDish::inRandomOrder()->limit(6)->get();

        return MainDishResource::collection($suggestions);
    }

    public function menu($id)
    {
        $mainDishes = MainDish::where('cafeteria_id', $id)->get();
        $sideDish1 = SideDish1::where('cafeteria_id', $id)->get();
        $sideDish2 = SideDish2::where("cafeteria_id", $id)->get();
        $drinks = Drink::where('cafeteria_id', $id)->get();
        $accompaniment = Accompaniment::where('cafeteria_id', $id)->get();

        return [
            "mainDishes" => MainDishResource::collection($mainDishes),
            "sideDishes1" => SideDish1Resource::collection($sideDish1),
            "drinks" => DrinkResource::collection($drinks),
            "sideDishes2" => SideDish2Resource::collection($sideDish2),
            "accompaniments" => AccompanimentResource::collection($accompaniment),
        ];
    }
}
