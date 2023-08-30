<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Columna 'Id' - Llave primaria, único, autoincrement
            $table->string('email', 50)->unique(); // Columna 'Email - String, único
            $table->string('name', 50); // Columna 'Name' - String
            $table->enum('gender', ['M', 'F']); // Columna 'gender' - Femenino y masculino
            $table->enum('type', ['user', 'admin', 'owner'])->default('user'); // Columna 'type' - Rol de usuario, admin y propietario
            $table->string('saldo_disp')->nullable()->default(0); // Campo de saldo a ser encriptado
            $table->string('saldo_off')->nullable()->default(0); // Campo de saldo a ser encriptado
            $table->string('password', 60); // Columna 'Password' - String
            $table->string('profile_pic', 41)->default("default-pfp.png"); // Columna 'profile_pic' - string con valor por default "default-pfp.png" para nuevos usuarios
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
};
