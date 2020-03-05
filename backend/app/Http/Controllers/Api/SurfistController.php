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

        return response()->json($this->surfist->paginate(15));
    }

    public function show(Surfist $id)
    {
        $data = ['data' => $id];
        return response()->json($data);
    }

    public function store(Request $request)
    {
        dd($request -> all());
    }
}
