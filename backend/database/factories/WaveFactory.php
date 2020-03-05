<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Wave::class, function (Faker $faker) {
    return [
        'scores' => $faker -> numerify('#,#,#'),
        'participants' => $faker -> lexify('????, ????, ????')
    ];
});
