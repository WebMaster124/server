<?php

$vars = [];
switch(APP_ENV) {
    case 'local':
        $vars = [
            'email_driver' => 'smtp',
            'email_host' => 'smtp.ionos.com',
            'email_port' => 587,
//            'email_from_address' => 'dibdaa@onlinetnt.com',
            'email_from_address' => 'dibdaa@dibdaa.com',
            'email_from_name' => 'Dibdaa',
            'email_encryption' => 'tls',
            'email_username' => 'dibdaa@dibdaa.com',
//            'email_password' => 'D!bdaa123'
            'email_password' => 'D1bdaa$1@1'
        ]; break;
    case 'test':
        $vars = [
            'email_driver' => 'sendmail',
            'email_host' => '',
            'email_port' => '587',
            'email_from_address' => 'dibdaa@dibdaa.com',
            'email_from_name' => 'Dibdaa',
            'email_encryption' => '',
            'email_username' => '',
            'email_password' => ''
        ]; break;
}
return [

    /*
    |--------------------------------------------------------------------------
    | Mail Driver
    |--------------------------------------------------------------------------
    |
    | Laravel supports both SMTP and PHP's "mail" function as drivers for the
    | sending of e-mail. You may specify which one you're using throughout
    | your application here. By default, Laravel is setup for SMTP mail.
    |
    | Supported: "smtp", "sendmail", "mailgun", "mandrill", "ses",
    |            "sparkpost", "log", "array"
    |
    */

    'driver' => $vars['email_driver'],

    /*
    |--------------------------------------------------------------------------
    | SMTP Host Address
    |--------------------------------------------------------------------------
    |
    | Here you may provide the host address of the SMTP server used by your
    | applications. A default option is provided that is compatible with
    | the Mailgun mail service which will provide reliable deliveries.
    |
    */

    'host' => $vars['email_host'],

    /*
    |--------------------------------------------------------------------------
    | SMTP Host Port
    |--------------------------------------------------------------------------
    |
    | This is the SMTP port used by your application to deliver e-mails to
    | users of the application. Like the host we have set this value to
    | stay compatible with the Mailgun e-mail application by default.
    |
    */

    'port' => $vars['email_port'],

    /*
    |--------------------------------------------------------------------------
    | Global "From" Address
    |--------------------------------------------------------------------------
    |
    | You may wish for all e-mails sent by your application to be sent from
    | the same address. Here, you may specify a name and address that is
    | used globally for all e-mails that are sent by your application.
    |
    */

    'from' => [
        'address' => $vars['email_from_address'],
        'name' => $vars['email_from_name'],
    ],
    /*
    |--------------------------------------------------------------------------
    | E-Mail Encryption Protocol
    |--------------------------------------------------------------------------
    |
    | Here you may specify the encryption protocol that should be used when
    | the application send e-mail messages. A sensible default using the
    | transport layer security protocol should provide great security.
    |
    */

    'encryption' => $vars['email_encryption'],

    /*
    |--------------------------------------------------------------------------
    | SMTP Server Username
    |--------------------------------------------------------------------------
    |
    | If your SMTP server requires a username for authentication, you should
    | set it here. This will get used to authenticate with your server on
    | connection. You may also set the "password" value below this one.
    |
    */

    'username' => $vars['email_username'],

    'password' => $vars['email_password'],

    /*
    |--------------------------------------------------------------------------
    | Sendmail System Path
    |--------------------------------------------------------------------------
    |
    | When using the "sendmail" driver to send e-mails, we will need to know
    | the path to where Sendmail lives on this server. A default path has
    | been provided here, which will work well on most of your systems.
    |
    */

    // 'sendmail' => '/usr/sbin/sendmail -bs',
    'sendmail' => '/usr/sbin/sendmail -t -i',

    'pretend' => false,
    /*
    |--------------------------------------------------------------------------
    | Markdown Mail Settings
    |--------------------------------------------------------------------------
    |
    | If you are using Markdown based email rendering, you may configure your
    | theme and component paths here, allowing you to customize the design
    | of the emails. Or, you may simply stick with the Laravel defaults!
    |
    */


    'markdown' => [
        'theme' => 'default',

        'paths' => [
            resource_path('views/vendor/mail'),
        ],
    ],

];
