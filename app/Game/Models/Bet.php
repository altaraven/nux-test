<?php

declare(strict_types=1);

namespace App\Game\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bet extends Model
{
    final public const UPDATED_AT = null;

    public function link(): BelongsTo
    {
        return $this->belongsTo(Link::class);
    }

//    public function scopeOfHash(Builder $query, string $hash): Builder
//    {
//        return $query->where('hash', $hash);
//    }
}