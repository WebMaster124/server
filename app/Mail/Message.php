<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/18/2018
 * Time: 11:26 AM
 */

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Message extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($sender_info,$receiver_info)
    {
        $this->sender_info=$sender_info;
        $this->receiver_info=$receiver_info;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.message')
            ->subject('Message from Dibdaa')
            ->with(['sender_info'=>$this->sender_info,
                'receiver_info'=>$this->receiver_info
            ]);
    }
}