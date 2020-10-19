<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Srmklive\PayPal\Facades\PayPal;
use Srmklive\PayPal\Services\AdaptivePayments;
use Srmklive\PayPal\Services\ExpressCheckout;

class PaypalController extends Controller
{
    public $apiUrl = 'https://svcs.sandbox.paypal.com/AdaptivePayments/';
    public $paypalUrl="https://www.paypal.com/webscr?cmd=_ap-payment&paykey=";
    public $headers;

    public function __construct(){
        $this->headers = array(
            "X-PAYPAL-SECURITY-USERID: ".env("PAYPAL_SANDBOX_API_USERNAME"),
            "X-PAYPAL-SECURITY-PASSWORD: ".env("PAYPAL_SANDBOX_API_PASSWORD"),
            "X-PAYPAL-SECURITY-SIGNATURE: ".env("PAYPAL_SANDBOX_API_SECRET"),
            "X-PAYPAL-REQUEST-DATA-FORMAT: JSON",
            "X-PAYPAL-RESPONSE-DATA-FORMAT: JSON",
            "X-PAYPAL-APPLICATION-ID:APP-80W284485P519543T",
        );
    }

    public function _paypalSend($data,$call){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->apiUrl.$call);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);
        $response = json_decode(curl_exec($ch),true);
        return $response;
    }

    public function splitPay(){

        // create the pay request
        $createPacket = array(
            "actionType" =>"PAY",
            "currencyCode" => "USD",
            "receiverList" => array(
                "receiver" => array(
                    array(
                        "amount"=> "1.00",
                        "email"=>"paypal-busitest1@dibdaa.com"),
                    array(
                        "amount"=> "2.00",
                        "email"=>"paypal-busitest@dibdaa.com"),
                ),
            ),
            "returnUrl" => "http://test.local/payments/confirm",
            "cancelUrl" => "http://test.local/payments/cancel",
            "requestEnvelope" => array(
                "errorLanguage" => "en_US",
                "detailLevel" => "ReturnAll",
            ),
        );

        $response = $this->_paypalSend($createPacket,"Pay");
        echo "<pre>";
        print_r($response);
    }


    function Pay(){
        $adaptive_provider = new AdaptivePayments();
    //    $adaptive_provider = PayPal::setProvider('adaptive_payments');

        $provider = PayPal::setProvider('express_checkout');

//        $provider = new ExpressCheckout;

        $data = [];
        $data['items'] = [
            [
                'name' => 'Product 1',
                'price' => 9.99,
                'qty' => 1
            ],
            [
                'name' => 'Product 2',
                'price' => 4.99,
                'qty' => 2
            ]
        ];

        $data['invoice_id'] = 1;
        $data['invoice_description'] = "Order #{$data['invoice_id']} Invoice";
        $data['return_url'] = url('/payment/success');
        $data['cancel_url'] = url('/cart');

        $total = 0;
        foreach($data['items'] as $item) {
            $total += $item['price']*$item['qty'];
        }

        $data['total'] = $total;
        $response =$provider->setCurrency('EUR')->setExpressCheckout($data,true);


       $data = [
            'receivers'  => [
                [
                    'email' => 'paypal-busitest1@dibdaa.com',
                    'amount' => 10,
                    'primary' => true,
                ],
                [
                    'email' => 'paypal-busitest@dibdaa.com',
                    'amount' => 5,
                    'primary' => false
                ]
            ],
            'payer' => 'EACHRECEIVER', // (Optional) Describes who pays PayPal fees. Allowed values are: 'SENDER', 'PRIMARYRECEIVER', 'EACHRECEIVER' (Default), 'SECONDARYONLY'
            'return_url' => url('payment/success'),
            'cancel_url' => url('payment/cancel'),
        ];

        $response = $adaptive_provider->createPayRequest($data);

        return response()->json($response);
    }




}
