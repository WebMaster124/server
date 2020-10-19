<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/19/2018
 * Time: 10:42 AM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderStatus extends Mailable
{

    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order_info,$user_info,$status,$product_info,$seller_info)
    {
        $this->order_info=$order_info;
        $this->user_info=$user_info;
        $this->status=$status;
        $this->product_info=$product_info;
        $this->seller_info=$seller_info;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.order_status')
            ->subject('Your '.config('app.name')." order status is $this->status")
            ->with(['order_info'=>$this->order_info,
                    'user_info'=>$this->user_info,
                    'status'=>$this->status,
                    'product_info'=>$this->product_info,
                    'seller_info'=>$this->seller_info
                ]
            );
    }
}