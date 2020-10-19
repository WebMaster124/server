<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 6/1/2018
 * Time: 1:00 PM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InactiveReason extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_info,$email_template)
    {
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
        return $this->view('email.inactive_reason')
            ->subject($this->email_template->subject)
            ->with(['user_info'=>$this->user_info,
                    'email_template'=>$this->email_template ]
            );
    }
}