<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\VirtualCard;
use Illuminate\Http\Request;
use App\Http\Requests\V1\StoreVirtualCardRequest;

class VirtualCardController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->route('name');
        $identifier = $request->route('identifier');

        if (!$name || !$identifier) {
            return response()->json([
                'error' => 'The parameters "name" and "identifier" are mandatory.'
            ], Response::HTTP_BAD_REQUEST);
        }

        $virtualCards = VirtualCard::where('identifier', $identifier)->get();
        return response()->json("{$virtualCards}", 200);
    }

    public function store(StoreVirtualCardRequest $request)
    {
        $name = $request->route('name');
        $identifier = $request->route('identifier');
        $linkedin = $request->route('linkedin');
        $github = $request->route('github');
        $observation = $request->route('observation');

        $virtualCards = VirtualCard::where('name', $name)
                                   ->where('identifier', $identifier)
                                   ->get();

        if($virtualCards)
            VirtualCard::where('identifier', $identifier)->delete();

        VirtualCard::create($request->validated());
        return response()->json("VirtualCard created");
    }
}
