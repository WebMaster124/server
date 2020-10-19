<?php
namespace App\Exports;

use App\ItemsCategoryAuction;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;


//       $parent_categorys_auction=DB::table('category')->where('parent_id','0')->get(['id','category_name']);
class ItemsCategoryAuctionExport implements FromView, WithHeadings

{
	
	
	  use Exportable;

   public function view(): View
{
    return view('admin.testt', [
        'ex' => ItemsCategoryAuction::all()
    ]);
 }
    /*public function query()
	{
        return DB::table('category')->where('parent_id','0')->get(['id','category_name']);
		//return DB::query()->select('id','category_name')->where('parent_id','0')->get();
        //return DB::table('category')->where('parent_id','0')->get(['id','category_name']);
    }
      public function collection()
    {
        return DB::table('category')->where('parent_id','0')->get(['id','category_name']);
    } 
	*/
	//public function collection()
    //{
		
        //return ItemsCategoryAuction::select('*')->get();
        //return DB::table('category')->where('parent_id','0')->get();
        //return DB::table('category')->select('category_name as name')->get();

		
		
    //}
	
	
 
    public function headings() : array
    {
        return [
           'category_name', 'item_count'
        ];
    }
}

