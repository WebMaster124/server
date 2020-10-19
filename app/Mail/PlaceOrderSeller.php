<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PlaceOrderSeller extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order_id,$product_info,$seller_id,$total,$date,$shipping_info,$buyer_info,$coupon_code,$email_template_seller)
    {
        $this->order_id=$order_id;
        $this->product_info=$product_info;
        $this->seller_id=$seller_id;
        $this->total=$total;
        $this->date=$date;
        $this->shipping_info=$shipping_info;
        $this->buyer_info=$buyer_info;
        $this->coupon_code=$coupon_code;
        $this->email_template=$email_template_seller;
        }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.place_seller_order')
            ->subject($this->email_template->subject.' '. $this->date)
            ->with(['order_id'=>$this->order_id,
                    'product_info'=>$this->product_info,
                    'seller_id'=>$this->seller_id,
                    'total'=>$this->total,
                    'date'=>$this->date,
                    'shipping_info'=>$this->shipping_info,
                    'buyer_info'=>$this->buyer_info,
                    'coupon_code'=>$this->coupon_code,
                    'email_template'=>$this->email_template
                ]
            );
    }
}
