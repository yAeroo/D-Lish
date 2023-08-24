<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MainDish extends Model
{
    use HasFactory;

    public function finalDishes()
    {
        return $this->belongsTo(FinalDish::class);
    }
}
