<?php
namespace App\Exports;

use App\Season;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class SeasonExport implements FromCollection, WithHeadings

{
    public function collection()
    {
        $data=Season::join('Category', 'Category.parent_id', '=', 'season_deal.category_ids')->select('Category.category_name', 'season_deal.season_name','season_deal.season_charges','season_deal.status')->get();
	    return $data;	
    }
	
	
 
    public function headings() : array
    {
        return [
           'Categorys', 'Season Name', 'Season_charges', 'Status'
        ];
    }
}

