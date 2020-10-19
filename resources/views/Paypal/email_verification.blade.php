
<?php
// create a new cURL resource
$ch = curl_init();

$ppUserID = "paypal-facilitator_api1.dibdaa.com"; //Take it from   sandbox dashboard for test mode or take it from paypal.com account in production mode, help: https://developer.paypal.com/docs/classic/api/apiCredentials/
$ppPass = "5H8P9XPNHPWAZ5D6"; //Take it from sandbox dashboard for test mode or take it from paypal.com account in production mode, help: https://developer.paypal.com/docs/classic/api/apiCredentials/
$ppSign = "ASV57ivVN4A960WA9t1PMtwKn0F9AEOMAZ8zo3Mz52Qa4wBOZt2CO2BS"; //Take it from sandbox dashboard for test mode or take it from paypal.com account in production mode, help: https://developer.paypal.com/docs/classic/api/apiCredentials/
$ppAppID = "APP-80W284485P519543T"; //if it is sandbox then app id is always: APP-80W284485P519543T
//$sandboxEmail = "********************"; //comment this line if you want to use it in production mode.It is just for sandbox mode

//$emailAddress = "sunil@rudrainnovatives.com"; //The email address you wana verify
$emailAddress = "sb-bj3y47982010@personal.example.com"; //The email address you wana verify

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
//echo $paypalResponse;   //if you want to see whole PayPal response then uncomment it.
curl_close($ch);

$data = json_decode($paypalResponse);
print_r($data);


?>


<?php exit; ?>

<span id='lippButton'></span>
<script src='https://www.paypalobjects.com/js/external/api.js'></script>
<script>
    paypal.use( ['login'], function (login) {
        login.render ({
            "appid":"ATVjqdeYq7hOrl0BgZIxMQc9sMxdU34_5qxXR2SBE1Um1pzp6jclMbX0yKKMm6RVOqCnGWJoZ8kCK4b5",
            "authend":"sandbox",
            "scopes":"profile email phone address https://uri.paypal.com/services/paypalattributes",
            "containerid":"lippButton",
            "locale":"en-us",
            "returnurl":"http://192.168.1.123/dibdaa/public/index.php/api/pay/paypal-email-verification"
        });
    });
</script>