<?php

declare(strict_types=1);

namespace Api;

use App\Game\Models\Link;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use Tests\TestCase;

class LinkTest extends TestCase
{
    use DatabaseTransactions;

    private string $userName = 'Test User';
    private string $phoneNumber = '+380634998811';

    public function testPostCreateGameLink()
    {
        $this->json('POST', '/api/v1/link/create', [
            'userName' => $this->userName,
            'phoneNumber' => $this->phoneNumber,
        ])
            ->assertStatus(201)
            ->assertJsonStructure([
                'data' => [
                    'userName',
                    'phoneNumber',
                    'hash',
                    'link',
                    'expirationDate',
                ],
            ])
            ->assertJson([
                'data' => [
                    'userName' => $this->userName,
                    'phoneNumber' => $this->phoneNumber,
                ],
            ]);

        $this->assertDatabaseHas('links', [
            'user_name' => $this->userName,
            'phone_number' => $this->phoneNumber,
        ]);
    }

    public function testGetGameLink()
    {
        $hash = $this->randomHash();

        $link = Link::factory(['hash' => $hash])->active()->create();

        $this->json('GET', "/api/v1/link/{$hash}/view")
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    'userName',
                    'phoneNumber',
                    'hash',
                    'link',
                    'expirationDate',
                ],
            ])
            ->assertJsonFragment([
                'userName' => $link->user_name,
                'phoneNumber' => $link->phone_number,
                'hash' => $hash,
            ]);
    }

    protected function randomHash()
    {
        return hash('sha256', random_bytes(10));
    }
}
