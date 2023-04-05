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
            $table->string('name', 30); // Columna 'Name' - String
            $table->string('last_name', 30); // Columna 'Last_name' - String
            $table->string('password', 32); // Columna 'Password' - String
            $table->enum('type', ['user', 'admin', 'owner']); // Columna 'type' - Rol de usuario, admin y propietario
            $table->enum('gender', ['M', 'F']); // Columna 'gender' - Femenino y masculino
            $table->string('profile_pic', 40)->default("default-pfp.png"); // Columna 'profile_pic' - string con valor por default "default-pfp.png" para nuevos usuarios
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
        Schema::dropIfExists('users');
    }
};
