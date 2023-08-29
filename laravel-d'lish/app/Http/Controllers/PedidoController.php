<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderDishCollection;
use App\Models\OrderDish;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function index($id)
    {
        return new OrderDishCollection(OrderDish::with([
            'user:id,name,profile_pic',
            'mainDish:id, name'
        ])->where('cafeteria_id', $id)->get());
    }
}
