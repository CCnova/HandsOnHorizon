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


    /*
                OBTEM O VENCEDOR DA BATERIA
    */
    public function getWinner(Request $request, $bateryId)
    {
        $bateryWaves = Batery::find($bateryId)->waves;
        $baterySurfists = array();

        foreach($bateryWaves as $wave)
        {
            $aux = explode(", ", $wave["participants"]);
            array_merge($baterySurfists, $aux);
        }

        $participantsTotalPoints = array();
        foreach($baterySurfists as $surf)
        {
            $partialScores = array_map("intval", explode(", ",$surf->points));
            $maxScoreIndex = $this->findBiggerMember($partialScores, -1);
            $secondMaxScoreIndex = $this->findBiggerMember($partialScores, $maxScoreIndex);

            array_push($participantsTotalPoints, $partialScores[$maxScoreIndex] + $partialScores[$secondMaxScoreIndex]);
        }

        $winner = $baterySurfists[$this->findBiggerMember($participantsTotalPoints, -1)];

        return response()->json($winner);
    }

    public function findBiggerMember($numArray, $filterIndex)
    {
        $max = 0;
        $maxIndex = -1;
        for($i = 0; $i < count($numArray); $i++)
        {
            if($numArray[$i] > $max && $i != $filterIndex)
            {
                $maxIndex = $i;
            }
        }

        return $maxIndex;
    }
}
