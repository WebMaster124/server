<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateRelistProduct extends Mailable
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
//        echo $this->email_template->subject;
//        echo '<br>';
//        print_r($this->product_info->title);
//        echo '<br>';
        $searchArray = array("product_title");
        $replaceArray = array($this->product_info->title);

        $subject = str_replace($searchArray,$replaceArray,$this->email_template->subject);
        
//        exit;
        
        return $this->view('email.update_relist_product')
            ->subject($subject)
            ->with(['product_info'=>$this->product_info,
                'user_info'=>$this->user_info,
                'email_template'=>$this->email_template]);
    }
}
