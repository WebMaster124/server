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
    <h3>Hi {{ $receiver_info->first_name }},</h3>
    <p>{{$sender_info->display_name}} Send message to you</b> .</p>
    <p>&nbsp;</p>
    <p>Message : {{ $sender_info->msg }}</p>
    <p>&nbsp;</p>
    {{--<p><small>The link is valid only for one use and up to 24 hours.</small></p>--}}
</div>
