<?php
namespace App\Exports;

use App\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ProductExport implements FromCollection, WithHeadings

{
    public function collection(){
        $product= Product::join('Category', 'Category.id', '=', 'product.category_id')->select('product.title','Category.category_name','product.price','product.selling_type','product.daily_deal','product.created_date','product.approve_date')->Where('product.status','=','2')->orderBy('product.created_date','desc')->get();
            return $product;
	}
	
	
 
    public function headings() : array
    {
        return [
            'Title','Category','Price','Selling Type','Daily Deal','Since Date','Approve Date'
        ];
    }
}

