<?php

namespace App\Http\Requests;

use App\Models\SideDish1;
use App\Models\SideDish2;
use App\Models\Accompaniment;
use App\Models\Drink;
use Illuminate\Foundation\Http\FormRequest;

class MainDishRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'regex:/^[\pL\s]+$/u'],
            'img' => ['required'],
            'idOwner' => ['exists:cafeterias,id']
        ];
    }
}
