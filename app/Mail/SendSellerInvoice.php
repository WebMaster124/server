<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use File;

class SendSellerInvoice extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($file,$email_template)
    {
        $this->file=$file.'.pdf';
        $this->email_template=$email_template;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.send_seller_invoice')
            ->subject($this->email_template->subject)
            ->with(['email_template'=>$this->email_template])
            ->attach(public_path()."/invoice/seller/$this->file");
    }
}
