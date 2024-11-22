<?php

declare(strict_types=1);

namespace App\Game\Models;

use Database\Factories\BetFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bet extends Model
{
    use HasFactory;

    protected static function newFactory()
    {
        return BetFactory::new();
    }

    final public const UPDATED_AT = null;

    public function link(): BelongsTo
    {
        return $this->belongsTo(Link::class);
    }
}
