<?php

namespace Database\Seeders\demo;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\demo\Product;

class ProductsSeeder extends Seeder
{


	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		$products = [
			[
				'id' => 1,
				'name' => 'Alpha',
				'description' => 'A high-quality product.',
				'price' => 65.24,
				'category' => 'Electronics',
				'sku' => 'SKU-0001',
				'stock' => 52
			],
			[
				'id' => 2,
				'name' => 'Beta',
				'description' => 'A top-notch item.',
				'price' => 23.89,
				'category' => 'Books',
				'sku' => 'SKU-0002',
				'stock' => 30
			],
			[
				'id' => 3,
				'name' => 'Gamma',
				'description' => 'An exceptional product.',
				'price' => 45.67,
				'category' => 'Clothing',
				'sku' => 'SKU-0003',
				'stock' => 12
			],
			[
				'id' => 4,
				'name' => 'Delta',
				'description' => 'A premium quality item.',
				'price' => 78.34,
				'category' => 'Furniture',
				'sku' => 'SKU-0004',
				'stock' => 5
			],
			[
				'id' => 5,
				'name' => 'Epsilon',
				'description' => 'A superior product.',
				'price' => 29.99,
				'category' => 'Electronics',
				'sku' => 'SKU-0005',
				'stock' => 45
			],
			[
				'id' => 6,
				'name' => 'Zeta',
				'description' => 'A highly recommended item.',
				'price' => 56.78,
				'category' => 'Books',
				'sku' => 'SKU-0006',
				'stock' => 65
			],
			[
				'id' => 7,
				'name' => 'Eta',
				'description' => 'A fantastic product.',
				'price' => 34.12,
				'category' => 'Clothing',
				'sku' => 'SKU-0007',
				'stock' => 90
			],
			[
				'id' => 8,
				'name' => 'Theta',
				'description' => 'A highly useful item.',
				'price' => 87.56,
				'category' => 'Furniture',
				'sku' => 'SKU-0008',
				'stock' => 3
			],
			[
				'id' => 9,
				'name' => 'Iota',
				'description' => 'A must-have product.',
				'price' => 49.23,
				'category' => 'Electronics',
				'sku' => 'SKU-0009',
				'stock' => 22
			],
			[
				'id' => 10,
				'name' => 'Kappa',
				'description' => 'An excellent item.',
				'price' => 15.67,
				'category' => 'Books',
				'sku' => 'SKU-0010',
				'stock' => 34
			],
			[
				'id' => 11,
				'name' => 'Lambda',
				'description' => 'A reliable and durable product.',
				'price' => 32.50,
				'category' => 'Electronics',
				'sku' => 'SKU-0121',
				'stock' => 40
			],
			[
				'id' => 12,
				'name' => 'Mu',
				'description' => 'A stylish and modern item.',
				'price' => 58.75,
				'category' => 'Clothing',
				'sku' => 'SKU-0122',
				'stock' => 20
			],
			[
				'id' => 13,
				'name' => 'Nu',
				'description' => 'A top-selling product.',
				'price' => 71.99,
				'category' => 'Furniture',
				'sku' => 'SKU-0123',
				'stock' => 7
			],
			[
				'id' => 14,
				'name' => 'Xi',
				'description' => 'An innovative and unique product.',
				'price' => 44.50,
				'category' => 'Books',
				'sku' => 'SKU-0124',
				'stock' => 15
			],
			[
				'id' => 15,
				'name' => 'Omicron',
				'description' => 'A must-have item for every household.',
				'price' => 19.95,
				'category' => 'Electronics',
				'sku' => 'SKU-0125',
				'stock' => 50
			],
			[
				'id' => 16,
				'name' => 'Pi',
				'description' => 'A high-performance product.',
				'price' => 89.99,
				'category' => 'Clothing',
				'sku' => 'SKU-0126',
				'stock' => 35
			],
			[
				'id' => 17,
				'name' => 'Rho',
				'description' => 'A well-crafted and sturdy item.',
				'price' => 39.75,
				'category' => 'Furniture',
				'sku' => 'SKU-0127',
				'stock' => 12
			],
			[
				'id' => 18,
				'name' => 'Sigma',
				'description' => 'An affordable yet high-quality product.',
				'price' => 27.49,
				'category' => 'Books',
				'sku' => 'SKU-0128',
				'stock' => 80
			],
			[
				'id' => 19,
				'name' => 'Tau',
				'description' => 'A versatile and practical item.',
				'price' => 54.99,
				'category' => 'Electronics',
				'sku' => 'SKU-0129',
				'stock' => 25
			],
			[
				'id' => 20,
				'name' => 'Upsilon',
				'description' => 'A well-designed product for everyday use.',
				'price' => 48.00,
				'category' => 'Clothing',
				'sku' => 'SKU-0130',
				'stock' => 18
			],
			[
				'id' => 21,
				'name' => 'Aegis',
				'description' => 'A reliable product for everyday use.',
				'price' => 12.50,
				'category' => 'Electronics',
				'sku' => 'SKU-0021',
				'stock' => 40
			],
			[
				'id' => 22,
				'name' => 'Bastion',
				'description' => 'Durable and efficient item.',
				'price' => 45.00,
				'category' => 'Books',
				'sku' => 'SKU-0022',
				'stock' => 18
			],
			[
				'id' => 23,
				'name' => 'Centurion',
				'description' => 'Top-of-the-line product with advanced features.',
				'price' => 89.99,
				'category' => 'Clothing',
				'sku' => 'SKU-0023',
				'stock' => 12
			],
			[
				'id' => 24,
				'name' => 'Dominion',
				'description' => 'High-quality item for professionals.',
				'price' => 57.45,
				'category' => 'Furniture',
				'sku' => 'SKU-0024',
				'stock' => 22
			],
			[
				'id' => 25,
				'name' => 'Elysium',
				'description' => 'Elegant and versatile product.',
				'price' => 32.75,
				'category' => 'Electronics',
				'sku' => 'SKU-0025',
				'stock' => 38
			],
			[
				'id' => 26,
				'name' => 'Forte',
				'description' => 'Robust and reliable item.',
				'price' => 72.10,
				'category' => 'Books',
				'sku' => 'SKU-0026',
				'stock' => 27
			],
			[
				'id' => 27,
				'name' => 'Giga',
				'description' => 'State-of-the-art product for modern needs.',
				'price' => 99.99,
				'category' => 'Clothing',
				'sku' => 'SKU-0027',
				'stock' => 9
			],
			[
				'id' => 28,
				'name' => 'Helios',
				'description' => 'Durable and stylish item.',
				'price' => 64.20,
				'category' => 'Furniture',
				'sku' => 'SKU-0028',
				'stock' => 18
			],
			[
				'id' => 29,
				'name' => 'Ignis',
				'description' => 'A high-performance product for diverse applications.',
				'price' => 28.99,
				'category' => 'Electronics',
				'sku' => 'SKU-0029',
				'stock' => 50
			],
			[
				'id' => 30,
				'name' => 'Juno',
				'description' => 'Efficient and user-friendly item.',
				'price' => 45.85,
				'category' => 'Books',
				'sku' => 'SKU-0030',
				'stock' => 33
			],
			[
				'id' => 31,
				'name' => 'Kronos',
				'description' => 'An advanced model with innovative features.',
				'price' => 82.40,
				'category' => 'Clothing',
				'sku' => 'SKU-0031',
				'stock' => 15
			],
			[
				'id' => 32,
				'name' => 'Lynx',
				'description' => 'Sleek and modern product.',
				'price' => 53.99,
				'category' => 'Furniture',
				'sku' => 'SKU-0032',
				'stock' => 20
			],
			[
				'id' => 33,
				'name' => 'Midas',
				'description' => 'Top-quality item with advanced features.',
				'price' => 41.00,
				'category' => 'Electronics',
				'sku' => 'SKU-0033',
				'stock' => 36
			],
			[
				'id' => 34,
				'name' => 'Nexus',
				'description' => 'Reliable and durable product.',
				'price' => 66.70,
				'category' => 'Books',
				'sku' => 'SKU-0034',
				'stock' => 25
			],
			[
				'id' => 35,
				'name' => 'Orion',
				'description' => 'A premium choice for all needs.',
				'price' => 94.90,
				'category' => 'Clothing',
				'sku' => 'SKU-0035',
				'stock' => 10
			],
			[
				'id' => 36,
				'name' => 'Pioneer',
				'description' => 'Versatile and reliable item.',
				'price' => 49.99,
				'category' => 'Furniture',
				'sku' => 'SKU-0036',
				'stock' => 23
			],
			[
				'id' => 37,
				'name' => 'Quest',
				'description' => 'High-quality product for demanding users.',
				'price' => 84.55,
				'category' => 'Electronics',
				'sku' => 'SKU-0037',
				'stock' => 29
			],
			[
				'id' => 38,
				'name' => 'Ranger',
				'description' => 'An innovative and durable item.',
				'price' => 38.00,
				'category' => 'Books',
				'sku' => 'SKU-0038',
				'stock' => 42
			],
			[
				'id' => 39,
				'name' => 'Stellar',
				'description' => 'A premium and efficient product.',
				'price' => 71.20,
				'category' => 'Clothing',
				'sku' => 'SKU-0039',
				'stock' => 20
			],
			[
				'id' => 40,
				'name' => 'Titan',
				'description' => 'Top-notch item for high demands.',
				'price' => 95.85,
				'category' => 'Furniture',
				'sku' => 'SKU-0040',
				'stock' => 12
			],
			[
				'id' => 41,
				'name' => 'Uranus',
				'description' => 'A robust and reliable product for everyday use.',
				'price' => 28.75,
				'category' => 'Electronics',
				'sku' => 'SKU-0041',
				'stock' => 34
			],
			[
				'id' => 42,
				'name' => 'Vortex',
				'description' => 'Stylish and high-performance item.',
				'price' => 55.00,
				'category' => 'Books',
				'sku' => 'SKU-0042',
				'stock' => 15
			],
			[
				'id' => 43,
				'name' => 'Zephyr',
				'description' => 'Modern and durable product with advanced features.',
				'price' => 92.40,
				'category' => 'Clothing',
				'sku' => 'SKU-0043',
				'stock' => 18
			],
			[
				'id' => 44,
				'name' => 'Astra',
				'description' => 'Elegant item for discerning users.',
				'price' => 39.99,
				'category' => 'Furniture',
				'sku' => 'SKU-0044',
				'stock' => 26
			],
			[
				'id' => 45,
				'name' => 'Blaze',
				'description' => 'Reliable and versatile product.',
				'price' => 67.50,
				'category' => 'Electronics',
				'sku' => 'SKU-0045',
				'stock' => 21
			],
			[
				'id' => 46,
				'name' => 'Cobalt',
				'description' => 'High-quality item with modern features.',
				'price' => 84.95,
				'category' => 'Books',
				'sku' => 'SKU-0046',
				'stock' => 20
			],
			[
				'id' => 47,
				'name' => 'Dynamo',
				'description' => 'A top-performing and stylish product.',
				'price' => 59.99,
				'category' => 'Clothing',
				'sku' => 'SKU-0047',
				'stock' => 30
			],
			[
				'id' => 48,
				'name' => 'Echo',
				'description' => 'Elegant and functional furniture item.',
				'price' => 73.60,
				'category' => 'Furniture',
				'sku' => 'SKU-0048',
				'stock' => 12
			],
			[
				'id' => 49,
				'name' => 'Fusion',
				'description' => 'Versatile product with high durability.',
				'price' => 47.50,
				'category' => 'Electronics',
				'sku' => 'SKU-0049',
				'stock' => 40
			],
			[
				'id' => 50,
				'name' => 'Glacier',
				'description' => 'High-performance and stylish item.',
				'price' => 34.99,
				'category' => 'Books',
				'sku' => 'SKU-0050',
				'stock' => 28
			],
			[
				'id' => 51,
				'name' => 'Horizon',
				'description' => 'Durable and efficient product for various needs.',
				'price' => 76.80,
				'category' => 'Clothing',
				'sku' => 'SKU-0051',
				'stock' => 15
			],
			[
				'id' => 52,
				'name' => 'Ignition',
				'description' => 'Premium product with advanced features.',
				'price' => 63.25,
				'category' => 'Furniture',
				'sku' => 'SKU-0052',
				'stock' => 17
			],
			[
				'id' => 53,
				'name' => 'Jade',
				'description' => 'Reliable and modern product.',
				'price' => 29.75,
				'category' => 'Electronics',
				'sku' => 'SKU-0053',
				'stock' => 50
			],
			[
				'id' => 54,
				'name' => 'Krypton',
				'description' => 'High-quality and functional item.',
				'price' => 48.00,
				'category' => 'Books',
				'sku' => 'SKU-0054',
				'stock' => 22
			],
			[
				'id' => 55,
				'name' => 'Lunar',
				'description' => 'Advanced and durable product.',
				'price' => 92.99,
				'category' => 'Clothing',
				'sku' => 'SKU-0055',
				'stock' => 11
			],
			[
				'id' => 56,
				'name' => 'Meteor',
				'description' => 'Stylish and practical furniture item.',
				'price' => 61.30,
				'category' => 'Furniture',
				'sku' => 'SKU-0056',
				'stock' => 20
			],
			[
				'id' => 57,
				'name' => 'Nebula',
				'description' => 'Versatile product for modern users.',
				'price' => 39.50,
				'category' => 'Electronics',
				'sku' => 'SKU-0057',
				'stock' => 45
			],
			[
				'id' => 58,
				'name' => 'Orchid',
				'description' => 'High-performance and elegant item.',
				'price' => 26.90,
				'category' => 'Books',
				'sku' => 'SKU-0058',
				'stock' => 33
			],
			[
				'id' => 59,
				'name' => 'Pinnacle',
				'description' => 'Top-quality product with advanced features.',
				'price' => 89.75,
				'category' => 'Clothing',
				'sku' => 'SKU-0059',
				'stock' => 17
			],
			[
				'id' => 60,
				'name' => 'Quasar',
				'description' => 'Durable and efficient furniture item.',
				'price' => 53.99,
				'category' => 'Furniture',
				'sku' => 'SKU-0060',
				'stock' => 23
			],
			[
				'id' => 61,
				'name' => 'Radiant',
				'description' => 'Reliable and versatile product for diverse needs.',
				'price' => 45.40,
				'category' => 'Electronics',
				'sku' => 'SKU-0061',
				'stock' => 36
			],
			[
				'id' => 62,
				'name' => 'Sapphire',
				'description' => 'A premium and modern item.',
				'price' => 37.75,
				'category' => 'Books',
				'sku' => 'SKU-0062',
				'stock' => 20
			],
			[
				'id' => 63,
				'name' => 'Tornado',
				'description' => 'High-quality clothing product with innovative features.',
				'price' => 70.85,
				'category' => 'Clothing',
				'sku' => 'SKU-0063',
				'stock' => 12
			],
			[
				'id' => 64,
				'name' => 'Ultraviolet',
				'description' => 'Durable and functional furniture item.',
				'price' => 88.60,
				'category' => 'Furniture',
				'sku' => 'SKU-0064',
				'stock' => 10
			],
			[
				'id' => 65,
				'name' => 'Vertex',
				'description' => 'Reliable and versatile product for various applications.',
				'price' => 61.45,
				'category' => 'Electronics',
				'sku' => 'SKU-0065',
				'stock' => 29
			],
			[
				'id' => 66,
				'name' => 'Whisper',
				'description' => 'Elegant and efficient item.',
				'price' => 48.20,
				'category' => 'Books',
				'sku' => 'SKU-0066',
				'stock' => 27
			],
			[
				'id' => 67,
				'name' => 'Xenon',
				'description' => 'High-performance clothing product.',
				'price' => 66.90,
				'category' => 'Clothing',
				'sku' => 'SKU-0067',
				'stock' => 19
			],
			[
				'id' => 68,
				'name' => 'Ypsilon',
				'description' => 'Premium and stylish furniture item.',
				'price' => 81.00,
				'category' => 'Furniture',
				'sku' => 'SKU-0068',
				'stock' => 16
			],
			[
				'id' => 69,
				'name' => 'Aurora',
				'description' => 'A sleek and efficient item.',
				'price' => 15.50,
				'category' => 'Electronics',
				'sku' => 'SKU-0069',
				'stock' => 60
			],
			[
				'id' => 70,
				'name' => 'Blaze',
				'description' => 'A robust and versatile product.',
				'price' => 53.20,
				'category' => 'Books',
				'sku' => 'SKU-0070',
				'stock' => 30
			],
			[
				'id' => 71,
				'name' => 'Cobalt',
				'description' => 'High-quality and durable item.',
				'price' => 72.75,
				'category' => 'Clothing',
				'sku' => 'SKU-0071',
				'stock' => 25
			],
			[
				'id' => 72,
				'name' => 'Dynamo',
				'description' => 'A reliable product for everyday use.',
				'price' => 48.40,
				'category' => 'Furniture',
				'sku' => 'SKU-0072',
				'stock' => 15
			],
			[
				'id' => 73,
				'name' => 'Echo',
				'description' => 'Elegant and stylish product.',
				'price' => 39.99,
				'category' => 'Electronics',
				'sku' => 'SKU-0073',
				'stock' => 45
			],
			[
				'id' => 74,
				'name' => 'Frost',
				'description' => 'A versatile and practical item.',
				'price' => 57.90,
				'category' => 'Books',
				'sku' => 'SKU-0074',
				'stock' => 22
			],
			[
				'id' => 75,
				'name' => 'Glacier',
				'description' => 'An advanced and stylish product.',
				'price' => 81.60,
				'category' => 'Clothing',
				'sku' => 'SKU-0075',
				'stock' => 18
			],
			[
				'id' => 76,
				'name' => 'Horizon',
				'description' => 'A durable and high-performance item.',
				'price' => 64.50,
				'category' => 'Furniture',
				'sku' => 'SKU-0076',
				'stock' => 20
			],
			[
				'id' => 77,
				'name' => 'Inferno',
				'description' => 'A top-notch product for demanding users.',
				'price' => 29.99,
				'category' => 'Electronics',
				'sku' => 'SKU-0077',
				'stock' => 33
			],
			[
				'id' => 78,
				'name' => 'Jupiter',
				'description' => 'An efficient and reliable item.',
				'price' => 50.75,
				'category' => 'Books',
				'sku' => 'SKU-0078',
				'stock' => 28
			],
			[
				'id' => 79,
				'name' => 'Krypton',
				'description' => 'A high-quality product for modern needs.',
				'price' => 89.95,
				'category' => 'Clothing',
				'sku' => 'SKU-0079',
				'stock' => 13
			],
			[
				'id' => 80,
				'name' => 'Lunar',
				'description' => 'Stylish and functional item.',
				'price' => 38.20,
				'category' => 'Furniture',
				'sku' => 'SKU-0080',
				'stock' => 21
			],
			[
				'id' => 81,
				'name' => 'Matrix',
				'description' => 'A premium choice for high demands.',
				'price' => 75.60,
				'category' => 'Electronics',
				'sku' => 'SKU-0081',
				'stock' => 37
			],
			[
				'id' => 82,
				'name' => 'Nebula',
				'description' => 'Durable and versatile product.',
				'price' => 46.99,
				'category' => 'Books',
				'sku' => 'SKU-0082',
				'stock' => 30
			],
			[
				'id' => 83,
				'name' => 'Omega',
				'description' => 'A well-crafted and stylish item.',
				'price' => 92.45,
				'category' => 'Clothing',
				'sku' => 'SKU-0083',
				'stock' => 14
			],
			[
				'id' => 84,
				'name' => 'Phoenix',
				'description' => 'A reliable and efficient product.',
				'price' => 62.90,
				'category' => 'Furniture',
				'sku' => 'SKU-0084',
				'stock' => 16
			],
			[
				'id' => 85,
				'name' => 'Quasar',
				'description' => 'An advanced model with new features.',
				'price' => 53.25,
				'category' => 'Electronics',
				'sku' => 'SKU-0085',
				'stock' => 48
			],
			[
				'id' => 86,
				'name' => 'Ridge',
				'description' => 'A premium product with modern design.',
				'price' => 41.00,
				'category' => 'Books',
				'sku' => 'SKU-0086',
				'stock' => 32
			],
			[
				'id' => 87,
				'name' => 'Solstice',
				'description' => 'High-quality item with excellent features.',
				'price' => 84.50,
				'category' => 'Clothing',
				'sku' => 'SKU-0087',
				'stock' => 17
			],
			[
				'id' => 88,
				'name' => 'Titanium',
				'description' => 'A versatile and durable product.',
				'price' => 99.99,
				'category' => 'Furniture',
				'sku' => 'SKU-0088',
				'stock' => 11
			],
			[
				'id' => 89,
				'name' => 'Ultrion',
				'description' => 'An efficient and top-quality item.',
				'price' => 56.75,
				'category' => 'Electronics',
				'sku' => 'SKU-0089',
				'stock' => 25
			],
			[
				'id' => 90,
				'name' => 'Vortex',
				'description' => 'A modern and high-performance product.',
				'price' => 47.20,
				'category' => 'Books',
				'sku' => 'SKU-0090',
				'stock' => 29
			],
			[
				'id' => 91,
				'name' => 'Whisper',
				'description' => 'A stylish and efficient item.',
				'price' => 74.00,
				'category' => 'Clothing',
				'sku' => 'SKU-0091',
				'stock' => 12
			],
			[
				'id' => 92,
				'name' => 'Xenon',
				'description' => 'A premium choice with advanced features.',
				'price' => 62.30,
				'category' => 'Furniture',
				'sku' => 'SKU-0092',
				'stock' => 20
			],
			[
				'id' => 93,
				'name' => 'Ypsilon',
				'description' => 'A reliable and durable product.',
				'price' => 37.50,
				'category' => 'Electronics',
				'sku' => 'SKU-0093',
				'stock' => 34
			],
			[
				'id' => 94,
				'name' => 'Zenith',
				'description' => 'A high-quality and modern item.',
				'price' => 49.90,
				'category' => 'Books',
				'sku' => 'SKU-0094',
				'stock' => 22
			],
			[
				'id' => 95,
				'name' => 'Astra',
				'description' => 'A versatile product for various needs.',
				'price' => 55.75,
				'category' => 'Clothing',
				'sku' => 'SKU-0095',
				'stock' => 15
			],
			[
				'id' => 96,
				'name' => 'Nova',
				'description' => 'An innovative and stylish item.',
				'price' => 68.99,
				'category' => 'Furniture',
				'sku' => 'SKU-0096',
				'stock' => 18
			],
			[
				'id' => 97,
				'name' => 'Omega II',
				'description' => 'An updated version of the classic Omega product.',
				'price' => 78.90,
				'category' => 'Electronics',
				'sku' => 'SKU-0097',
				'stock' => 26
			],
			[
				'id' => 98,
				'name' => 'Pinnacle',
				'description' => 'A top-tier product with premium features.',
				'price' => 69.50,
				'category' => 'Books',
				'sku' => 'SKU-0098',
				'stock' => 24
			],
			[
				'id' => 99,
				'name' => 'Quasar II',
				'description' => 'An enhanced model of the Quasar product.',
				'price' => 82.25,
				'category' => 'Clothing',
				'sku' => 'SKU-0099',
				'stock' => 19
			],
			[
				'id' => 100,
				'name' => 'Ranger II',
				'description' => 'A new version of the Ranger product with improved features.',
				'price' => 57.75,
				'category' => 'Furniture',
				'sku' => 'SKU-0100',
				'stock' => 30
			],
			[
				'id' => 101,
				'name' => 'Sapphire',
				'description' => 'A high-quality product with modern design.',
				'price' => 64.80,
				'category' => 'Electronics',
				'sku' => 'SKU-0101',
				'stock' => 29
			],
			[
				'id' => 102,
				'name' => 'Triton',
				'description' => 'An advanced and durable item.',
				'price' => 52.40,
				'category' => 'Books',
				'sku' => 'SKU-0102',
				'stock' => 27
			],
			[
				'id' => 103,
				'name' => 'Uranus',
				'description' => 'A versatile product with excellent features.',
				'price' => 95.20,
				'category' => 'Clothing',
				'sku' => 'SKU-0103',
				'stock' => 12
			],
			[
				'id' => 104,
				'name' => 'Vortex II',
				'description' => 'An upgraded version of the Vortex product.',
				'price' => 87.65,
				'category' => 'Furniture',
				'sku' => 'SKU-0104',
				'stock' => 22
			],
			[
				'id' => 105,
				'name' => 'Wavelength',
				'description' => 'A stylish and high-performance item.',
				'price' => 73.90,
				'category' => 'Electronics',
				'sku' => 'SKU-0105',
				'stock' => 34
			],
			[
				'id' => 106,
				'name' => 'Xeno',
				'description' => 'A premium product with advanced technology.',
				'price' => 81.50,
				'category' => 'Books',
				'sku' => 'SKU-0106',
				'stock' => 20
			],
			[
				'id' => 107,
				'name' => 'Yara',
				'description' => 'A durable and reliable product.',
				'price' => 69.99,
				'category' => 'Clothing',
				'sku' => 'SKU-0107',
				'stock' => 16
			],
			[
				'id' => 108,
				'name' => 'Zephyr',
				'description' => 'An efficient and well-designed item.',
				'price' => 55.75,
				'category' => 'Furniture',
				'sku' => 'SKU-0108',
				'stock' => 25
			],
			[
				'id' => 109,
				'name' => 'Alpha',
				'description' => 'A versatile product with modern features.',
				'price' => 43.90,
				'category' => 'Electronics',
				'sku' => 'SKU-0109',
				'stock' => 28
			],
			[
				'id' => 110,
				'name' => 'Bravo',
				'description' => 'A high-quality and stylish item.',
				'price' => 59.40,
				'category' => 'Books',
				'sku' => 'SKU-0110',
				'stock' => 21
			],
			[
				'id' => 111,
				'name' => 'Ceres',
				'description' => 'A reliable product for various applications.',
				'price' => 75.30,
				'category' => 'Clothing',
				'sku' => 'SKU-0111',
				'stock' => 18
			],
			[
				'id' => 112,
				'name' => 'Delta',
				'description' => 'A high-performance and durable item.',
				'price' => 64.60,
				'category' => 'Furniture',
				'sku' => 'SKU-0112',
				'stock' => 23
			],
			[
				'id' => 113,
				'name' => 'Echo II',
				'description' => 'An updated version of the Echo product.',
				'price' => 51.20,
				'category' => 'Electronics',
				'sku' => 'SKU-0113',
				'stock' => 31
			],
			[
				'id' => 114,
				'name' => 'Futura',
				'description' => 'A premium product with enhanced features.',
				'price' => 67.85,
				'category' => 'Books',
				'sku' => 'SKU-0114',
				'stock' => 26
			],
			[
				'id' => 115,
				'name' => 'Gala',
				'description' => 'A stylish and efficient item.',
				'price' => 85.00,
				'category' => 'Clothing',
				'sku' => 'SKU-0115',
				'stock' => 11
			],
			[
				'id' => 116,
				'name' => 'Horizon II',
				'description' => 'An improved version of the Horizon product.',
				'price' => 93.40,
				'category' => 'Furniture',
				'sku' => 'SKU-0116',
				'stock' => 17
			],
			[
				'id' => 117,
				'name' => 'Inferno II',
				'description' => 'An updated version of the Inferno product.',
				'price' => 79.95,
				'category' => 'Electronics',
				'sku' => 'SKU-0117',
				'stock' => 30
			],
			[
				'id' => 118,
				'name' => 'Jupiter II',
				'description' => 'An advanced model of the Jupiter product.',
				'price' => 71.25,
				'category' => 'Books',
				'sku' => 'SKU-0118',
				'stock' => 19
			],
			[
				'id' => 119,
				'name' => 'Kronos II',
				'description' => 'A new version of the Kronos product with enhanced features.',
				'price' => 88.90,
				'category' => 'Clothing',
				'sku' => 'SKU-0119',
				'stock' => 14
			],
			[
				'id' => 120,
				'name' => 'Lunar II',
				'description' => 'An updated version of the Lunar product.',
				'price' => 56.70,
				'category' => 'Furniture',
				'sku' => 'SKU-0120',
				'stock' => 22
			]
		];

		foreach ($products as $prod) {
			Product::create($prod);
		}
	}
}
