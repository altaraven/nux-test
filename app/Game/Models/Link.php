<?php

declare(strict_types=1);

namespace App\Game\Models;

use Database\Factories\LinkFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Link extends Model
{
    use HasFactory;

    protected static function newFactory()
    {
        return LinkFactory::new();
    }

    protected function casts(): array
    {
        return [
            'expiration_date' => 'datetime:Y-m-d H:i:s',
        ];
    }

    public function bets(): HasMany
    {
        return $this->hasMany(Bet::class);
    }

    public function scopeOfHash(Builder $query, string $hash): Builder
    {
        return $query->where('hash', $hash);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function isExpired(): bool
    {
        return now()->gte($this->expiration_date);
    }
}
