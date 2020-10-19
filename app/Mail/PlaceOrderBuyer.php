<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PlaceOrderBuyer extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order_id,$product_info,$buyer_name,$buyer_email,$buyer_mobile,$buyer_TRN,$buyer_VAT,$total,$date,$shipping_info,$coupon_code,$payment_status='',$cart='',$seller,$email_template)
    {
            $this->order_id=$order_id;
            $this->product_info=$product_info;
            $this->buyer_name=$buyer_name;
            $this->buyer_email=$buyer_email;
            $this->buyer_mobile=$buyer_mobile;
            $this->buyer_TRN=$buyer_TRN;
            $this->buyer_VAT=$buyer_VAT;
            $this->total=$total;
            $this->date=$date;
            $this->shipping_info=$shipping_info;
            $this->cart=$cart;
            $this->coupon_code=$coupon_code;
            $this->payment_status=$payment_status;
            $this->seller=$seller;
            $this->email_template=$email_template;
            $this->file=$order_id.'.pdf';


    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.place_buyer_order')
            ->subject($this->email_template->subject.' '.$this->date)
            ->with(['order_id'=>$this->order_id,
                    'product_info'=>$this->product_info,
                    'buyer_name'=>$this->buyer_name,
                    'buyer_email'=>$this->buyer_email,
                    'buyer_mobile'=>$this->buyer_mobile,
                    'buyer_TRN'=>$this->buyer_TRN,
                    'buyer_VAT'=>$this->buyer_VAT,
                    'total'=>$this->total,
                    'date'=>$this->date,
                    'shipping_info'=>$this->shipping_info,
                    'cart'=>$this->cart,
                    'coupon_code'=>$this->coupon_code,
                    'payment_status'=>$this->payment_status,
                    'seller'=>$this->seller,
                    'email_template'=>$this->email_template
                ]
            )->attach(public_path()."/invoice/buyer/$this->file");
    }
}
