<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

return Application::configure(basePath: dirname(__DIR__))
	->withRouting(
		web: __DIR__ . '/../routes/web.php',
		commands: __DIR__ . '/../routes/console.php',
		health: '/up',
	)
	->withMiddleware(function (Middleware $middleware) {
		$middleware->web(append: [
			\App\Http\Middleware\HandleInertiaRequests::class,
			\Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
		]);

		$middleware->alias([
			'role' => \Spatie\Permission\Middleware\RoleMiddleware::class,
			'permission' => \Spatie\Permission\Middleware\PermissionMiddleware::class,
			'role_or_permission' => \Spatie\Permission\Middleware\RoleOrPermissionMiddleware::class,
			'check_protected_role' => \App\Http\Middleware\CheckProtectedRole::class,
		]);

		//
	})
	->withExceptions(function (Exceptions $exceptions) {
		$exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
			$inertiaEnvs = ['local', 'testing'];

			// if (app()->environment($inertiaEnvs) && in_array($response->getStatusCode(), [500, 503, 404, 403])) {
			if (in_array($response->getStatusCode(), [500, 503, 404, 403])) {
				return Inertia::render('Error', ['status' => $response->getStatusCode()])
					->toResponse($request)
					->setStatusCode($response->getStatusCode());
			} elseif ($response->getStatusCode() === 419) {
				return back()->with([
					'flash' => [
						'message' => 'The page expired, please try again.',
						'type' => 'error',
					],
				]);
			}

			return $response;
		});
	})->create();
