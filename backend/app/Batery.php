<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batery extends Model
{
    protected $fillable = [
        'wavesId', 'winner'
    ];

    public function waves()
    {
        return $this->hasMany('App\Waves');
    }
}
