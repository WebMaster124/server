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
    <h3>Hi {{ $seller_info->first_name }},</h3>
    <p>{{$user_info->first_name}} {{$user_info->last_name}} ({{$user_info->display_name}}) want to contact you</b> .</p>
    <p>&nbsp;</p>
    <p>Message : {{ $user_info->msg }}</p>
    <p>&nbsp;</p>
    {{--<p><small>The link is valid only for one use and up to 24 hours.</small></p>--}}
    <div align=center>
        <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
               width="434" style='width:434px'>
            <tr>
                <h1 style='margin:0in;margin-bottom:.0001pt;line-height:150%;-webkit-font-smoothing: antialiased'><span
                            style='font-size:22.5pt;line-height:150%;font-family:"Calibri","sans-serif";
      color:black;font-weight:normal'> Dibs anywhere with the Dibdaa app  <o:p></o:p></span></h1>
                <td valign=top style=''>
                    <a href="{{config('app.app_store_link')}}"  target="_blank">
                        <img style="width: 210px;" border=0  id="_x0000_i1025" src="{{\Illuminate\Support\Facades\URL::asset('/images/AppStore.png')}}" alt=Dibdaa>
                    </a>
                </td>
                <td valign=top >
                    <a href="{{config('app.google_play_link')}}"  target="_blank">
                        <img border=0 style="width: 210px;"   id="_x0000_i1025" src="{{\Illuminate\Support\Facades\URL::asset('/images/Google_Play.png')}}" alt=Dibdaa>
                    </a>
                </td>
            </tr>
        </table>
    </div>
</div>
