<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MainDishResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'type' => "mainDish",
            'id' => $this->id,
            'cafeteria' => [
                'id' => $this->cafeteria->id,
                'name' => $this->cafeteria->name,
            ],
            'name' => $this->name,
            'active' => $this->active,
            'img' => $this->img,
        ];
    }
}
