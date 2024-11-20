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

//            'symbol' => $this->resource->symbol,
//            'currencySymbol' => $currencySymbol,
//            'transport' => $transport,
//            'addressUrl' => url_address($this->resource->address, $this->resource->symbol, null, config('app.dev')),
//            'projectKey' => $this->resource->project->project_key,
//            'userId' => $this->resource->user_id,
//            'type' => $this->resource->type,
//            'createdAt' => $this->resource->created_at->timestamp,
        ];
    }
}
