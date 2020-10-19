

<?php
//echo 'sample';
//echo $agree;
//            echo $privacy;
            
            $agree = explode(',',$agree);
        $privacy = explode(',',$privacy);
        
//        echo '<pre>';
//        print_r($agree);
//        echo '</pre>';
//        echo '<pre>';
//        print_r($privacy);
//        echo '</pre>';
        
        $file=[];
        $filename=[];
        
        foreach($agree as $agrees){
            if($agrees!='null'){
            $agree_value = '../../../agreement/user_agreement/'.$agrees.'.pdf';
            
            array_push($filename,$agrees);
            array_push($file,$agree_value);    
            }
            
        }
        foreach($privacy as $privacys){
            if($privacys!='null'){
            $privacy_value = '../../../agreement/user_privacy/'.$privacys.'.pdf';
             array_push($filename,$privacys);
            array_push($file,$privacy_value);
            }
        }
//        $filename = implode(',',$filename);
//        print_r($file);
//       exit;
       
       ?>


<?php
//if(isset($_POST['files']))
//{
//    print_r($_POST['files']);
//    exit;
//$error = ""; //error holder
//if(isset($_POST['createzip']))
//{
//$post = $_POST; 
//$file_folder = "files/"; // folder to load files
//if(extension_loaded('zip'))
//{ 
//// Checking ZIP extension is available
//if(isset($post['files']) and count($post['files']) > 0)
//{ 
//// Checking files are selected
//$zip = new ZipArchive(); // Load zip library 
//$zip_name = time().".zip"; // Zip name
//if($zip->open($zip_name, ZIPARCHIVE::CREATE)!==TRUE)
//{ 
// // Opening zip file to load files
//$error .= "* Sorry ZIP creation failed at this time";
//}
//foreach($post['files'] as $file)
//{ 
//$zip->addFile($file_folder.$file); // Adding files into zip
//}
//$zip->close();
//if(file_exists($zip_name))
//{
//// push to download the zip
//header('Content-type: application/zip');
//header('Content-Disposition: attachment; filename="'.$zip_name.'"');
//readfile($zip_name);
//// remove zip file is exists in temp path
//unlink($zip_name);
//}
//
//}
//else
//$error .= "* Please select file to zip ";
//}
//else
//$error .= "* You dont have ZIP extension";
//}
//}
?>
<!DOCTYPE html>
<html style="background: black;">
<head>
<!--<title>Create a Zip File Using PHP and Download Multiple Files</title>-->
</head>
<body>
<!--<h1>Create a Zip File Using PHP and Download Multiple Files</h1>-->
<!--<form name="zips" action="" method="post">-->
<!--<input type="checkbox" id="checkAll" /><label>Select All</label><br />-->
<div class="document"  style="display: none;">

<input type="hidden" id="checkAll" value="<?php echo count($file); ?>" />
<?php foreach($file as $files){
//    $agree_value = '../../../agreement/user_agreement/'.$agree_value.'.pdf';
//    $agree_value = '../../../agreement/user_agreement/'.$agree_value.'.pdf';
    ?>
    <!--<input class="chk" type="checkbox" name="files[]" value="<?php echo $files; ?>"/><label>PDF File</label><br />-->
    
    <a class="btn btn-primary a_argee" href="<?php echo $files; ?>"  target="_blank" download>User Argeement</a>
    <?php
} ?>
<a href="{{action('TermsController@viewTerms')}}" id="page"><i class="fa fa-caret-right"></i>Download Document</a>
</div>
<div class="process" style="margin-top: 200px;margin-left: 600px;">
    <img class="loader" alt="paypal" src="http://onlinetnt.com/images/ajax-loader_transparent.gif" style="margin-left: 20px;">
    <p style="color: white;">Downloading file</p>
</div>

<!--<input class="chk" type="checkbox" name="files[]" value="SampleFile.pdf"/><label>PDF File</label><br />
<input class="chk" type="checkbox" name="files[]" value="SampleFile.docx"/><label>Word File</label><br />
<input class="chk" type="checkbox" name="files[]" value="AllPHPTricks.png"/><label>Image File</label><br />-->
<!--<input type="submit" id="submit" name="createzip" value="Download All Seleted Files" >-->
<!--</form>-->

<br /><br />
<!--<a href="https://www.allphptricks.com/create-a-zip-file-using-php-and-download-multiple-files/">Tutorial Link</a> <br /><br />-->
<!--For More Web Development Tutorials Visit: <a href="https://www.allphptricks.com/">AllPHPTricks.com</a>-->

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript">
    
//    $.noConflict();
    $(window).load(function(){
        
        var val = $('#checkAll').val();
for(var i =0;i<val; i++ ){
    $('.a_argee')[i].click();
}
//    $('#page')[0].click();
    setTimeout(function(){ $('#page')[0].click(); }, 3000);
});
    
    
//$('#submit').prop("disabled", true);
//$("#checkAll").change(function () {
//      $("input:checkbox").prop('checked', $(this).prop("checked"));
//	  $('#submit').prop("disabled", false);
//	  if ($('.chk').filter(':checked').length < 1){
//			$('#submit').attr('disabled',true);}
//});
//
//$('input:checkbox').click(function() {
//        if ($(this).is(':checked')) {
//			$('#submit').prop("disabled", false);
//        } else {
//		if ($('.chk').filter(':checked').length < 1){
//			$('#submit').attr('disabled',true);}
//		}
//});		
</script>
</body>
</html>






<?php exit; ?>




<a class="btn btn-primary a_argee" href="../../<?php echo $agree; ?>.pdf" id="a_argee" target="_blank" download>User Argeement</a>
            <a class="btn btn-primary a_argee" href="../../<?php echo $privacy; ?>.pdf" id="a_argee" target="_blank" download>User Argeement</a>
            
            
            <input type="checkbox" name="checkdoc[]"  value="1" id="argeement" required/> <label>User Argeement</label><br>
            
            
            
                                            <input type="checkbox" name="checkdoc[]"  value="2" id="policy" required/> <label>User Privacy Notice</label><br>
            
<?php
       
        
        
        $zipname = 'enter_any_name_for_the_zipped_file.zip';
            $zip = new ZipArchive;
            $zip->open($zipname, ZipArchive::CREATE);
            foreach ($agree as $file) {
                echo $file = $file.'.pdf';
              $zip->addFile($file);
            }
            $zip->close();
        
             header('Content-Type: application/zip');
            header('Content-disposition: attachment; filename='.$zipname);
            header('Content-Length: ' . filesize($zipname));
            readfile($zipname);
exit;
?>
