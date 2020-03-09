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
        // ->paginate(5)
        return response()->json($this->batery);
    }

    public function show(Batery $id)
    {
        // $data = ['data' => $id];
        return response()->json($id);
    }

    public function store(Request $request)
    {
        $bateryData = $request -> all();

        $this->batery->create($bateryData);

        return response()->json(['msg' => 'Bateria criada!'], 201);
    }

    public function update(Request $request, $id)
    {
        $bateryData = $request -> all();

        $batery = $this->batery->find($id);
        $batery->update($bateryData);

        return response()->json($batery, 201);
    }
}
