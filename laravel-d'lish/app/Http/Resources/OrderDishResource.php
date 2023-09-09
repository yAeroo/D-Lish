<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDishResource extends JsonResource
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
            // Campo ID de la tabla ordenes
            'id' => $this->id,
            'fecha' => Carbon::parse($this->created_at)->format('d/m/Y'),
            'pagado' => $this->pagado,
            'cafeteria' => [
                'name' => $this->cafeteria->name,
            ],
            // Propiedades relacionadas de otros modelos
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'profile_pic' => $this->user->profile_pic,
            ],
            'mainDish' => [
                'id' => $this->mainDish->id,
                'name' => $this->mainDish->name,
                'img' => $this->mainDish->img
            ],
            'sideDish1' => [
                'id' => $this->sideDish1->id,
                'name' => $this->sideDish1->name,
            ],
            'sideDish2' => [
                'id' => $this->sideDish2->id,
                'name' => $this->sideDish2->name,
            ],
            // Validación para campos Nulos
            'accompaniment' => $this->accompaniment ? [
                'id' => $this->accompaniment->id,
                'name' => $this->accompaniment->name
            ] : null,
            'drink' => $this->drink ? [
                'id' => $this->drink->id,
                'name' => $this->drink->name,
            ] : null,
            // Campo propio de la tabla
            'price' => $this->final_price
        ];
    }
}
