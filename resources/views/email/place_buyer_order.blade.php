<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="100%">
    <tr>
        <td>
            <div id="template_header_image">
                <p align=center style='margin-top:0in;text-align:center;margin-bottom:10px'><a href="index.html"
                                                                                               target="_blank"><img border=0
                                                                                                                    id="_x0000_i1025"
                                                                                                                    src="{{\Illuminate\Support\Facades\URL::asset('/images/Dibdaa.png')}}"
                                                                                                                    alt=Dibdaa></a>
                    <o:p></o:p>
                </p>
            </div>
        </td>
    </tr>
</table>
<div align=center>
    <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=600
           style='width:7.25in;background:#FDFDFD;border:solid gainsboro 1.0pt;border-left:solid gainsboro 1.0pt;
   box-shadow: 0 1px 4px rgba(0,0,0,0.1) !important;border-radius: 3px !important'
           id="template_container">
        <tr>
            <td>
                <div align=center>
                    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600
                           style='width:8.25in;background:#F47321;border-radius: 3px 3px 0 0 !important'
                           id="template_header">
                        <tr>
                            <td style='padding:27.0pt .5in 27.0pt .5in' id="header_wrapper">
                                <h1 style='margin:0in;margin-bottom:.0001pt;line-height:150%;text-shadow:
      0 1px 0 #F47321;-webkit-font-smoothing: antialiased'><span
                                            style='font-size:22.5pt;line-height:150%;font-family:"Calibri","sans-serif";
      color:white;font-weight:normal'><?php echo $email_template->heading; ?><o:p></o:p></span></h1>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</div>
<div align=center>
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
           style='width: 800px;border:solid gainsboro 1.0pt;border-left:solid gainsboro 1.0pt;
   box-shadow: 0 1px 4px rgba(0,0,0,0.1) !important;border-radius: 3px !important'>
        <tr>
            <td valign=top style='padding:.5in .5in 0in .5in'>
                <h2 style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:13.5pt;
        margin-left:0in;line-height:130%'><span style='font-size:14.5pt;
        line-height:130%;font-family:"Calibri","sans-serif";'>
                   <?php echo $email_template->content; ?>
                        <o:p></o:p></span></h2>
                <h2 style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:13.5pt;
        margin-left:0in;line-height:130%'><span style='font-size:14.5pt;
        line-height:130%;font-family:"Calibri","sans-serif";color:#F47321'>Order
        #{{ $order_id }} ({{ $date }})<o:p></o:p></span></h2>
                <div style='margin-bottom:30.0pt'>
                </div>
            </td>
        </tr>
    </table>
