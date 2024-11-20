<?php

declare(strict_types=1);

namespace App\Game;

use App\Game\Models\Bet;
use App\Game\Models\Link;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Crypt;

readonly class Manager
{
    public function __construct(
        private array $config
    ) {
    }

    public function createGameLink(string $userName, string $phoneNumber): Link
    {
        $model = new Link();
        $model->user_name = $userName;
        $model->phone_number = $phoneNumber;
        $model->hash = $this->generateLinkHash($userName, $phoneNumber);
        $model->expiration_date = now()->add($this->config['link_available_period']);
        $model->save();

        return $model;
    }

    public function reGenerateGameLink(string $hash): Link
    {
        $model = $this->getGameLink($hash);

        $model->hash = $this->generateLinkHash($model->user_name, $model->phone_number);
        $model->save();

        return $model;
    }

    public function deactivateGameLink(string $hash): Link
    {
        $model = $this->getGameLink($hash);

        $model->is_active = false;
        $model->save();

        return $model;
    }

    public function getGameLink(string $hash): Link
    {
        return Link::ofHash($hash)->firstOrFail();
    }

    private function generateLinkHash(string $userName, string $phoneNumber): string
    {
        return hash_hmac('sha512', $userName . $phoneNumber . time(), Crypt::getKey());
    }

    public function getBetsHistory(string $hash): Collection
    {
        $link = Link::ofHash($hash)->firstOrFail();

        return $link->bets()->take($this->config['bets_history_limit'])->latest()->get();
    }
}
