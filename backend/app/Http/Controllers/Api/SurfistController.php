<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Surfist;
use Illuminate\Http\Request;

class SurfistController extends Controller
{
    private $surfist;

    public function __construct(Surfist $surfist)
    {
        $this -> surfist = $surfist;
    }

    public function index()
    {
        // ->paginate(15)

        return response()->json($this->surfist->paginate(15));
    }

    public function show(Surfist $id)
    {
        $data = ['data' => $id];
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $surfistData = $request -> all();
        $this->surfist->create($surfistData);

        return response()->json(['msg' => 'Surfista criado!'], 201);
    }

    public function update(Request $request, $id)
    {
        $surfistData = $request -> all();
        $surfist = $this->surfist->find($id);
        $surfist->update($surfistData);

        return response()->json(['msg' => 'Surfista atualizado!'], 201);
    }
}
