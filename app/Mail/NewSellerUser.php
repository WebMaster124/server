<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 4/16/2018
 * Time: 7:14 PM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewSellerUser extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($userId,$first_name,$randNo,$email='',$email_template)
    {
        $this->userId=$userId;
        $this->first_name=$first_name;
        $this->rand_no=$randNo;
        $this->email=$email;
        $this->email_template=$email_template;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.new-seller')
            ->subject($this->first_name.' '.$this->email_template->subject)
            ->with(['first_name'=>$this->first_name,
                      'userId' => $this->userId,
                       'rand_no' => $this->rand_no,
                        'email_template'=>$this->email_template,
                        'param'=>base64_encode(json_encode(['user_id'=>$this->userId,'email'=>$this->email,'otp'=>$this->rand_no]))
                ]
            );
    }
}