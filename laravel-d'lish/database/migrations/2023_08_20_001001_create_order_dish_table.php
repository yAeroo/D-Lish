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
        Schema::create('order_dishes', function (Blueprint $table) {
            $table->id();
            $table->string('img', 40)->nullable();
            $table->enum('category', ['desayuno', 'almuerzo'])->nullable();
            // $table->foreignId('caferia_id')->constrained()->onDelete('cascade');
            $table->enum('typePay', ['efectivo', 'fondos']);
            $table->unsignedBigInteger('cafeteria_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('main_dish_id');
            $table->unsignedBigInteger('side_dish1_id')->nullable();
            $table->unsignedBigInteger('side_dish2_id')->nullable();
            $table->unsignedBigInteger('accompaniment_id')->nullable();
            $table->unsignedBigInteger('drink_id')->nullable(); // Agregamos el campo para bebida
            $table->boolean('pagado')->default(false);
            $table->decimal('final_price', 8, 2);

            $table->timestamps();

            // Relaciones
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('cafeteria_id')->references('id')->on('cafeterias')->onDelete('cascade');
            $table->foreign('main_dish_id')->references('id')->on('main_dishes')->onDelete('cascade');
            $table->foreign('side_dish1_id')->references('id')->on('side_dishes1')->nullOnDelete();
            $table->foreign('side_dish2_id')->references('id')->on('side_dishes2')->nullOnDelete();
            $table->foreign('accompaniment_id')->references('id')->on('accompaniments')->nullOnDelete();
            $table->foreign('drink_id')->references('id')->on('drinks')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('final_dish');
    }
};
