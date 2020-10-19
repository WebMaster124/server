<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OfferStatus extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($product_info,$buyer_info,$link)
    {
        $this->product_info=$product_info;
        $this->link=$link;
        
        
        $this->buyer_info=$buyer_info;
        $this->status=$product_info->offer_status;
         $this->offer_price=$product_info->offer_price;
         $this->title=$product_info->title;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        //echo  $this->status;exit;
        if($this->status=='Accept'){
        return $this->view('email.offer_status')
            ->subject(' Your offer on '.$this->title.' has been accepted ')
            ->with(['product_info'=>$this->product_info,'buyer_info'=>$this->buyer_info,'link'=>$this->link]);
        }else{
            return $this->view('email.offer_status')
            ->subject('Your offer of '.$this->offer_price.' on item '.$this->title.' has been rejected. ')
            ->with(['product_info'=>$this->product_info,'buyer_info'=>$this->buyer_info,'link'=>$this->link]);
        }
    }
}
