<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function() {
    Route::apiResource('virtualcards', VirtualCardController::class);
    Route::apiResource('virtualcards/{name}/{identifier}', VirtualCardController::class);
});
