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
        Schema::create('dishes', function (Blueprint $table) {
            $table->id(); // Columna 'Id' - Llave primaria, único, autoincrement
            $table->foreignId('cafeteria_id')->constrained()->onDelete('cascade'); // Columna 'Owner_id' - Llave foranea para referenciar al id de la cafeteria que pertenece
            $table->string('name', 20);
            $table->string('description', 200);
            $table->enum('menu_type', ['meal', 'lunch', 'snacks', 'drinks']); // Columna 'menu_type' - Desayuno, almuerzo, antojitos y bebidas
            $table->string('img', 40);
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
        Schema::dropIfExists('dish');
    }
};
