<?php

return [
    'paths' => ['api/*', 'business-forms'], // or just ['*'] for dev

    'allowed_methods' => ['*'],

    'allowed_origins' => ['http://localhost:3000'], // React frontend

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,
];
