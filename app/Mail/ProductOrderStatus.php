<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 6/14/2018
 * Time: 11:37 AM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ProductOrderStatus extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($product_info,$order_info,$user_info,$status)
    {
        $this->product_info=$product_info;
        $this->order_info=$order_info;
        $this->user_info=$user_info;
        $this->status=$status;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.product-order-status')
            ->subject("Your order product status")
            ->with(['product_info'=>$this->product_info,
                'order_info'=>$this->order_info,
                'user_info'=>$this->user_info,
                'status'=>$this->status]);
    }

}