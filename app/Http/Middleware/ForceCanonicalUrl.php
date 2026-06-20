<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceCanonicalUrl
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! app()->environment('production')) {
            return $next($request);
        }

        $host = $request->getHost();

        if (str_starts_with($host, 'www.')) {
            $canonicalHost = substr($host, 4);

            return redirect()->to(
                'https://'.$canonicalHost.$request->getRequestUri(),
                301
            );
        }

        if (! $request->secure()) {
            return redirect()->secure($request->getRequestUri(), 301);
        }

        return $next($request);
    }
}
