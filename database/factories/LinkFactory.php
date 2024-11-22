<?php

namespace Database\Factories;

use App\Game\Models\Link;
use Illuminate\Database\Eloquent\Factories\Factory;

class LinkFactory extends Factory
{
    protected $model = Link::class;

    public function definition(): array
    {
        return [
            'user_name' => $this->faker->name(),
            'phone_number' => $this->faker->phoneNumber(),
            'hash' => fn() => hash('sha256', random_bytes(100)),
            'expiration_date' => now()->addDays(7),
            'is_active' =>  $this->faker->boolean(),
        ];
    }

    public function active(): self
    {
        return $this->state(['is_active' => true]);
    }

    public function deactivated(): self
    {
        return $this->state(['is_active' => false]);
    }
}
