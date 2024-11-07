<?php

namespace App\Http\Controllers\Demo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\demo\Product;

class TablesController extends Controller
{

	/**
	 * LIST
	 * 
	 * 
	 * 
	 */
	public function index(Request $request)
	{
		$per_page = 16;
		$orderBy = $request->dir === 'ascending' ? 'asc' : 'desc';
		$categories = Product::select('category')->distinct()->get();

		$s = $request->input('s', '');
		$cat = $request->input('cat', '');

		$products = Product::where(function ($query) use ($request) {
			if (!empty($request->s)) {
				$query->where('name', 'like', '%' . $request->s . '%');
			}
			if (!empty($request->cat)) {
				$query->where('category', $request->cat);
			}
		})
			->orderBy($request->order ?? 'id', $orderBy)
			->paginate($per_page);

		// dd($s, $cat);

		return Inertia::render(
			"demo/pages/RealDataTablesPage",
			compact(
				'products',
				'categories',
				's',
				'cat'
			)
		);
	}
}
