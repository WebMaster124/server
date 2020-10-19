<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ReportItemAdmin extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_info,$product_info)
    {
        $this->user_info=$user_info;
        $this->product_info=$product_info;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.report_item_admin')
            ->subject('Product Report Notification')
            ->with(['user_info'=>$this->user_info,
                    'product_info'=>$this->product_info]);
    }
}
