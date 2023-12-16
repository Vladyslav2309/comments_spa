<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="API Documentation",
 *      description="Description for your API",
 *      @OA\Contact(
 *          email="your-email@example.com"
 *      ),
 *      @OA\License(
 *          name="Your License",
 *          url="http://your-license-url.com"
 *      )
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
