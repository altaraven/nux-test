<?php

declare(strict_types=1);

namespace App\Game\Http\Controllers;

use App\Game\Http\Resources\BetResource;
use App\Game\Manager;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BetController extends Controller
{
    public function getHistory(Manager $manager, string $hash): AnonymousResourceCollection
    {
        return BetResource::collection(
            $manager->getBetsHistory($hash)
        );
    }
}
