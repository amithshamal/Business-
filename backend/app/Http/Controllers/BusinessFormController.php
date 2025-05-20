<?php

namespace App\Http\Controllers;

use App\Models\BusinessForm;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BusinessFormController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $businessForm = new BusinessForm();
        $businessForm->business_address = $request->input('business-address');
        $businessForm->business_type = $request->input('business-type');
        $businessForm->address_line_1 = $request->input('address-line-1');
        $businessForm->address_line_2 = $request->input('address-line-2');
        $businessForm->city = $request->input('city');
        $businessForm->zip = $request->input('zip');
        $businessForm->save();

        return response()->json(['message' => 'Business form data saved successfully'], 201)
            ->header('Access-Control-Allow-Origin', '*');
    }
}
