<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">

	<!-- Favicon -->
	<link rel="icon" href="{{ asset('favicon.png') }}" type="image/x-icon">
	<link rel="shortcut icon" href="{{ asset('favicon.png') }}" type="image/x-icon">

	<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
	<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
	<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
	<link rel="manifest" href="{{ asset('site.webmanifest') }}">

	<!-- Open Graph meta tags -->
	<meta property="og:title" content="{{ config('app.name') }}">
	<meta property="og:description" content="{{ config('settings.general.og_description') }}">
	<meta property="og:image" content="{{ asset(config('settings.general.og_image')) }}">
	<meta property="og:url" content="{{ url(config('app.url')) }}">
	<meta property="og:type" content="website">

	<!-- Twitter Card meta tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="{{ config('app.name') }}">
	<meta name="twitter:description" content="{{ config('settings.general.og_description') }}">
	<meta name="twitter:image" content="{{ asset(config('settings.general.og_image')) }}">
	<meta name="twitter:site" content="{{ config('settings.general.x_user') }}">

	<!-- Chrome Android -->
	<link rel="icon" sizes="192x192" href="{{ asset('android-chrome-192x192.png') }}">
	<link rel="icon" sizes="512x512" href="{{ asset('android-chrome-512x512.png') }}">

	<!-- Windows 10 Tile -->
	<meta name="msapplication-TileColor" content="{{ config('settings.general.msapplication_color') }}">
	<meta name="msapplication-TileImage" content="{{ asset('mstile-150x150.png') }}">
	<meta name="theme-color" content="{{ config('settings.general.msapplication_color') }}">

	<!-- Scripts -->
	@routes
	@viteReactRefresh
	@vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
	@inertiaHead
</head>

<body class="bg-background font-sans antialiased">
	@inertia
</body>

</html>