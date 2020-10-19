<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 6/8/2018
 * Time: 12:42 PM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InactiveProductReason extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_info,$product,$reason='',$email_template)
    {
        $this->user_info=$user_info;
        $this->product=$product;
        $this->reason=$reason;
        $this->status=($reason?'Disapprove':'Approve');
        $this->email_template=$email_template;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.inactive_product_reason')
            ->subject($this->email_template->subject)
            ->with(['user_info'=>$this->user_info,
                    'product'=>$this->product,
                    'reason'=>$this->reason,
                    'email_template'=>$this->email_template
                ]
            );
    }
}