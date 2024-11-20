<?php

declare(strict_types=1);

namespace App\Game\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeactivateGameLinkRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'hash' => 'required|string|max:150|exists:links,hash',
        ];
    }

    public function getHash(): string
    {
        return (string)$this->input('hash');
    }
}
