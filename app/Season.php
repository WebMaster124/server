<?php



namespace App;



use Illuminate\Database\Eloquent\Model;



class Season extends Model

{
    public $table="season_deal";
    public $fillable = ['category_ids', 'season_name', 'season_charges', 'status'];

}