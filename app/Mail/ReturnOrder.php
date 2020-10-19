<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/24/2018
 * Time: 11:21 AM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReturnOrder extends Mailable
{
    use Queueable,SerializesModels;

    public function  __construct($order_id,$user_info,$product_info,$reason,$seller,$ticket_id='',$status=''){
        $this->order_id=($order_id==0?$product_info[0]->title:$order_id);
        $this->user_info=$user_info;
        $this->product_info=$product_info;
        $this->reason=$reason;
        $this->seller=$seller;
        $this->ticket_id=$ticket_id;
        $this->status=$status;
    }

    public function build(){
        return $this->view('email.return_order')
            ->subject("#($this->order_id) Resolution Center $this->status")
            ->with(['user_info'=>$this->user_info,
                    'product_info'=>$this->product_info,
                    'reason'=>$this->reason,
                    'order_id'=>$this->order_id,
                    'seller'=>$this->seller,
                    'ticket_id'=>$this->ticket_id,
                    'status'=>$this->status]
                );
    }
}