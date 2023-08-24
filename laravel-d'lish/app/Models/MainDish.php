<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainDish extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'img'
    ];

    public function orderDishes()
    {
        return $this->belongsTo(OrderDish::class);
    }

    public function cafeteria()
    {
        return $this->belongsTo(cafeteria::class);
    }
}
