<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class CancelOrder extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($product_info,$user_info,$order_info,$seller)
    {
        $this->product_info=$product_info;
        $this->user_info=$user_info;
        $this->order_info=$order_info;
        $this->seller=$seller;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.cancel_order')
            ->subject("Cancel Order Request")
            ->with(['product_info'=>$this->product_info,
                    'user_info'=>$this->user_info,
                    'order_info'=>$this->order_info,
                    'seller'=>$this->seller
                   ]
            );
    }
}
