<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class StoreVirtualCardRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'min:3', 'max:150'],
            'linkedin' => ['required'],
            'github' => ['required'],
            'identifier' => ['required'],
            'observation' => ['required']
        ];
    }
}
