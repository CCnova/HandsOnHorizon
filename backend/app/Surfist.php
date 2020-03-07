<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Surfist extends Model
{
    protected $fillable = [
        'name', 'points'
    ];

    public function waves()
    {
        return $this->belongsToMany('App\Wave');
    }
}
