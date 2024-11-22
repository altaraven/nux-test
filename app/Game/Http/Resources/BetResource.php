<?php

declare(strict_types=1);

namespace App\Game\Http\Resources;

use App\Game\Models\Bet;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Bet $resource
 */
class BetResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'linkId' => $this->resource->link_id,
            'diceResult' => $this->resource->dice_result,
            'isWin' => $this->resource->is_win,
            'amount' => $this->resource->amount,
            'createdAt' => $this->resource->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
