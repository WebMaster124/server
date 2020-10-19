<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class DocumentMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user_id,$name,$date,$agree,$privacy)
    {
            $this->user_id=$user_id;
            $this->name=$name;
            $this->date=$date;
            $this->agree=$agree;
            $this->privacy=$privacy;


    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
//        echo '<br>';
//        print_r($this->agree);
//        print_r($this->privacy);
//        echo $this->agree;
//        echo $this->privacy;
//        exit;
        
        if($this->agree=='null'){
            return $this->view('email.document_mail')
            ->subject('Copy of User Agreement/User Privacy statement agreed for '.$this->name)
            ->with(['user_id'=>$this->user_id,
                'name'=>$this->name,
                'date'=>$this->date,
                ]
            )
                ->attach(public_path()."/agreement/user_privacy/".$this->privacy.".pdf");
        } elseif($this->privacy=='null'){
            return $this->view('email.document_mail')
            ->subject('Copy of User Agreement/User Privacy statement agreed for '.$this->name)
            ->with(['user_id'=>$this->user_id,
                'name'=>$this->name,
                'date'=>$this->date,
                ]
            )
                ->attach(public_path()."/agreement/user_agreement/".$this->agree.".pdf");
        } else {
            return $this->view('email.document_mail')
            ->subject('Copy of User Agreement/User Privacy statement agreed for '.$this->name)
            ->with(['user_id'=>$this->user_id,
                'name'=>$this->name,
                'date'=>$this->date,
                ]
            )
                ->attach(public_path()."/agreement/user_agreement/".$this->agree.".pdf")
                ->attach(public_path()."/agreement/user_privacy/".$this->privacy.".pdf");
        }
        
        
//        exit;
    }
}
