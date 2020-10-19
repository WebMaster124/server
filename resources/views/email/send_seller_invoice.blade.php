<div style="font-family:sans-serif">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td style="text-align: center;">
                <div style="margin-bottom: 30px;">
                    <img src="{{\Illuminate\Support\Facades\URL::asset('/images/Dibdaa.png')}}" width="200" height="auto" style="width: 200px; display:block; margin:20px auto;">
                </div>
            </td>
        </tr>
    </table>
    {{--<p><small>The link is valid only for one use and up to 24 hours.</small></p>--}}
</div>
<div align=center>
    <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=600
           style='width:7.25in;background:#FDFDFD;border:solid gainsboro 1.0pt;border-left:solid gainsboro 1.0pt;
   box-shadow: 0 1px 4px rgba(0,0,0,0.1) !important;border-radius: 3px !important' id="template_container">
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
                <div style='margin-bottom:30.0pt'>
                </div>
            </td>
        </tr>
    </table>
</div>
@if($email_template->banner_image != '')
    <div align=center>
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 style='width: 50%;border:solid gainsboro 1.0pt;border-left:solid gainsboro 1.0pt;
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