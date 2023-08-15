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
        Schema::create('cafeterias', function (Blueprint $table) {
            $table->id(); // Columna 'Id' - Llave primaria, único, autoincrement
            $table->string('cafeteria_name', 50); // Columna 'cafeteria_name' - String 
            $table->string('cafeteria_public', 50)->nullable(); // 
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Columna 'User_id' - Llave foranea para referenciar al id del propitario de la cafeteria
            $table->string('cafeteria_img'); // Columna 'cafeteria_img' - String
            $table->string('cafeteria_wallpaper'); // Columna 'cafeteria_wallpaper' - String
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
        Schema::dropIfExists('cafeteria');
    }
};
