<?php
namespace App\Exports;

use App\User;
use App\Season;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class UsersExport implements FromCollection, WithHeadings

{
    public function collection()
    {
        return User::select('email', 'first_name', 'last_name','natinality','display_name','role','address')->where('user_status', '=', '1');
    }
	
	
 
    public function headings() : array
    {
        return [
           'Email', 'First Name', 'Last Name','Nationality','Display Name','Role','Address'
        ];
    }
}

class SeasonExport implements FromCollection, WithHeadings

{
    public function collection()
    {
        $data=Season::join('Category', 'Category.parent_id', '=', 'season_deal.category_ids')->select('Category.category_name','season_deal.season_name','season_deal.status')->get();
	    return $data;	
    }
	
	
 
    public function headings() : array
    {
        return [
           'Categorys', 'Season Name', 'Status'
        ];
    }
}

class ProductPendingExport implements FromCollection, WithHeadings

{
    public function collection(){
        $product= Product::join('Category', 'Category.id', '=', 'product.category_id')->select('product.title','Category.category_name','product.quanity','product.price','product.selling_type','product.daily_deal','product.created_date','product.approve_date')->Where('product.status','=','2')->orderBy('product.created_date','desc')->get();
            return $product;
	}
	
	
 
    public function headings() : array
    {
        return [
            'Title','Category','Quanity','Price','Selling Type','Daily Deal','Since Date','Approve Date'
        ];
    }
}

