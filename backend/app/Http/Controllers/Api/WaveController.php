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

    public function index()
    {
        return response()->json($this->wave->paginate(15));
    }

    public function show(Wave $id)
    {
        $data = ['data' => $id];
        return response()->json($data);
    }
}
