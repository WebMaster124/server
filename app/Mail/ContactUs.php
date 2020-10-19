<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use File;

class ContactUs extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_info,$file_name)
    {
        $this->user_info=$user_info;
        $this->file=$file_name;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $view = $this->view('email.contact_us')
            ->subject("Contact us")
            ->with([
                'user_info'=>$this->user_info
            ]);
          return ($this->file ? $view->attach(public_path("/upload/$this->file"))
            : $view);
    }
}
