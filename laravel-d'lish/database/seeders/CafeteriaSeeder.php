<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CafeteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cafeterias')->insert([
            'name' => 'Don Bosco',
            'user_id' => 1,
            'mainPublic' => 'Bachillerato & III Ciclo',
            'contactEmail' => 'don.bosco@gmail.com',
            'img' => 'db_pfp.jpg',
            'img_wall' => 'db_wall.jpg',
            'likes' => 100,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('cafeterias')->insert([
            'name' => 'Domingo Savio',
            'user_id' => 2,
            'mainPublic' => 'Bachillerato & III Ciclo',
            'contactEmail' => 'domingo.savio@gmail.com',
            'img' => 'ds_pfp.jpg',
            'img_wall' => 'ds_wall.jpg',
            'likes' => 75,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('cafeterias')->insert([
            'name' => 'María Auxiliadora',
            'user_id' => 3,
            'mainPublic' => 'Bachillerato & III Ciclo',
            'contactEmail' => 'maria.auxiliadora@gmail.com',
            'img' => 'ma_pfp.jpg',
            'img_wall' => 'ma_wall.jpg',
            'likes' => 125,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
