<?php

namespace Database\Factories;

use App\Game\Models\Bet;
use Illuminate\Database\Eloquent\Factories\Factory;

class BetFactory extends Factory
{
    protected $model = Bet::class;

    public function definition(): array
    {
        return [
            'dice_result' => $this->faker->numberBetween(1, 1000),
            'is_win' => $this->faker->boolean(),
            'amount' => $this->faker->randomFloat(2, 1.00, 1000.00),
        ];
    }
}
