<?php

declare(strict_types=1);

use App\Game\Http\Controllers\LinkController;
use Illuminate\Support\Facades\Route;

Route::prefix('/v1/link')
    ->group(function () {
//        Route::get('/coins-info', [AmlBotController::class, 'getCoinsInfo']);
        Route::post('/generate', [LinkController::class, 'postGenerateGameLink']);
    });
