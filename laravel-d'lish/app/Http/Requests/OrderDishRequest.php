<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderDishRequest extends FormRequest
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
            'userId' => ['required', 'numeric', 'exists:users,id'],
            'cafeteriaId' => ['required', 'numeric', 'exists:cafeterias,id'],
            'main_dish' => ['required', 'numeric', 'exists:main_dishes,id'],
            'side_dish1' => ['required', 'numeric', 'exists:side_dishes1,id'],
            'side_dish2' => ['required', 'numeric', 'exists:side_dishes2,id'],
            'accompaniement' => ['nullable', 'numeric'],
            'typePay' => ['nullable'],
            'drink' => ['nullable', 'numeric'],
        ];
    }

    public function messages()
    {
        return [
            '*.*' => 'Ah ocurrido un error',
        ];
    }
}
