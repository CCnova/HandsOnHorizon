<?php

use Illuminate\Database\Seeder;

class BaterySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Batery::class, 5)->create();
    }
}
