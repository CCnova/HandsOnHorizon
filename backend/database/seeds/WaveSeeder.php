<?php

use Illuminate\Database\Seeder;

class WaveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Wave::class, 15)->create();
    }
}
