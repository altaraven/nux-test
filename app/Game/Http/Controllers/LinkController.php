<?php

declare(strict_types=1);

namespace App\Game\Http\Controllers;

use App\Game\Http\Requests\GenerateLinkRequest;
use App\Game\Http\Resources\LinkResource;
use App\Game\Manager;
use App\Http\Controllers\Controller;

class LinkController extends Controller
{
    public function postGenerateGameLink(Manager $manager, GenerateLinkRequest $request): LinkResource
    {
        return new LinkResource(
            $manager->generateGameLink($request->getUserName(), $request->getPhoneNumber())
        );
    }

    public function getGameLink(Manager $manager, string $hash): LinkResource
    {
        return new LinkResource(
            $manager->getGameLink($hash)
        );
    }
}
