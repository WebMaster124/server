<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MakeOffer extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($product_info,$buyer_info,$email_template,$seller_info,$r)
    {
        $this->buyer_info=$buyer_info;
        $this->product_info=$product_info;
          $this->title=$product_info->title;
            $this->max_price=$product_info->max_price;
            
             $this->offer_price=$r->offer_price;
            // echo $this->offer_price;exit;
        $this->email_template=$email_template;
         $this->seller_info=$seller_info;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        if($this->max_price < $this->offer_price){
        return $this->view('email.make_offer')
            ->subject($this->email_template->subject)
            ->with([
                'user_info'=>$this->buyer_info,
                'product_info'=>$this->product_info,
                'email_template'=>$this->email_template,
                 'seller_info'=>$this->seller_info,
                  'status'=>'true'
            ]);
    }else{
       return $this->view('email.make_offer')
             ->subject('You have received an offer on '. $this->title)
            ->with([
                'user_info'=>$this->buyer_info,
                'product_info'=>$this->product_info,
                'email_template'=>$this->email_template,
                 'seller_info'=>$this->seller_info,
                 'status'=>'false'
                
            ]);
    }
    }
}
