<?php

namespace App\Http\Controllers;

use App\Http\Resources\CafeteriaCollection;
use App\Models\Cafeteria;
use Illuminate\Http\Request;

class CafeteriaController extends Controller
{
    // Retornar cafeterias de la DB
    public function index()
    {
        // Antigua forma "simple"
        // return response()->json(['cafeterias' => Cafeteria::all()])

        // Forma API
        return new CafeteriaCollection(Cafeteria::all());
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
