<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDish extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'cafeteria_id',
        'category',
        //
        'main_dish_id',
        'side_dish1_id',
        'side_dish2_id',
        'accompaniment_id',
        'drink_id',
        'final_price'
    ];

    // Definición de propiedades del JSON mediante las relaciones de los métodos del modelo
    protected $with = ['user', 'cafeteria', 'mainDish', 'sideDish1', 'sideDish2', 'accompaniment', 'drink'];

    // Relaciones con otros modelos de la DB
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mainDish()
    {
        return $this->belongsTo(MainDish::class);
    }

    public function sideDish1()
    {
        return $this->belongsTo(SideDish1::class);
    }

    public function sideDish2()
    {
        return $this->belongsTo(SideDish2::class);
    }

    public function accompaniment()
    {
        return $this->belongsTo(Accompaniment::class);
    }

    public function drink()
    {
        return $this->belongsTo(Drink::class);
    }

    public function cafeteria()
    {
        return $this->belongsTo(cafeteria::class);
    }
}
