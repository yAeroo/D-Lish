<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SideDish1 extends Model
{
    use HasFactory;
    protected $table = 'side_dishes1';

    protected $fillable = [
        'name',
        'cafeteria_id',
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
