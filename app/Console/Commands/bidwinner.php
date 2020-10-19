<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class bidwinner extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'bid:winner';

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
                $auction_products=DB::table('product as p')
                    ->where(['p.selling_type'=>'Auction style','p.status'=>'1'])
                    ->get();

                $p_id=array();
                foreach($auction_products as $product){
                    $date = strtotime("+ $product->renew_duration day", strtotime($product->approve_date));
                    $last_date=date("Y-m-d h:m:i", $date);
                    $current_date=date("Y-m-d h:m:i");

                    $datetime1 = date_create($current_date);
                    $datetime2 = date_create($last_date);
                    if($datetime1 > $datetime2)
                        $p_id[]=$product->id;
                    }

                    if(count($p_id)){
                        $max_bid_ids=DB::table('auction_bid')
                            ->whereIn('product_id',$p_id)
                            ->select(DB::raw("max(id) as id"))
                            ->groupBy('product_id')
                            ->get();

                        foreach($max_bid_ids as $max){
                            $max_bid=DB::table('auction_bid')->where('id',$max->id)->first();
                            $winner=DB::table('users')->where('id',$max_bid->buyer_id)->first();

                            $product_info=DB::table('product')->where('id',$max_bid->product_id)->first();
                            $product_info->photos=unserialize($product_info->photos);
                            $product_info->photos=$product_info->photos[0];
                            $product_info->shipment_type=unserialize($product_info->shipment_type);
                            $product_info->max_bid=$max_bid->bid_price;

                            /* $link = action( 'CheckoutController@checkOutInfo',  [ 'product_id' => $max_bid->product_id,
                                    'quantity' => '1' ,'specification'=>'','user_id'=>$max_bid->buyer_id] );*/
                            $link=config('app.frontend_url')."ReviewOrder/product_id=$max_bid->product_id&quantity'='1&specification=&user_id=$max_bid->buyer_id";
                           //$link = file_get_contents('http://tinyurl.com/api-create.php?url='.$link);
                            $email_template=DB::table('email_template')->where('id','19')->first();
                            Mail::to($winner->email)->send(new BidWinner($link,$product_info,$email_template));
                            //Update product status
                            DB::table('product')->where('id',$max_bid->product_id)->update(['status'=>'3','updated_date'=>date('Y-m-d H:i:s')]);
                            //Update winner id
                            DB::table('auction_bid')->where('product_id',$max_bid->product_id)->update(['winner_id'=>$winner->id,'updated_date'=>date('Y-m-d H:i:s')]);
                            $this->reply['winner']=['status'=>'success','msg'=>'Winner declare successful.'];
                        }
                    }else
                        $this->reply['winner']=['status'=>'fail','msg'=>'No product to end.'];
                return response()->json($this->reply);


        }catch (\Exception $e){
            echo $e->getMessage();
            DB::rollBack();
        }
    }
}
