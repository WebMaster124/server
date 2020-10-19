<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class BidOffer extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($buyer_info,$product_info,$email_template)
    {
        $this->buyer_info=$buyer_info;
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
        return $this->view('email.bid_offer')
            ->subject($this->email_template->subject)
            ->with([
                'user_info'=>$this->buyer_info,
                'product_info'=>$this->product_info,
                'email_template'=>$this->email_template
            ]);
    }
}
