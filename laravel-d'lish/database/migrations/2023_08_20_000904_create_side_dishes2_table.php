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
        Schema::create('side_dishes2', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cafeteria_id');
            $table->string('name', 40);
            $table->boolean('active')->default(1);
            $table->string('img', 40)->nullable();
            // $table->decimal('price', 8, 2)->nullable();
            $table->foreign('cafeteria_id')->references('id')->on('cafeterias')->onDelete('cascade');

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
        Schema::dropIfExists('side_dishes2');
    }
};
