<?php
namespace App\Exports;

use App\Category;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CategoryExport implements FromCollection, WithHeadings

{
    public function collection(){
        $category= Category::select('id','parent_id','facility_charges','category_name')->where('parent_id', '0')->get();
            for($i=0;$i<count($category);$i++){
				//echo count($category);exit;
                    $subCat=Category::where('parent_id',$category[$i]->id)->get()->toArray();
					//ssssssprint_r($subCat);
                    $category[$i]->sub=$subCat;
					
                }
				
				return $category;
	}
	
	
 
    public function headings() : array
    {
        return [
            'id','Parent Category','Facility Charges','Category'
        ];
    }
}

