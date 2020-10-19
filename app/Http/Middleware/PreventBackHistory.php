<?php
/**
 * Created by PhpStorm.
 * User: TBS07
 * Date: 3/15/2018
 * Time: 2:51 PM
 */

namespace App\Http\Middleware;


use Closure;

class PreventBackHistory
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);
		$response->headers->set('Access-Control-Allow-Origin' , '*');
$response->headers->set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
$response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With, Application');

return $response;
       /*  return $response->header('Cache-Control','no-cache, no-store, max-age=0, must-revalidate')
            ->header('Pragma','no-cache')
            ->header('Expires','Sun, 02 Jan 1990 00:00:00 GMT'); */
    }
}