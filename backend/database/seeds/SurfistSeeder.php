<?php

use Illuminate\Database\Seeder;

class SurfistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Surfist::class, 10)->create();
    }
}
