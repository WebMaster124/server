<?php
namespace App\Http\Controllers;
use App\Http\Requests;
use Illuminate\Http\Request;
use Validator;
use URL;
use Session;
use Redirect;
use Input;
/** All Paypal Details class **/
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ExecutePayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;


use SoapClient;
class ShippingController extends Controller
{
//    private $_api_context;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        parent::__construct();
        
        /** setup PayPal api context **/
//        $paypal_conf = \Config::get('paypal');
//		//print_r($paypal_conf);exit;
//        $this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['client_id'], $paypal_conf['secret']));
//        $this->_api_context->setConfig($paypal_conf['settings']);
    }
    public function index()
    {
        return view('shipping/Shipment-Creation-COD-Domestic-Request.xml');
//        return view(asset('shipping/Shipment-Creation-COD-Domestic-Request.xml'));
    }
    public function getShippingResult()
    {
//        echo 'dftrthgjfgj2234234';exit;
        return view('shipping');
    }
    public function verifyEmail()
    {
//        echo 'dftrthgjfgj2234234';exit;
        return view('Paypal/email_verification');
    }
    public function create()
    {
        $soapClient = new SoapClient('https://ws.aramex.net/ShippingAPI.V2/Shipping/Service_1_0.svc?wsdl');
//echo '<pre>';
//print_r($soapClient->__getFunctions());
$params = array(
    'Shipments' => array(
        'Shipment' => array(
                     'Shipper' => array(
                'Reference1' => 'Ref 111111',
                'Reference2' => 'Ref 222222',
                'AccountNumber' => '173077',// Fill Account Number //Mandatory
                'PartyAddress' => array(
                    'Line1' => 'Aramex Umm Ramool Air Port Road',//Mandatory
                    'Line2' => '',
                    'Line3' => '',
                    'City' => 'Dubai',//Mandatory
                    'StateOrProvinceCode' => '',
                    'PostCode' => '',
                    'CountryCode' => 'AE'//Mandatory
                ) ,
                'Contact' => array(
                    'Department' => '',
                    'PersonName' => 'Michael',//Mandatory
                    'Title' => '',
                    'CompanyName' => 'Aramex',//Mandatory
                    'PhoneNumber1' => '5555555',//Mandatory
                    'PhoneNumber1Ext' => '125',
                    'PhoneNumber2' => '',
                    'PhoneNumber2Ext' => '',
                    'FaxNumber' => '',
                    'CellPhone' => '07777777',//Mandatory
                    'EmailAddress' => 'michael@aramex.com',//Mandatory
                    'Type' => ''
                ) ,
            ) ,

                 'Consignee' => array(
                'Reference1' => '333333',
                'Reference2' => '',
                'AccountNumber' => '',
                'PartyAddress' => array(
                    'Line1' => '15 ABC St',//Mandatory
                    'Line2' => '',
                    'Line3' => '',
                    'City' => 'Dubai',//Mandatory
                    'StateOrProvinceCode' => '',
                    'PostCode' => '',
                    'CountryCode' => 'AE'//Mandatory
                ) ,

                'Contact' => array(
                    'Department' => '',
                    'PersonName' => 'Consignee Name',//Fill Customer Name//Mandatory
                    'Title' => '',
                    'CompanyName' => 'Consignee Company Name', //Fill Customer Name//Mandatory
                    'PhoneNumber1' => '97148707777',//Mandatory
                    'PhoneNumber1Ext' => '',
                    'PhoneNumber2' => '',
                    'PhoneNumber2Ext' => '',
                    'FaxNumber' => '',
                    'CellPhone' => '971556893100',//Mandatory
                    'EmailAddress' => 'test@aramex.com',
                    'Type' => ''
                ) ,
            ) ,

            'ThirdParty' => array(
                'Reference1' => '',
                'Reference2' => '',
                'AccountNumber' => '',
                'PartyAddress' => array(
                    'Line1' => '',
                    'Line2' => '',
                    'Line3' => '',
                    'City' => '',
                    'StateOrProvinceCode' => '',
                    'PostCode' => '',
                    'CountryCode' => ''
                ) ,
                'Contact' => array(
                    'Department' => '',
                    'PersonName' => '',
                    'Title' => '',
                    'CompanyName' => '',
                    'PhoneNumber1' => '',
                    'PhoneNumber1Ext' => '',
                    'PhoneNumber2' => '',
                    'PhoneNumber2Ext' => '',
                    'FaxNumber' => '',
                    'CellPhone' => '',
                    'EmailAddress' => '',
                    'Type' => ''
                ) ,
            ) ,
            'Reference1' => 'Shpt 0001',
            'Reference2' => '',
            'Reference3' => '',
            'ForeignHAWB' => '',
            'TransportType' => 0,
            'ShippingDateTime' => time() ,
            'DueDate' => time() ,
            'PickupLocation' => 'Reception',
            'PickupGUID' => '',
            'Comments' => 'Shpt 0001',
            'AccountingInstrcutions' => '',
            'OperationsInstructions' => '',
            'Details' => array(
                'Dimensions' => array(
                    'Length' => 10,
                    'Width' => 10,
                    'Height' => 10,
                    'Unit' => 'cm',
                ) ,
                'ActualWeight' => array(
                    'Value' => 0.5,//Mandatory
                    'Unit' => 'Kg'
                ) ,
                'ProductGroup' => 'DOM',
                'ProductType' => 'CDS',
                'PaymentType' => 'P',//Dont Change
                'PaymentOptions' => 'ACCT', //Dont change
                'Services' => '',//For cash on delivery shipment use 'CODS' as value
                'NumberOfPieces' => 1,
                'DescriptionOfGoods' => 'Laptop',//Mandatory to Fill
                'GoodsOriginCountry' => 'AE',
                'CashOnDeliveryAmount' => array(
                    'Value' => 0, // For Cash on delivery shipment use value grater than 0
                    'CurrencyCode' => 'AED'
                ) ,
                'InsuranceAmount' => array(
                    'Value' => 0,
                    'CurrencyCode' => 'AED'
                ) ,
                'CollectAmount' => array(
                    'Value' => 0,
                    'CurrencyCode' => 'AED'
                ) ,
                'CashAdditionalAmount' => array(
                    'Value' => 0,
                    'CurrencyCode' => 'AED'
                ) ,
                'CashAdditionalAmountDescription' => '',
                'CustomsValueAmount' => array(
                    'Value' => 0,
                    'CurrencyCode' => 'AED'
                ) ,
                'Items' => array(
				)
            ) ,
        ) ,
    ) ,
    'ClientInfo' => array(
        'AccountCountryCode' => 'AE',
        'AccountEntity' => 'DXB',
        'AccountNumber' => '173077',
        'AccountPin' => '331432',
        'UserName' => 'atash@dibdaa.com',
        'Password' => 'System101$',
        'Version' => 'v1.0'
    ) ,
    'Transaction' => array(
        'Reference1' => '001',
        'Reference2' => '',
        'Reference3' => '',
        'Reference4' => '',
        'Reference5' => '',
    ) ,
    'LabelInfo' => array(
        'ReportID' => 9729,
        'ReportType' => 'URL',
    ) ,
);

$params['Shipments']['Shipment']['Details']['Items'][] = array(
    'PackageType' => 'Box',
    'Quantity' => 1,
    'Weight' => array(
        'Value' => 0.5,
        'Unit' => 'Kg',
    ) ,
    'Comments' => 'Docs',
    'Reference' => ''
);
//print_r($params);
try
{
    $auth_call = $soapClient->CreateShipments($params);
    echo '<pre>';
    print_r($auth_call);
    die();
}
catch(SoapFault $fault)
{
    die('Error : ' . $fault->faultstring);
}
    }
    
    
  }