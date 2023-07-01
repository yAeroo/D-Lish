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
            'cafeteria_name' => 'Don Bosco',
            'user_id' => '1',
            'cafeteria_img' => 'db_photo',
            'cafeteria_wallpaper' => 'db_wallpaper',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('cafeterias')->insert([
            'cafeteria_name' => 'Domingo Savio',
            'user_id' => '1',
            'cafeteria_img' => 'dv_photo',
            'cafeteria_wallpaper' => 'dv_wallpaper',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        DB::table('cafeterias')->insert([
            'cafeteria_name' => 'Mamá Margarita',
            'user_id' => '1',
            'cafeteria_img' => 'mm_photo',
            'cafeteria_wallpaper' => 'mm_wallpaper',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
