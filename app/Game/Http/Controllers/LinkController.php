<?php

declare(strict_types=1);

namespace App\Game\Http\Controllers;

use App\Game\Http\Requests\CreateGameLinkRequest;
use App\Game\Http\Requests\DeactivateGameLinkRequest;
use App\Game\Http\Requests\ReGenerateGameLinkRequest;
use App\Game\Http\Resources\LinkResource;
use App\Game\Manager;
use App\Http\Controllers\Controller;

class LinkController extends Controller
{
    public function postCreateGameLink(Manager $manager, CreateGameLinkRequest $request): LinkResource
    {
        return new LinkResource(
            $manager->createGameLink($request->getUserName(), $request->getPhoneNumber())
        );
    }

    public function getGameLink(Manager $manager, string $hash): LinkResource
    {
        return new LinkResource(
            $manager->getGameLink($hash)
        );
    }

    public function postReGenerateGameLink(Manager $manager, ReGenerateGameLinkRequest $request): LinkResource
    {
        return new LinkResource(
            $manager->reGenerateGameLink($request->getHash())
        );
    }

    public function putDeactivateGameLink(Manager $manager, DeactivateGameLinkRequest $request): LinkResource
    {
        return new LinkResource(
            $manager->deactivateGameLink($request->getHash())
        );
    }
}
