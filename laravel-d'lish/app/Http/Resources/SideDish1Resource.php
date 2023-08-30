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
            'id' => $this->id,
            'type' => "sideDish1",
            'name' => $this->name
        ];
    }
}
