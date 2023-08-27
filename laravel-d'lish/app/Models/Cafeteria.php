<?php

namespace App\Models;

use App\Models\Drink;
use App\Models\MainDish;
use App\Models\SideDish1;
use App\Models\SideDish2;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\OrderDish;

class Cafeteria extends Model
{
    use HasFactory;

    // Datos a variar
    protected $fillable = [
        'cafeteria_name',
        'cafeteria_img',
        'cafeteria_wallpaper',
    ];

    public function mainDishes()
    {
        return $this->hasMany(MainDish::class);
    }

    public function sideDishes1()
    {
        return $this->hasMany(SideDish1::class);
    }

    public function sideDishes2()
    {
        return $this->hasMany(SideDish2::class);
    }

    public function drinks()
    {
        return $this->hasMany(Drink::class);
    }

    public function accompaniments()
    {
        return $this->hasMany(Accompaniment::class);
    }

    public function orderDishes()
    {
        return $this->hasMany(OrderDish::class);
    }
}
