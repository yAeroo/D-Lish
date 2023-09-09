<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;

class RegisterRequest extends FormRequest
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
            'name' => ['required', 'string', 'regex:/^[\pL\s]+$/u'],
            'email' => ['required', 'email', 'unique:users,email'],
            'gender' => ['required'],
            'password' => [
                'required', 'confirmed',
                // Clase de validación de contraseña
                PasswordRules::min(6)->letters()->numbers()
            ]
        ];
    }

    public function messages()
    {
        return [
            'name' => 'El nombre es obligatorio. ',
            'name.regex' => 'El nombre solo puede contener letras. ',
            'email' => 'El correo es obligatorio. ',
            'password' => 'La contraseña debe contener mínimo 6 caracteres, un símbolo y un número. ',
            'email.email' => 'El correo no es válido. ',
            'email.unique' => 'El usuario ya esta registrado. ',
            'password.confirmed' => 'Las contraseñas no coinciden. '
        ];
    }
}
