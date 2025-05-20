<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BusinessFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'business-address' => 'required|string',
            'business-type' => 'required|string',
            'address-line-1' => 'required|string',
            'address-line-2' => 'nullable|string',
            'city' => 'required|string',
            'zip' => 'required|string',
        ];
    }

     /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'business-address.required' => 'Business address is required.',
            'business-type.required' => 'Business type is required.',
            'address-line-1.required' => 'Address line 1 is required.',
            'city.required' => 'City is required.',
            'zip.required' => 'Zip code is required.',
        ];
    }
}