<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RelistProduct extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_info,$product_info,$email_template)
    {
        $this->product_info=$product_info;
        $this->user_info=$user_info;
        $this->email_template=$email_template;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $searchArray = array("product_title");
        $replaceArray = array($this->product_info->title);

        $subject = str_replace($searchArray,$replaceArray,$this->email_template->subject);
        
        return $this->view('email.relist_product')
            ->subject($subject)
            ->with(['product_info'=>$this->product_info,
                'user_info'=>$this->user_info,
                'email_template'=>$this->email_template]);
    }
}
