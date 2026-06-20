<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Portfolio of Wassim Jebali, full-stack developer building clean, impactful web applications with React, Laravel, and modern tools.">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <title inertia>Wassim Jebali | Full-Stack Developer Portfolio</title>
        @viteReactRefresh
        @vite('resources/js/app.tsx')
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
