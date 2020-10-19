<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class PaypalController extends Controller
{
    function payForm(){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }

        $sendbox=DB::table('paypal_details')->where('id','1')->first();
        $live=DB::table('paypal_details')->where('id','2')->first();
        return view('admin/paypal_form')->with('sendbox',$sendbox)->with('live',$live);
    }

    function editPayPalData(Request $r){
        if (!Session::get('userId')) {
            return redirect('admin/login');
        }
        $pay=['user_id'=>$r->user_id,'password'=>$r->password,'signature'=>$r->signature,'app_id'=>$r->app_id];

        $update=DB::table('paypal_details')->where('id',$r->id)->update($pay);
        if($update){
            Session::flash('message','PayPal details successfully updated');
            return redirect('admin/pay-form');
        }else{
            Session::flash('message','Something wrong happen,please try again.');
            return redirect('admin/pay-form');
        }
    }

    //-----------------------------------------API---------------------------------------------------------

    function viewPayPalDetails(Request $r){
        try{
            $auth=$r->header('Auth');
            $authDB=DB::table('auth')->where('id','1')->first();
            if(Hash::check($auth,$authDB->auth)){
                DB::beginTransaction();
                $paypal = DB::table('paypal_details')->where('id','1')->first();
                if($paypal)
                    $this->reply['paypal'] = ['status'=>'success','data'=>$paypal];
                else
                    $this->reply['paypal'] = [ 'status' =>'fail', 'msg' => 'something wrong. please , try again!' ];

                return response()->json($this->reply);
            }
            else{
                $this->reply['Auth']=['status'=>'fail','msg'=>'Authentication Fail.'];
            }
            return response()->json($this->reply);
        }catch (\Exception $e){
            echo $e->getMessage();
            DB::rollback();
        }
    }

    
    //Seller Payment to Admin
    function sellerPaypalPaymentApi(Request $r){
//        echo $r;
        
      /*   $params = array(
        'ivp_method'  => 'create',
        'ivp_store'   => '21099',
        'ivp_authkey' => 'k2qM4~bt4k#M6vv3',
        'ivp_cart'    => 'UniqueCartID',  
        'ivp_test'    => '1',
        'ivp_amount'  => '100.00',
        'ivp_currency'=> 'AED',
        'ivp_desc'    => 'Product Description',
        'return_auth' => 'https://domain.com/return.html',
        'return_can'  => 'https://domain.com/return.html',
        'return_decl' => 'https://domain.com/return.html'
    );
        
        
        //print_r($params); exit;
        
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://secure.telr.com/gateway/order.json");
curl_setopt($ch, CURLOPT_POST, count($params));
curl_setopt($ch, CURLOPT_POSTFIELDS,$params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
$results = curl_exec($ch);
curl_close($ch); */
//$results = json_decode($results,true);
//echo $results;

       /*  return $results;
        exit */;
//        echo 'test';
        $card = round($r->receiver_arr[0]['amount'][0]);
        $params = array(
		    'ivp_method'  => 'create',
            'ivp_store' => '21099',
            'ivp_authkey' => 'k2qM4~bt4k#M6vv3',
            'ivp_trantype' => 'sale',
            'ivp_tranclass' => 'ecom',
            'ivp_desc' => 'Product ',
            'ivp_cart' => '40000000000001'+$card,
            'ivp_currency' => 'AED',
            'ivp_amount' => $r->receiver_arr[0]['amount'][0],
            'tran_ref' => '010321000864',
            'ivp_test' => '1',
            'return_auth' => 'http://onlinetnt.com/#/seller-my-account/account',
            'return_can'  => 'http://onlinetnt.com/',
            'return_decl' => 'http://onlinetnt.com/'
            );
//       print_r($params);
//       exit;
          /*   $ch = curl_init();
            //curl_setopt($ch, CURLOPT_URL, "https://secure.telr.com/gateway/remote.html");
            curl_setopt($ch, CURLOPT_URL, "https://secure.telr.com/gateway/order.json");
            curl_setopt($ch, CURLOPT_POST, count($params));
            curl_setopt($ch, CURLOPT_POSTFIELDS,$params);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
            $results = curl_exec($ch);
            return $results;
//            exit;
            curl_close($ch);
			 */
			
			




$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://secure.telr.com/gateway/order.json");
curl_setopt($ch, CURLOPT_POST, count($params));
curl_setopt($ch, CURLOPT_POSTFIELDS,$params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
$results = curl_exec($ch);
curl_close($ch);
$results = json_decode($results,true);
//print_r($results);
//exit;
$ref= trim($results['order']['ref']);
$url= trim($results['order']['url']);
if (empty($ref) || empty($url)) {
	echo "ghjhgj";exit;
}else{
	 return $results;
}
		
        
//        $paypal_detail=DB::table('paypal_details')->where('id','1')->first();
//        $header = array(
//            "X-PAYPAL-SECURITY-USERID:$paypal_detail->user_id",
//            "X-PAYPAL-SECURITY-PASSWORD : $paypal_detail->password",
//            "X-PAYPAL-SECURITY-SIGNATURE : $paypal_detail->signature",
//            "X-PAYPAL-REQUEST-DATA-FORMAT : JSON",
//            "X-PAYPAL-RESPONSE-DATA-FORMAT :JSON",
//            "X-PAYPAL-APPLICATION-ID:$paypal_detail->app_id" );
//
//        //$url="https://svcs.sandbox.paypal.com/AdaptivePayments/Pay?actionType=PAY&clientDetails.applicationId=APP-80W284485P519543T&clientDetails.ipAddress=192.168.1.113&senderEmail=paypal-business@dibdaa.com&currencyCode=USD&receiverList.receiver(0).amount=135.00&receiverList.receiver(0).email=paypalbusiness@dibdaa.com&requestEnvelope.errorLanguage=en_US&returnUrl=https://www.techcronus.com/staging/Dibdaa/www/&cancelUrl=https://www.techcronus.com/staging/Dibdaa/www/";
//
//        $createPacket = array(
//            "actionType" =>"PAY",
//            "currencyCode" => "USD",
//            "receiverList" => array(
//                "receiver" => $r->receiver_arr,
//            ),
//            "returnUrl" => config('app.frontend_url')."paymentsuccess/UqGVdpWVM0Xcjsw05X8uv4KdAaoQVw77",
//            "cancelUrl" => config('app.frontend_url'),
//            "requestEnvelope" => array(
//                "errorLanguage" => "en_US",
//                "detailLevel" => "ReturnAll",
//            ),
//        );
//        $apiUrl = 'https://svcs.sandbox.paypal.com/AdaptivePayments/';
//        $ch = curl_init();
//        curl_setopt($ch, CURLOPT_URL, $apiUrl.'Pay');
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
//        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
//        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($createPacket));
//        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
//        $response = json_decode(curl_exec($ch),true);
//        return $response;
    }
    //Buyer Payment to Multiple Seller
    function callPaypalApi(Request $r){
//        echo $r;
//        exit;
        $paypal_detail=DB::table('paypal_details')->where('id','1')->first();
        
        $header = array(
            "X-PAYPAL-SECURITY-USERID:paypal-facilitator_api1.dibdaa.com",
            "X-PAYPAL-SECURITY-PASSWORD :5H8P9XPNHPWAZ5D6",
            "X-PAYPAL-SECURITY-SIGNATURE :ASV57ivVN4A960WA9t1PMtwKn0F9AEOMAZ8zo3Mz52Qa4wBOZt2CO2BS",
            "X-PAYPAL-REQUEST-DATA-FORMAT :JSON",
            "X-PAYPAL-RESPONSE-DATA-FORMAT :JSON",
            "X-PAYPAL-APPLICATION-ID:APP-80W284485P519543T");
        
//        $header = array(
//            "X-PAYPAL-SECURITY-USERID:$paypal_detail->user_id",
//			"X-PAYPAL-SECURITY-PASSWORD : $paypal_detail->password",
//			"X-PAYPAL-SECURITY-SIGNATURE : $paypal_detail->signature",
//			"X-PAYPAL-REQUEST-DATA-FORMAT : JSON",
//			"X-PAYPAL-RESPONSE-DATA-FORMAT :JSON",
//			"X-PAYPAL-APPLICATION-ID:$paypal_detail->app_id" );

//        $url="https://svcs.sandbox.paypal.com/AdaptivePayments/Pay?actionType=PAY&clientDetails.applicationId=APP-80W284485P519543T&clientDetails.ipAddress=192.168.1.113&senderEmail=paypal-business@dibdaa.com&currencyCode=USD&receiverList.receiver(0).amount=135.00&receiverList.receiver(0).email=paypalbusiness@dibdaa.com&requestEnvelope.errorLanguage=en_US&returnUrl=https://www.techcronus.com/staging/Dibdaa/www/&cancelUrl=https://www.techcronus.com/staging/Dibdaa/www/";

        $createPacket = array(
            "actionType" =>"PAY",
            "currencyCode" => "USD",
            "receiverList" => array(
                "receiver" => $r->receiver_arr,
            ),
            "returnUrl" => config('app.frontend_url')."/ordersuccess/123465895",
            "cancelUrl" => config('app.frontend_url'),
            "requestEnvelope" => array(
                "errorLanguage" => "en_US",
                "detailLevel" => "ReturnAll",
            ),
        );
//        print_r($createPacket);
//        exit;
        
//        echo $apiUrl = 'https://svcs.sandbox.paypal.com/AdaptivePayments/';
        $apiUrl = 'https://www.sandbox.paypal.com/checkoutnow?token=';
        
        
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $apiUrl);
//        curl_setopt($ch, CURLOPT_URL, $apiUrl.'Pay');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($createPacket));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        $response = json_decode(curl_exec($ch),true);
//        echo $response;
//        exit;
//        
//        echo $response;
        return $response;
    }

    function PaypalPaymentDetail(Request $r){
        $paypal_detail=DB::table('paypal_details')->where('id','1')->first();

        $header = array(
            "X-PAYPAL-SECURITY-USERID:$paypal_detail->user_id",
            "X-PAYPAL-SECURITY-PASSWORD : $paypal_detail->password",
            "X-PAYPAL-SECURITY-SIGNATURE : $paypal_detail->signature",
            "X-PAYPAL-REQUEST-DATA-FORMAT : JSON",
            "X-PAYPAL-RESPONSE-DATA-FORMAT :JSON",
            "X-PAYPAL-APPLICATION-ID:$paypal_detail->app_id" );

        //$url="https://svcs.sandbox.paypal.com/AdaptivePayments/Pay?actionType=PAY&clientDetails.applicationId=APP-80W284485P519543T&clientDetails.ipAddress=192.168.1.113&senderEmail=paypal-business@dibdaa.com&currencyCode=USD&receiverList.receiver(0).amount=135.00&receiverList.receiver(0).email=paypalbusiness@dibdaa.com&requestEnvelope.errorLanguage=en_US&returnUrl=https://www.techcronus.com/staging/Dibdaa/www/&cancelUrl=https://www.techcronus.com/staging/Dibdaa/www/";

        $createPacket = array(
           "payKey"=>$r->pay_key,
            "requestEnvelope" => array(
                "errorLanguage" => "en_US",
                "detailLevel" => "ReturnAll",
            ),
        );
        $apiUrl = 'https://svcs.sandbox.paypal.com/AdaptivePayments/';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $apiUrl.'PaymentDetails');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($createPacket));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        $response = json_decode(curl_exec($ch),true);
        return $response;
    }

    function emailForm(){
            return view('paypal/email_verification');
    }

    function loginWithPaypal(Request $r)
    {
        $strGetValue = $r->code;
        $strGetCodePaypalLoginDetails = $strGetValue;

        if ($strGetCodePaypalLoginDetails != '') {
            // Change this curl_init url according to your environment.
            $ch = curl_init( "https://api.sandbox.paypal.com/v1/identity/openidconnect/tokenservice" );
            $flag_result = 1;
            curl_setopt_array( $ch,
                array(
                    CURLOPT_POST           => 1,
                    CURLOPT_POSTFIELDS     => 'client_id=ATVjqdeYq7hOrl0BgZIxMQc9sMxdU34_5qxXR2SBE1Um1pzp6jclMbX0yKKMm6RVOqCnGWJoZ8kCK4b5&client_secret=EENFWEK8HDETPzmgbrN1vWramp7ShaB6Go8dNJdusa57IXEytca6Q8YcNYh-gFUSVDpeFbkNgpAIBPaB&grant_type=authorization_code&code='.$strGetCodePaypalLoginDetails,
                    CURLOPT_RETURNTRANSFER => 1
                )
            );
            $arrResponse = curl_exec($ch);

            if ( $arrResponse === false ) {
                $arrResponseToken = 'Curl error: ' . curl_error($ch);
                $flag_result = 0;

            } else{

                //Operation completed without any errors
                $arrResponse = json_decode($arrResponse);
                $strAccess_Token = $arrResponse->{'access_token'};

                // Change this curl_init url according to your environment.
                $chToken = curl_init( "https://api.sandbox.paypal.com/v1/identity/openidconnect/userinfo/?schema=openid&access_token=" .$strAccess_Token );

                curl_setopt_array( $chToken,
                    array(
                        CURLOPT_RETURNTRANSFER => 1
                    )
                );

                $arrResponseToken = curl_exec($chToken);

                if ( $arrResponseToken === false ) {
                    $arrResponseToken = 'Curl error: ' . curl_error($chToken);
                    $flag_result = 0;
                }
            }
        }

        /* I have added this details on session because I wanted to use that details into the another action.
        As per your requirement you can use the array ($arrResponseToken).*/
       // $_SESSION['SET_PAYPAL_USER_DATA'] = $arrResponseToken;
        return $arrResponseToken;
    }

    function verifyPaypalEmail(Request $r)
    {
//        var_dump(function_exists('curl_version'));
//    phpinfo();
//    exit;
//        echo 'test';
//        
//        if  (in_array  ('curl', get_loaded_extensions())) {
// 
//        echo "CURL is available on your web server";
// 
//    }  else {
//        echo "CURL is not available on your web server";
//    }
//        
//        exit;

        $paypal_detail=DB::table('paypal_details')->where('id','1')->first();
        // create a new cURL resource
$ch = curl_init();

$ppUserID = "paypal-facilitator_api1.dibdaa.com"; //Take it from   sandbox dashboard for test mode or take it from paypal.com account in production mode, help: https://developer.paypal.com/docs/classic/api/apiCredentials/
$ppPass = "5H8P9XPNHPWAZ5D6"; //Take it from sandbox dashboard for test mode or take it from paypal.com account in production mode, help: https://developer.paypal.com/docs/classic/api/apiCredentials/
$ppSign = "ASV57ivVN4A960WA9t1PMtwKn0F9AEOMAZ8zo3Mz52Qa4wBOZt2CO2BS"; //Take it from sandbox dashboard for test mode or take it from paypal.com account in production mode, help: https://developer.paypal.com/docs/classic/api/apiCredentials/
$ppAppID = "APP-80W284485P519543T"; //if it is sandbox then app id is always: APP-80W284485P519543T
//$sandboxEmail = "********************"; //comment this line if you want to use it in production mode.It is just for sandbox mode


//$emailAddress = "sb-bj3y47982010@personal.example.com"; //The email address you wana verify
$emailAddress = $r->paypal_email; //The email address you wana verify

//parameters of requests
$nvpStr = 'emailAddress='.$emailAddress.'&matchCriteria=NONE';

// RequestEnvelope fields
$detailLevel    = urlencode("ReturnAll");
$errorLanguage  = urlencode("en_US");
$nvpreq = "requestEnvelope.errorLanguage=$errorLanguage&requestEnvelope.detailLevel=$detailLevel&";
$nvpreq .= "&$nvpStr";
curl_setopt($ch, CURLOPT_POSTFIELDS, $nvpreq);

$headerArray = array(
"X-PAYPAL-SECURITY-USERID:$ppUserID",
"X-PAYPAL-SECURITY-PASSWORD:$ppPass",
"X-PAYPAL-SECURITY-SIGNATURE:$ppSign",
"X-PAYPAL-REQUEST-DATA-FORMAT:NV",
"X-PAYPAL-RESPONSE-DATA-FORMAT:JSON",
"X-PAYPAL-APPLICATION-ID:$ppAppID",
//"X-PAYPAL-SANDBOX-EMAIL-ADDRESS:$sandboxEmail" //comment this line in production mode. IT IS JUST FOR SANDBOX TEST 
);

$url="https://svcs.sandbox.paypal.com/AdaptiveAccounts/GetVerifiedStatus";
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headerArray);
$paypalResponse = curl_exec($ch);
return $paypalResponse;   //if you want to see whole PayPal response then uncomment it.
curl_close($ch);

