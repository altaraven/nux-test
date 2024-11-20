<?php

declare(strict_types=1);

namespace App\Game;

use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Support\ServiceProvider;

class GameServiceProvider extends ServiceProvider implements DeferrableProvider
{
    public function register(): void
    {
        $this->app->singleton(Manager::class, fn() => new Manager(config('game')));
    }

    public function provides(): array
    {
        return [
            Manager::class,
        ];
    }
}
