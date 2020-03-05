<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Surfist::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'points' => $faker->numerify('#,#,#'),
    ];
});
