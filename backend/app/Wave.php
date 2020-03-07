<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wave extends Model
{
    protected $fillable = [
        'scores', 'participants'
    ];

    public function bateries()
    {
        return $this->belongsTo('App\Batery', 'bateryId');
    }

    public function surfists()
    {
        return $this->hasMany('App\Surfist');
    }
}
