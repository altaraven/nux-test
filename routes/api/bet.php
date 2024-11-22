<?php

declare(strict_types=1);

use App\Game\Http\Controllers\BetController;
use Illuminate\Support\Facades\Route;

Route::prefix('/v1/bet')
    ->group(function () {
        Route::get('{hash}/history', [BetController::class, 'getHistory']);
        Route::post('/make', [BetController::class, 'postMakeBet']);
    });
