<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class BuyerBidOffer extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($seller_info,$product_info,$email_template)
    {
        $this->seller_info=$seller_info;
        $this->product_info=$product_info;
        $this->email_template=$email_template;
        $title=$product_info->title;
        $this->subject=(str_replace('PRODUCT_TITLE',$title,$this->email_template->subject));
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.buyer_bid_offer')
            ->subject($this->subject)
            ->with([
                'user_info'=>$this->seller_info,
                'product_info'=>$this->product_info,
                'email_template'=>$this->email_template
            ]);
    }
}
