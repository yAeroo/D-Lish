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
        Schema::create('drinks', function (Blueprint $table) {
            $table->id();
            $table->string('name', 40);
            $table->string('img', 40)->nullable();
            $table->boolean('active')->default(1);
            // $table->decimal('price', 8, 2)->nullable();
            $table->unsignedBigInteger('cafeteria_id');
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
        Schema::dropIfExists('drinks');
    }
};
