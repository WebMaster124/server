<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class productSchedule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:schedule';

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
                $products=DB::table('product')->where('status','7')->get();
                if($products) {
                    foreach ($products as $product) {
                        $schedule_date = strtotime($product->schedule_date);
                        $current_date = strtotime(date("Y-m-d h:i:s"));

                        if ($current_date > $schedule_date) {
                            DB::table('product')->where('id', $product->id)->update(['status' => '1', 'updated_date' => date('Y-m-d h:i:s')]);
                            $product->photos = unserialize($product->photos);
                            $product->photos = $product->photos[0];
                            $product->shipment_type = unserialize($product->shipment_type);

                            $user_info = DB::table('users')->where('id', $product->user_id)->first(['id', 'first_name', 'email', 'status_reason', 'user_status']);
                            $email_template=DB::table('email_template')->where('id','10')->first();
                            Mail::to($user_info->email, $user_info->first_name)->send(new InactiveProductReason($user_info, $product,$email_template));
                            $this->reply['schedule'] = ['status' => 'success', 'msg' => 'Product live successful.'];
                        } else
                            $this->reply['schedule'] = ['status' => 'fail', 'msg' => 'No product to scheduled'];
                    }
                } else
                $this->reply['schedule']=['status'=>'fail','msg'=>'No product to scheduled'];


            return response()->json($this->reply);
        }catch (Exception $e){
            echo $e->getMessage();
        }
    }
}
