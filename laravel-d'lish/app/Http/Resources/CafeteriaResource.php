<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CafeteriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Datos enviados de cafeteria
        return [
            'id' => $this->id,
            'nombre' => $this->cafeteria_name,
            'cafe_pfp' => $this->cafeteria_img,
            'cafe_wallp' => $this->cafeteria_wallpaper,
            'likes' => $this->likes,
            // Componentes relacionados
            'platillos' => MainDishResource::collection($this->mainDishes),
            'complementos1' => SideDish1Resource::collection($this->sideDishes1),
            'complementos2' => SideDish2Resource::collection($this->sideDishes2),
            'bebidas' => DrinkResource::collection($this->drinks),
            'acompañantes' => [],

        ];
    }
}