//$data = json_decode($paypalResponse);
//print_r($data);
        
        exit;
        
        
        
        //print_r($paypal_detail);
        //exit;
        $header = array(
            "X-PAYPAL-SECURITY-USERID:paypal-facilitator_api1.dibdaa.com",
            "X-PAYPAL-SECURITY-PASSWORD :5H8P9XPNHPWAZ5D6",
            "X-PAYPAL-SECURITY-SIGNATURE :ASV57ivVN4A960WA9t1PMtwKn0F9AEOMAZ8zo3Mz52Qa4wBOZt2CO2BS",
            "X-PAYPAL-REQUEST-DATA-FORMAT :JSON",
            "X-PAYPAL-RESPONSE-DATA-FORMAT :JSON",
            "X-PAYPAL-APPLICATION-ID:APP-80W284485P519543T" );
//        $header = array(
//            "X-PAYPAL-SECURITY-USERID:$paypal_detail->user_id",
//            "X-PAYPAL-SECURITY-PASSWORD : $paypal_detail->password",
//            "X-PAYPAL-SECURITY-SIGNATURE : $paypal_detail->signature",
//            "X-PAYPAL-REQUEST-DATA-FORMAT : JSON",
//            "X-PAYPAL-RESPONSE-DATA-FORMAT :JSON",
//            "X-PAYPAL-APPLICATION-ID:$paypal_detail->app_id" );

//        $API_Endpoint = "https://svcs.sandbox.paypal.com/AdaptiveAccounts/GetVerifiedStatus";
//        $API_Endpoint = "https://api.sandbox.paypal.com/nvp";
        $API_Endpoint = "https://api-3t.sandbox.paypal.com/nvp";

        $ret['error_new']='';
        $payLoad["emailAddress"]=$r->paypal_email;
        $payLoad["matchCriteria"]="NONE";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $API_Endpoint);
        curl_setopt($ch, CURLOPT_VERBOSE, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_SSLVERSION, 6);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payLoad));
        $response = curl_exec($ch);
//        $response = json_decode(curl_exec($ch),true);
        return $response;
    }
}
