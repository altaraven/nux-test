<?php

declare(strict_types=1);

namespace App\Game;

use App\Game\Models\Link;
use Illuminate\Support\Facades\Crypt;

readonly class Manager
{
    public function __construct(
        private array $config
    ) {
    }

    public function generateGameLink(string $userName, string $phoneNumber): Link
    {
        $model = new Link();
        $model->user_name = $userName;
        $model->phone_number = $phoneNumber;
        $model->hash = hash_hmac('sha512', $userName . $phoneNumber . time(), Crypt::getKey());
        $model->expiration_date = now()->add($this->config['link_available_period']);
        $model->save();

        return $model;
    }

    public function getGameLink(string $hash): Link
    {
        return Link::ofHash($hash)->firstOrFail();
    }

//    private function generateLinkHash(string $userName, string $phoneNumber): string
//    {
//        return hash_hmac('sha512', $userName . $phoneNumber . time(), Crypt::getKey());
//    }
}
