<?php

declare(strict_types=1);

namespace App\Game\Strategies;

use Brick\Math\BigDecimal;
use Random\Randomizer;

class FromOneToThousandStrategy implements GameStrategy
{
    private const DICE_MIN = 1;
    private const DICE_MAX = 1000;
    private const AMOUNT_PRECISION = 2;

    public function play(): GameResultDto
    {
        $amount = 0;
        $diceResult = (new Randomizer())->getInt(self::DICE_MIN, self::DICE_MAX);
        $isWin = !($diceResult % 2);
        if ($isWin) {
            $percentage = match (true) {
                $diceResult > 900 => 70,
                $diceResult > 600 => 50,
                $diceResult > 300 => 30,
                $diceResult <= 300 => 10,
            };

            $amount = BigDecimal::of($diceResult)
                ->multipliedBy($percentage)
                ->dividedBy(100, self::AMOUNT_PRECISION)
                ->toFloat();
        }

        return new GameResultDto($diceResult, $isWin, $amount);
    }
}
