<form id="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr">
    <input type="hidden" name="cmd" value="_cart">
    <input type="hidden" name="upload" value="1">
    <input type="hidden" name="business" value="paypalbusiness@dibdaa.com">
    <input type='hidden' name='item_name_1' value='F Gear Luxur Brown 25 liter Laptop Backpack'>
    <input type='hidden' name='item_number_1' value='57'>
    <input type='hidden' name='quantity_1' value='1'>
    <input type='hidden' name='amount_1' value='26.73'>
    <input type='hidden' name='discount_1' value='0.73'>
    <input type='hidden' name='item_name_2' value='Mens Sport Watch Canvas Analog Quartz Waterproof Fahion Military Watches Black'>
    <input type='hidden' name='item_number_2' value='71'>
    <input type='hidden' name='quantity_2' value='2'>
    <input type='hidden' name='amount_2' value='5.4'>
    <input type='hidden' name='discount_2' value='0.73'>
    <input type="hidden" name="shipping_1" value="0.00">
    <!-- after payment -->
    <input type="hidden" name="return" id="return" value="http://192.168.1.113:8100/#/ordersuccess/153122861619" />
    <!-- Cancel payment -->
    <input type="hidden" name="cancel_return" id="cancel_return" value="http://192.168.1.113:8100/#/ordersuccess" />
    <br>
    <input name="submit" id="paypalbtn" type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/blue-rect-paypalcheckout-34px.png" value="PayPal" >

</form>