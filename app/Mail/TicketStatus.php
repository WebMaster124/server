<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class TicketStatus extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_info,$ticket_info)
    {
        $this->ticket_info=$ticket_info;
        $this->user_info=$user_info;
        $this->ticket_id=$ticket_info->ticket_id;
        $this->ticket_status=$ticket_info->ticket_status;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.ticket_status')
            ->subject("Your Ticket #$this->ticket_id status is $this->ticket_status")
            ->with(['user_info'=>$this->user_info,
                    'ticket_info'=>$this->ticket_info]);
    }
}
