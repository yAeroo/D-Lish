<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cafeteria extends Model
{
    use HasFactory;

    // Datos a variar
    protected $fillable = [
        'cafeteria_name',
        'cafeteria_img',
        'cafeteria_wallpaper',
    ];

    public function OrderDishes()
    {
        return $this->hasMany(OrderDish::class);
    }
}
