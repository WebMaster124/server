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
      color:white;font-weight:normal'>Your ticket  status is {{ $ticket_info->ticket_status }}<o:p></o:p></span></h1>
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
           width="600" style='width:600px'>
        <tr>
            <td valign=top style='padding:.5in .5in 0in .5in'>
                <p style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:12.0pt;
        margin-left:0in;line-height:150%'><span style='font-size:12.5pt;
        line-height:150%;font-family:"Calibri","sans-serif";color:#737373'>Hi {{ $user_info->first_name }} {{ $user_info->last_name }} ({{$user_info->display_name}}), <o:p></o:p></span></p>
                <p style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:12.0pt;
        margin-left:0in;line-height:150%'><span style='font-size:12.5pt;
        line-height:150%;font-family:"Calibri","sans-serif";color:#737373'>Your
        ticket status is {{ $ticket_info->ticket_status }}.<o:p></o:p></span></p>
                <h2 style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:13.5pt;
        margin-left:0in;line-height:130%'><span style='font-size:14.5pt;
        line-height:130%;font-family:"Calibri","sans-serif";color:#F47321'>Ticket Id  :
        #{{ $ticket_info->ticket_id }}<o:p></o:p></span></h2>
                <div style='margin-bottom:30.0pt'>
                </div>
            </td>
        </tr>
    </table>
</div>
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