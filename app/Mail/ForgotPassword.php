<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name,$id,$email,$request_id,$email_template)
    {
        $this->name=$name;
        $this->id=$id;
        $this->email=$email;
        $this->request_id=$request_id;
        $this->email_template=$email_template;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.forgot_password')
            ->subject($this->email_template->subject)
            ->with(['name'=>$this->name,
                    'email_template'=>$this->email_template,
                    'param'=>base64_encode(json_encode(
                        ['email'=>$this->email,'id'=>$this->id,'request_id'=>$this->request_id])
                    )
                ]);
    }
}
