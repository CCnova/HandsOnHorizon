<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Batery::class, function (Faker $faker) {
    return [
        'wavesId' => $faker -> numerify('#, #, #'),
        'winner' => $faker -> lexify('????')
    ];
});