</div>
<div align=center>
<table class=MsoNormalTable border=1 cellspacing=0
       cellpadding=0
       width="795"
       style='width:795px;border:solid #E4E4E4 1.0pt'>
    <thead>
    <tr>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Image<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Product<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Quantity<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Price<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Ship Type<o:p></o:p></span></b></p>
        </td>
    </tr>
    </thead>
    @if($cart=='cart')
        @foreach($seller as $sel)
            <tr>
                <td colspan=3
                    style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Seller Name :{{$sel->display_name}}<o:p></o:p></span></b> </p>
                </td>
                <td colspan=2
                    style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Payment Type :{{($payment_status=='unpaid'?'Cash On Delivery':'PayPal') }}<o:p></o:p></span></b> </p>
                </td>
            </tr>
             @foreach($product_info as $product)
                    @if($product->seller_id == $sel->id)
                <tr>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt;
              word-wrap: break-word'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>
                            <img style="height: 100px;width: 150px" height="100" width="150" border=0
                                 id=""
                                 src='{{\Illuminate\Support\Facades\URL::asset("/images/product/".$product->product_id."/M/".$product->photos)}}' alt=Dibdaa>
                    <o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt;
              word-wrap: break-word'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product->title}}
                            <o:p></o:p></span></p>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>
                            @foreach($product->specification as $key=> $s)
                              {{$key}} :  {{ $s[0] }} <br>
                            @endforeach
                            <o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product->quantity}}
                            <o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><span
                                class=woocommerce-price-currencysymbol><span
                                    style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                                class=woocommerce-price-amountamount><span
                                    style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product->price}}</span></span><span style='font-family:"Calibri","sans-serif";
              color:#737373'>(discount {{$product->discount}}%)<o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>@foreach($product->shipment_type as $s)
                                {{ $s }}
                            @endforeach
                            <o:p></o:p></span></p>
                </td>
            </t r>
                @endif
            @endforeach
        @endforeach
        @else
        <tr>
            <td colspan=3
                style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
               <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Seller Name :{{$seller->display_name}}<o:p></o:p></span></b></p>
            </td>
            <td colspan=2
                style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Payment Type :{{($payment_status=='unpaid'?'Cash On Delivery':'PayPal') }}<o:p></o:p></span></b> </p>
            </td>
        </tr>
            <tr>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt;
              word-wrap: break-word'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>
                            <img style="height: 100px;width: 150px" height="100" width="150" border=0
                                 id=""
                                 src='{{\Illuminate\Support\Facades\URL::asset("/images/product/$product_info->id/M/$product_info->photos")}}'                          alt=Dibdaa>
                    <o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt;
              word-wrap: break-word'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product_info->title}}
                            <o:p></o:p></span></p>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>
                            @foreach($product_info->specification as $key => $s)
                                {{$key}} :  {{ $s }} <br>
                            @endforeach
                            <o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product_info->quantity}}
                            <o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><span
                                class=woocommerce-price-currencysymbol><span
                                    style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                                class=woocommerce-price-amountamount><span
                                    style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product_info->price}}</span></span><span style='font-family:"Calibri","sans-serif";
              color:#737373'>(discount {{$product_info->discount}}%)<o:p></o:p></span></p>
                </td>
                <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                    <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>@foreach($product_info->shipment_type as $s)
                                                                {{ $s }}
                                                        @endforeach
                            <o:p></o:p></span></p>
                </td>
            </tr>
    @endif
    <tr>
        <td colspan=4
            style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Coupon Code:<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><span
                        class=woocommerce-price-currencysymbol><span
                            style='font-family:"Calibri","sans-serif";color:#737373'></span></span><span
                        class=woocommerce-price-amount><span
                            style='font-family:"Calibri","sans-serif";
          color:#737373'>
                        @if(!empty($coupon_code))
                            {{ $coupon_code->code }} <br>
                            {{ $coupon_code->code_type }} <br>
                            {{ $coupon_code->discount }} <br>
                            @else
                            -
                            @endif
                    </span></span><span style='font-family:"Calibri","sans-serif";
          color:#737373'><o:p></o:p></span></p>
        </td>
    </tr>
    <tr>
        <td colspan=4
            style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Subtotal:<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><span
                        class=woocommerce-price-currencysymbol><span
                            style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                        class=woocommerce-price-amount><span
                            style='font-family:"Calibri","sans-serif";
          color:#737373'>{{$total}}</span></span><span style='font-family:"Calibri","sans-serif";
          color:#737373'><o:p></o:p></span></p>
        </td>
    </tr>
    {{--<tr>
        <td colspan=2
            style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Shipping:<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><span
                        class=woocommerce-price-currencysymbol><span
                            style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                        class=woocommerce-price-amount><span
                            style='font-family:"Calibri","sans-serif";
          color:#737373'>Free</span></span><span style='font-family:"Calibri","sans-serif";
          color:#737373'>&nbsp;</span><span style='font-size:10.0pt;font-family:
          "Calibri","sans-serif";color:#737373'></span><span
                        style='font-family:"Calibri","sans-serif";color:#737373'> <o:p></o:p></span>
            </p>
        </td>
    </tr>--}}
    <tr>
        <td colspan=4
            style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Total:<o:p></o:p></span></b></p>
        </td>
        <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
            <p class=MsoNormal><span
                        class=woocommerce-price-currencysymbol><span
                            style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                        class=woocommerce-price-amount><span
                            style='font-family:"Calibri","sans-serif";
          color:#737373'>{{$total}}</span></span><span style='font-family:"Calibri","sans-serif";
          color:#737373'> </span><span style='font-family:"Calibri","sans-serif";color:#737373'> <o:p></o:p></span>
            </p>
        </td>
    </tr>
