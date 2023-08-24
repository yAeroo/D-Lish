<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDish extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'img',
        'category',
        'main_dish_id',
        'side_dish1_id',
        'side_dish2_id',
        'accompaniment_id',
        'drink_id',
        'final_price'
    ];

    public function mainDish()
    {
        return $this->hasMany(MainDish::class);
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
