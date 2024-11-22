<?php

declare(strict_types=1);

namespace App\Game\Strategies;

interface GameStrategy
{
    public function play(): GameResultDto;
}
