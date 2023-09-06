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
            $table->string('name', 50); // Columna 'name' - String 
            $table->string('mainPublic', 50); // 
            $table->string('contactEmail'); // 
            $table->unsignedBigInteger('user_id')->default(null)->nullable(); // Columna 'User_id' - Llave foranea para referenciar al id del propitario de la cafeteria
            $table->string('img'); // Columna 'img' - String
            $table->string('img_wall'); // Columna 'img_wall' - String
            $table->unsignedBigInteger('likes')->nullable();
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
        Schema::dropIfExists('cafeterias');
    }
};
