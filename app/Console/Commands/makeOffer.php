<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class makeOffer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'offer:decline';

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
                DB::beginTransaction();
                $offers=DB::table('make_offer')->where(['offer_status'=>'Pending'])->whereRaw('created_date <= DATE_SUB(NOW(), INTERVAL 2 DAY)')->get();
                foreach ($offers as $offer){
                    $update_status=DB::table('make_offer')->where(['id'=>$offer->id])->update(['offer_status'=>'Decline','updated_date'=>date('Y-m-d H:i:s')]);
                    if($update_status){
                      //  $offer_price=DB::table('make_offer')->where('id',$offer->id)->first();
                        //PRODUCT INFO
                        $product_info=DB::table('product')->where('id',$offer->product_id)->first();
                        $product_info->photos=unserialize($product_info->photos);
                        $product_info->photos=$product_info->photos[0];
                        $product_info->shipment_type=unserialize($product_info->shipment_type);
                        $product_info->offer_price=$offer->offer_price;
                        $product_info->qnt=$offer->quantity;

                        $product_info->offer_status="Decline";
                        //BUYER INFO
                        $buyer_info=DB::table('users')->where('id',$offer->buyer_id)->first();
                        //BUYER MAIL
                        Mail::to($buyer_info->email)->send(new OfferStatus($product_info));
                        //SELLER MAIl
                        $seller_info=DB::table('users')->where('id',$offer->seller_id)->first(['email']);
                       // Mail::to($seller_info->email)->send(new MakeOffer($product_info,$buyer_info));

                        DB::commit();
                        //  $this->reply['offer_status']=['status'=>'success','msg'=>'Offer status change successfully.'];
                    }
              }
                $this->reply['offer_status']=['status'=>'success','msg'=>'Offer status decline successfully.'];

            return response()->json($this->reply);
        }catch(\Exception $e){
            echo $e->getMessage();
        }
    }
}
