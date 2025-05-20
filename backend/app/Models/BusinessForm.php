<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BusinessForm extends Model
{
    use HasFactory;

    protected $fillable = [
        'business_address',
        'business_type',
        'address_line_1',
        'address_line_2',
        'city',
        'zip',
    ];
}
