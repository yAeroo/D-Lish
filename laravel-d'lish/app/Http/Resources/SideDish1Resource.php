<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SideDish1Resource extends JsonResource
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
            'type' => "sideDish1",
            'id' => $this->id,
            'name' => $this->name,
            'active' => $this->active,
            'img' => $this->img,
        ];
    }
}
