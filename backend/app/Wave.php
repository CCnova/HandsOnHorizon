<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wave extends Model
{
    protected $fillable = [
        'scores', 'participants'
    ];
}
