<?php

declare(strict_types=1);

namespace App\Game\Strategies;

class GameResultDto
{
    public function __construct(
        public int $diceResult,
        public bool $isWin,
        public float $amount
    ) {
    }
}
