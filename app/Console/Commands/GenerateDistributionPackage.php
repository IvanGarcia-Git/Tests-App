<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class GenerateDistributionPackage extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'app:dist';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'This command is used for creating a distribution package';

	/**
	 * Execute the console command.
	 */
	public function handle()
	{
		$filesToCopy = [
			'./app/Http/Controllers/Admin' => [
				'NotificationController.php',
				'PermissionController.php',
				'RoleController.php',
				'SettingsController.php',
				'UserAdminController.php',
				'UserController.php',
			],
			'./app/Http/Controllers/Auth' => [
				'AuthenticatedSessionController.php',
				'ConfirmablePasswordController.php',
				'EmailVerificationNotificationController.php',
				'EmailVerificationPromptController.php',
				'NewPasswordController.php',
				'PasswordController.php',
				'RegisteredUserController.php',
				'VerifyEmailController.php',
			],
			'./app/Http/Controllers' => [
				'Controller.php',
				'MediaManagerController.php',
				'ProfileController.php',
			],
			'./app/Http/Middleware' => [
				'CheckProtectedRole.php',
				'CheckRoleAccess.php',
				'HandleInertiaRequests.php',
			],
			'./app/Http/Requests/Admin' => [
				'CreateUserRequest.php',
				'UpdateUserRequest.php',
			],
			'./app/Http/Requests/Auth' => ['LoginRequest.php'],
			'./app/Http/Requests' => ['ProfileUpdateRequest.php'],
			'./app/Listeners' => ['NotifyAdminOfNewUserRegistration.php'],
			'./app/Mail' => ['SendUserDetails.php'],
			'./app/Models' => [
				'InAppNotification.php',
				'MediaManager.php',
				'Session.php',
				'User.php',
			],
			'app/Notifications' => [
				'InAppNotification.php',
				'NewUserRegisteredNotification.php',
			],
			'app/Providers' => [
				'AdminNavbarProvider.php',
				'AppServiceProvider.php'
			],
			'database/factories' => [
				'InAppNotificationFactory.php',
				'UserFactory.php'
			],
			'database/migrations' => [
				'0001_01_01_000000_create_users_table.php',
				'0001_01_01_000001_create_cache_table.php',
				'0001_01_01_000002_create_jobs_table.php',
				'2024_07_30_193502_create_permission_tables.php',
				'2024_09_01_064136_create_media_table.php',
				'2024_09_01_113938_create_media_manager_table.php',
				'2024_09_30_151703_create_notifications_table.php',
				'2024_10_01_233611_create_notification_templates_table.php'
			],
			'database/seeders' => [
				'DatabaseSeeder.php',
				'MediaManagerSeeder.php',
				'RoleSeeder.php',
			],
			'database' => ['.gitignore'],
			'public' => [
				'site.webmanifest',
				'og-image.jpg',
				'index.php',
				'robots.txt',
				'android-chrome-192x192.png',
				'android-chrome-512x512.png',
				'apple-touch-icon.png',
				'favicon-16x16.png',
				'favicon-32x32.png',
				'favicon.png',
				'mstile-150x150.png',
				'.htaccess'
			],
			'public/img' => ['brand.svg'],
			'resources/css' => ['app.css'],
			'resources/js' => [
				'app.tsx',
				'bootstrap.ts',
				'SessionAware.tsx',
				'ssr.tsx'
			],
			'resources/js/assets/img' => [
				'user-blank.jpg',
				'blank-462x265.webp',
				'pexels-pramodtiwari-14127564.jpg'
			],
			'resources/js/pages' => [
				'Dashboard.tsx',
				'Error.tsx',
				'Welcome.tsx'
			],
			'resources/views' => ['app.blade.php'],
			'resources/views/email' => ['user-details.blade.php'],
			'routes' => [
				'admin.php',
				'auth.php',
				'web.php',
				'console.php'
			],
			'storage/app' => ['.gitignore'],
			'storage/app/public' => ['.gitignore'],
			'storage/logs' => ['.gitignore'],
		];

		$destination = './dist/' . date('Y-m-d_H-i-s');

		if (!file_exists($destination)) {
			mkdir($destination, 0755, true);
		}


		foreach ($filesToCopy as $path => $dir) {
			$this->info("Copying all files in $path");

			foreach ($dir as $file) {
				$sourceFile = "$path/$file";
				$destinationFile = "$destination/$path/$file";

				if (!is_dir("$destination/$path")) {
					mkdir("$destination/$path", 0755, true);
				}

				if (file_exists($sourceFile)) {
					copy($sourceFile, $destinationFile);
					// $this->info("Copied $file");
				} else {
					$this->error("file does not exist in the source directory");
				}
			}
		}


		// Directories
		$directories = [
			'.vscode',
			'bootstrap',
			'config',
			'storage/framework',
			'tests',
			'resources/js/components',
			'resources/js/config',
			'resources/js/hooks',
			'resources/js/i18n',
			'resources/js/layouts',
			'resources/js/store',
			'resources/js/types',
			'resources/js/pages/admin',
			'resources/js/pages/auth',
			'resources/js/pages/profile',
		];

		foreach ($directories as $sourceDir) {
			$destDir = "$destination/$sourceDir";
			$this->copyDirectory($sourceDir, $destDir);
		}

		$files = [
			'.editorconfig',
			'.env.testing',
			'.gitattributes',
			'.gitignore',
			'.htaccess',
			'.npmrc',
			'.phpunit.result.cache',
			'.prettierrc',
			'composer.json',
			'composer.lock',
			'postcss.config.js',
			'tailwind.config.js',
			'vite.config.js',
			'package.json',
			'package-lock.json',
			'tsconfig.json',
			'README.md',
			'types.d.ts',
			'artisan',
			'phpunit.xml',
			'docker-compose.yml',
		];

		foreach ($files as $file) {
			copy($file, "$destination/$file");
		}

		$this->info("Done");
	}



	private function copyDirectory($source, $destination)
	{
		// Asegúrate de que el directorio de origen existe
		if (!is_dir($source)) {
			return false;
		}

		// Si el directorio de destino no existe, créalo
		if (!is_dir($destination)) {
			mkdir($destination, 0755, true);
		}

		// Abre el directorio de origen
		$dir = opendir($source);

		// Itera sobre los archivos y subdirectorios del directorio de origen
		while (($file = readdir($dir)) !== false) {
			if ($file !== '.' && $file !== '..') {
				$srcPath = $source . DIRECTORY_SEPARATOR . $file;
				$destPath = $destination . DIRECTORY_SEPARATOR . $file;

				// Si es un directorio, llamamos recursivamente a la función
				if (is_dir($srcPath)) {
					$this->copyDirectory($srcPath, $destPath);
				} else {
					// Si es un archivo, lo copiamos
					copy($srcPath, $destPath);
				}
			}
		}

		// Cierra el directorio de origen
		closedir($dir);

		return true;
	}
}
