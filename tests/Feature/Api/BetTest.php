<?php

declare(strict_types=1);

namespace Feature\Api;

use App\Game\Models\Bet;
use App\Game\Models\Link;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class BetTest extends TestCase
{
    use DatabaseTransactions;

    public function testPostMakeBet()
    {
        $hash = $this->randomHash();

        $link = Link::factory(['hash' => $hash])->active()->create();

        $this->json('POST', '/api/v1/bet/make', [
            'hash' => $hash,
        ])
            ->assertStatus(201)
            ->assertJsonStructure([
                'data' => [
                    'linkId',
                    'diceResult',
                    'isWin',
                    'amount',
                    'createdAt',
                ],
            ])
            ->assertJson([
                'data' => [
                    'linkId' => $link->id,
                ],
            ]);

        $this->assertDatabaseHas('bets', [
            'link_id' => $link->id,
        ]);
    }

    public function testGetBetsHistory()
    {
        $hash = $this->randomHash();

        $link = Link::factory(['hash' => $hash])->active()->create();

        Bet::factory([
            'link_id' => $link->id,
        ])->count(3)->create();

        $this->json('GET', "/api/v1/bet/{$hash}/history")
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'linkId',
                        'diceResult',
                        'isWin',
                        'amount',
                        'createdAt',
                    ]
                ],
            ])
            ->assertJsonFragment([
                'linkId' => $link->id,
            ]);
    }

    protected function randomHash()
    {
        return hash('sha256', random_bytes(10));
    }
}
