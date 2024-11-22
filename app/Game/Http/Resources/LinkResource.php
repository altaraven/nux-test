<?php

declare(strict_types=1);

namespace App\Game\Http\Resources;

use App\Game\Models\Link;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property Link $resource
 */
class LinkResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'userName' => $this->resource->user_name,
            'phoneNumber' => $this->resource->phone_number,
            'hash' => $this->resource->hash,
            'link' => url("/game/{$this->resource->hash}"),
            'expirationDate' => $this->resource->expiration_date->format('Y-m-d H:i:s'),
        ];
    }
}
