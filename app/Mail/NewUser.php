<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewUser extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($userId,$first_name,$last_name,$displayName,$email_template)
    {
        $this->userId=$userId;
        $this->first_name=$first_name;
        $this->last_name=$last_name;
        $this->userName=$displayName;
        $this->email_template=$email_template;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.new-user')
            ->subject($this->first_name.' '.$this->email_template->subject)
            ->with(['userid'=>$this->userId,
                    'first_name'=>$this->first_name,
                    'last_name'=>$this->last_name,
                    'user_name'=>$this->userName,
                    'email_template'=>$this->email_template
                ]
    );
    }
}
