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
            'nombre' => $this->name,
            'cafe_pfp' => $this->img,
            'cafe_wallp' => $this->img_wall,
            'likes' => $this->likes,
        ];
    }
}
