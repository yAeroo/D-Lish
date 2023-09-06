<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OwnerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // Campos a retornar de la DB, según el método del modelo
        return [
            'id' => $this->id,
            'email' => $this->email,
            'name' => $this->name,
            'gender' => $this->gender,
            'type' => $this->type,
            'cafeteria' => [
                'id' => $this->cafeteria->id,
                'name' => $this->cafeteria->name,
                'img' => $this->cafeteria->img,
                'contactEmail' => $this->cafeteria->contactEmail,
                'mainPublic' => $this->cafeteria->mainPublic,
            ]
        ];
    }
}