</table>
</div>
<div align=center>
<table class=MsoNormalTable border=0 cellspacing=0
       cellpadding=0
       width="795" style='width:795px'>
    <tr>
        <td width="50%" valign=top
            style='width:50.0%;padding:0in 0in 0in 0in'>
            <h2 style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:
          13.5pt;margin-left:0in;line-height:130%'><span style='font-size:14.5pt;
          line-height:130%;font-family:"Calibri","sans-serif";color:#F47321'>Billing
          address<o:p></o:p></span></h2>
            <div style='mso-element:para-border-div;border:solid #E4E4E4 1.0pt;
          padding:9.0pt 9.0pt 0in 9.0pt'>
                
                <address
                        style='border:none;padding:0in'><span
                            style='color:#737373'>{{$shipping_info->ship_name}}
                        <br>
                        {{$shipping_info->ship_address}}
                        <br>
                        {{$shipping_info->ship_city}}
                        ,{{$shipping_info->ship_pincode}}
                        <br>
                        {{$shipping_info->ship_state}}
                        <br>
                        {{$shipping_info->ship_country}}
                        <o:p></o:p></span></address>
                <p style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:13.0pt;
          margin-left:0in;border:none;padding:0in'><i><span style='color:#737373'> {{$shipping_info->mobile}}
                            <o:p></o:p></span></i>
                </p>
            </div>
        </td>
        <td width="50%" valign=top
            style='width:50.0%;padding:0in 0in 0in 0in'>
            <h2 style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:
          13.5pt;margin-left:0in;line-height:130%'><span style='font-size:14.5pt;
          line-height:130%;font-family:"Calibri","sans-serif";color:#F47321'>Shipping
          address<o:p></o:p></span></h2>
            <div style='mso-element:para-border-div;border:solid #E4E4E4 1.0pt;
          padding:9.0pt 9.0pt 0in 9.0pt'>
                <address style='border:none;padding:0in'><span
                            style='color:#737373'>{{$shipping_info->ship_name}}
                        <br>
                        {{$shipping_info->ship_address}}
                        <br>
                        {{$shipping_info->ship_city}}
                        ,{{$shipping_info->ship_pincode}}
                        <br>
                        {{$shipping_info->ship_state}}
                        <br>
                        {{$shipping_info->ship_country}}
                        <o:p></o:p></span></address>
                <p style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:13.0pt;
          margin-left:0in;border:none;padding:0in'><i><span style='color:#737373'> {{$shipping_info->mobile}}
                            <o:p></o:p></span></i>
                </p>
            </div>
        </td>
    </tr>
</table>
</div>
@if($email_template->banner_image != '')
    <div align=center>
        <table width="795" class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='width: 795px;border:solid gainsboro 1.0pt;border-left:solid gainsboro 1.0pt;
       box-shadow: 0 1px 4px rgba(0,0,0,0.1) !important;border-radius: 3px !important'>
            <tr>
                <td>
                    <div id="template_header_image" style="width: 49pc;">
                        <p align=center style='margin-top:0in;text-align:center;margin-bottom:10px'>
                            <img  border=0   style="width: 100%;"   src="{{\Illuminate\Support\Facades\URL::asset('/images/email_image/'.$email_template->banner_image)}}"   alt=Dibdaa>
                            <o:p></o:p>
                        </p>
                    </div>
                </td>
            </tr>
        </table>
    </div>
@endif
<div align=center>
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
           width="434" style='width:434px'>
        <tr>
            <td colspan="2">
                <h1 style='margin:0in;margin-bottom:.0001pt;line-height:150%;-webkit-font-smoothing: antialiased'><span style='font-size:22.5pt;line-height:150%;font-family:"Calibri","sans-serif";
      color:black;font-weight:normal'> Dibs anywhere with the Dibdaa app  <o:p></o:p></span></h1>
            </td>
        </tr>
        <tr>
            <td valign=top style='' width="210px">
                <a href="{{config('app.app_store_link')}}"  target="_blank">
                    <img style="height: 75px; width: 210px" height="75" width="210" border=0  id="_x0000_i1025" src="{{\Illuminate\Support\Facades\URL::asset('/images/AppStore.png')}}" alt=Dibdaa>
                </a>
            </td>
            <td valign=top width="210px">
                <a href="{{config('app.google_play_link')}}"  target="_blank">
                    <img style="height: 75px;width: 210px" height="75" width="210" border=0   id="_x0000_i1025" src="{{\Illuminate\Support\Facades\URL::asset('/images/Google_Play.png')}}" alt=Dibdaa>
                </a>
            </td>
        </tr>
    </table>
</div>



