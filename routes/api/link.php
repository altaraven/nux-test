<?php

declare(strict_types=1);

use App\Game\Http\Controllers\LinkController;
use Illuminate\Support\Facades\Route;

Route::prefix('/v1/link')
    ->group(function () {
        Route::post('/generate', [LinkController::class, 'postGenerateGameLink']);
        Route::get('{hash}/view', [LinkController::class, 'getGameLink']);
    });
