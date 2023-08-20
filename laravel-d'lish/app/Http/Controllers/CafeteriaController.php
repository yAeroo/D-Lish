<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CafeteriaCollection;
use App\Models\Cafeteria;
use App\Http\Resources\FinalDishResource;
use App\Http\Resources\FinalDishCollection;
use App\Models\FinalDish;

class CafeteriaController extends Controller
{
    // Retornar cafeterias de la DB
    public function index()
    {

        return new CafeteriaCollection(Cafeteria::all());
    }

    public function finalDishes()
    {
        // $cafetin = Cafeteria::findOrFail($cafetinId);
        // $finalDishes = $cafetin->finalDishes;

        return new FinalDishCollection(FinalDish::all());
    }


    // Extraer canciones del album ==========
    // public function index(User $user, Album $album)
    // {
    //     $CountSongs = Song::where([['album_id', $album->id], ['visibility', true]])->get();

    //     // Actualización de segundos
    //     $duration = 0;
    //     $total = 0;
    //     foreach ($CountSongs as $song) {
    //         $total += $song->total;
    //         $duration += $song->total;
    //     }

    //     // Uso de Trait - Similar a una herencia - No repite codigo
    //     $duration = $this->TimeTotal($duration);
    //     Album::where('id', $album->id)->update(['duration' => $duration]);

    //     // Mostramos vista y devolvemos datos con las llaves 
    //     return view('songs', [
    //         'user' => $user,
    //         'album' => $album,
    //         'counts' => $CountSongs,
    //         'displayList' => 0
    //     ]);
    // }

}
