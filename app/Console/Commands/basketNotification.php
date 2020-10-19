<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Mail\BasketEmailNotification;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Support\Facades\Mail;

class basketNotification extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cart:basketNotification';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try{
                $BasketDays=DB::table('setting')->where('id','1')->first();
                $BasketDay=unserialize($BasketDays->setting);
                $BasketDay=$BasketDay['basket_email'];
                $basket_day=explode(',',$BasketDay);

            foreach ($basket_day as $day) {

                $carts = DB::table('add_to_cart as a')
                    ->join('product as p', 'p.id', '=', 'a.product_id')
                    ->leftJoin('users as u', 'u.id', '=', 'a.user_id')
                    ->where('u.user_status', '1')
                    ->where('p.status', '1')
                    ->get(['p.id as product_id', 'p.price', 'p.title', 'p.photos', 'p.duration', 'p.renew_duration', 'p.quantity as product_quantity', 'p.created_date', 'p.approve_date','p.shipment_type',
                        'u.id as user_id','u.business_name', 'u.display_name',
                        'p.discount', 'a.quantity', 'a.specification', 'a.id as cart_id', 'a.created_date as cart_create_date']);
                foreach ($carts as $cart) {
                    $date = strtotime("+ $day day", strtotime($cart->cart_create_date));
                    $last_date = date("Y-m-d", $date);
                    $current_date = date("Y-m-d");

                   $datetime1 = date_create($current_date);
                   $datetime2 = date_create($last_date);
                   if($datetime1 == $datetime2 ) {
                       $productImg = unserialize($cart->photos);
                       $cart->photos = $productImg[0];
                       $cart->specification = unserialize($cart->specification);
                       $discountPer = $cart->discount * $cart->quantity;
                       $discount = $cart->price * $discountPer / 100;
                       $price = $cart->price * $cart->quantity;
                       $cart->price = $price - $discount;
                       $user_info=DB::table('users')->where('id',$cart->user_id)->first(['email']);
                       $email_template=DB::table('email_template')->where('id','16')->first();
                        Mail::to($user_info->email)->send(new BasketEmailNotification($cart,$email_template));
                   }
                }
            }
            $this->reply['basket_email']=['status'=>'success'];

            return response()->json($this->reply);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }    
}
