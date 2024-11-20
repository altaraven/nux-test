<?php

declare(strict_types=1);

namespace App\Game\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Link extends Model
{
    public function bets(): HasMany
    {
        return $this->hasMany(Bet::class);
    }

    public function scopeOfHash(Builder $query, string $hash): Builder
    {
        return $query->where('hash', $hash);
    }
}
