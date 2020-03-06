<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Wave;
use Illuminate\Http\Request;

class WaveController extends Controller
{
    private $wave;

    public function __construct(Wave $wave)
    {
        $this -> wave = $wave;
    }

    public function bateries()
    {
        return $this->belongsTo('App\Batery', 'bateryId');
    }

    public function surfists()
    {
        return $this->hasMany('App\Surfist');
    }

    public function index()
    {
        return response()->json($this->wave->paginate(15));
    }

    public function show(Wave $id)
    {
        $data = ['data' => $id];
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $waveData = $request -> all();
        $this->wave->create($waveData);

        return response()->json(['msg' => 'Onda criada!'], 201);
    }

    public function update(Request $request, $id)
    {
        $waveData = $request -> all();
        $wave = $this->wave->find($id);
        $wave->update($waveData);

        return response()->json(['msg' => 'Onda atualizada!'], 201);
    }
}