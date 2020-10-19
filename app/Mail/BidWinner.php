<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 6/15/2018
 * Time: 6:31 PM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BidWinner extends Mailable
{
    use Queueable,SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($link,$product_info,$email_template)
    {
        $this->link=$link;
        $this->product_info=$product_info;
        $this->email_template=$email_template;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.bid_winner')
            ->subject($this->email_template->subject)
            ->with(['link'=>$this->link,
                    'product_info'=>$this->product_info,
                    'email_template'=>$this->email_template]
            );
    }
}