<?php

namespace App\Http\Controllers\Api;

use App\Batery;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BateryController extends Controller
{
    private $batery;

    public function __construct(Batery $batery)
    {
        $this -> batery = $batery;
    }

    public function index()
    {
        return response()->json($this->batery->paginate(5));
    }

    public function show(Batery $id)
    {
        $data = ['data' => $id];
        return response()->json($data);
    }
}
