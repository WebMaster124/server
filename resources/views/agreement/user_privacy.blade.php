
<!doctype html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../images/favicon.png" type="image/x-icon">
    <title><?php echo $page_title; ?></title>
    
</head>
<body style="background-color:#ededed; margin:0 auto; padding:0;">
<center>
    <h1><?php echo 'Dibdaa FZE'; ?></h1>
    <h2><?php echo $page_title; ?></h2>
    <p> <?php echo $page_content; ?></p>
    <p style="color:red;"> This agreement has been digitally signed,<br> and does not require a physical signature.</p>

    
    <p style="margin-top: 30px;">Agreed & Digitally Signed by: <br> <strong><?php echo $user_name; ?></strong> of <?php echo $nationality; ?> Nationality 
        <br> On <?php echo $date; ?>, from IP <?php // echo $ip_address; ?>  in <?php echo $country; ?>.</p>
    
    
<!--    <table style="margin-top: 40px;" border="0">
<tbody>
<tr style="height: 35px;">
<td style="height: 35px;padding-left: 10px;padding-right: 10px;">
<p>&nbsp; </p>
    <p>Agreed & Digitally Signed by: <br> <strong><?php // echo $user_name; ?></strong> of <?php // echo $nationality; ?> Nationality 
        <br> On <?php // echo $date; ?>, from IP <?php // echo $ip_address; ?>  in <?php // echo $country; ?>.</p>
<p>&nbsp; </p>
</td>


</tr>
</tbody>
</table>-->
    
    
<!--<table style="width:100%;margin-top: 450px;" border="0">
<tbody>
<tr style="height: 35px;">
<td style="width: 305px; height: 35px;padding-left: 10px;padding-right: 10px;">
<p>&nbsp; </p>
<p> <strong>Nationality:</strong><?php // echo $nationality; ?></p>
<p>&nbsp; </p>
</td>

<td style="width: 308px; height: 35px;padding-left: 10px;padding-right: 10px;text-align:right;">
<p>&nbsp; </p>
<p> <strong>Signature</strong></p>
<p>&nbsp; </p>
</td>

</tr>
<tr style="height: 35px;">

<td style="width: 305px; height: 35px;padding-left: 10px;padding-right: 10px;">
<p>&nbsp; </p>
<p> <strong>Date:</strong><?php // echo $date; ?></p>
<p>&nbsp; </p>
</td>

<td style="width: 308px; height: 35px;padding-left: 10px;padding-right: 10px;text-align:right;">
<p>&nbsp; </p>
<p><?php // echo $user_name; ?></p>
<p>&nbsp; </p>
</td>
</tr>
</tbody>
</table>-->
</center>

</body>
</html>