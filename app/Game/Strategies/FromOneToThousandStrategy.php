<?php

declare(strict_types=1);

namespace App\Game\Strategies;

class FromOneToThousandStrategy implements GameStrategy
{
    public function play(): GameResultDto
    {
        return new GameResultDto(1, false, 0.00);
    }
}
