<?php

declare(strict_types=1);

use App\Game\Http\Controllers\LinkController;
use Illuminate\Support\Facades\Route;

Route::prefix('/v1/link')
    ->group(function () {
        Route::post('/create', [LinkController::class, 'postCreateGameLink']);
        Route::post('/re-generate', [LinkController::class, 'postReGenerateGameLink']);
        Route::put('/deactivate', [LinkController::class, 'putDeactivateGameLink']);
        Route::get('{hash}/view', [LinkController::class, 'getGameLink']);
    });
