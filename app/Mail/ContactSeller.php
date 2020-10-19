<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactSeller extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_info,$seller_info)
    {
        $this->user_info=$user_info;
        $this->seller_info=$seller_info;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.contact_seller')
            ->subject('Buyer Message')
            ->with(['user_info'=>$this->user_info,
                'seller_info'=>$this->seller_info
         ]);
    }
}
