<?php

declare(strict_types=1);

namespace App\Game\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateGameLinkRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'userName' => 'required|string|max:100',
            'phoneNumber' => 'required|phone:UA|unique:links,phone_number',
        ];
    }

    public function getUserName(): string
    {
        return (string)$this->input('userName');
    }

    public function getPhoneNumber(): string
    {
        return (string)$this->input('phoneNumber');
    }
}
