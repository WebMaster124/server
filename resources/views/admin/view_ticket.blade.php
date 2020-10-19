
@include('admin.include.sidebar')
<!-- leftpanel -->
<style>
    mytext{
        border:0;padding:10px;background:whitesmoke;
    }
    .text{
        width:100%;display:flex;flex-direction:column;
    }
    .text > p:first-of-type{
        width:100%;margin-top:0;margin-bottom:auto;line-height: 13px;font-size: 12px;
    }
    .text > p:last-of-type{
        width:100%;text-align:right;color:silver;margin-bottom:-7px;margin-top:auto;
    }
    .text.text-r.admin-r > p:last-of-type{
        width:100%;text-align:left;color:silver;margin-bottom:-7px;margin-top:auto;
    }
    .text-l{
        float:left;padding-right:10px;padding-top: 10px;
    }
    .text-r{
        float:right;padding-left:10px;padding-top: 10px;text-align: right;
    }
    .avatar{
        display:flex;
        justify-content:center;
        align-items:center;

        float:left;
        padding-right:10px;
    }
    .macro{
        margin-top:8px;width:100%;border-radius:5px;padding:5px;display:flex;
    }
    .msj-rta{
        float:right;background:whitesmoke;
    }
    .msj{
        float:left;background:white;
    }
    .frame{
        height:450px;
        overflow:hidden;
        padding:0;
    }
    .frame > div:last-of-type{
        position:absolute;bottom:0;width:100%;display:flex;
    }
    body > div > div > div:nth-child(2) > span{
        background: whitesmoke;padding: 10px;font-size: 21px;border-radius: 50%;
    }
    body > div > div > div.msj-rta.macro{
        margin:auto;margin-left:1%;
    }
    .frame ul {
        width:50%;
        background:#e0e0de;
        list-style-type: none;
        padding:18px;
        position:absolute;
        bottom:47px;
        flex-direction: column;
        top:0;
        overflow-y:scroll;
    }
    .msj:before{
        width: 0;
        height: 0;
        content:"";
        top:-5px;
        left:-14px;
        position:relative;
        border-style: solid;
        border-width: 0 13px 13px 0;
        border-color: transparent #ffffff transparent transparent;
    }
    .msj-rta:after{
        width: 0;
        height: 0;
        content:"";
        top:-5px;
        left:14px;
        position:relative;
        border-style: solid;
        border-width: 13px 13px 0 0;
        border-color: whitesmoke transparent transparent transparent;
    }
    input:focus{
        outline: none;
    }
    .
</style>
<div class="mainpanel">

@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Resolution Center  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view resolution center</li>
            </ol>
        </div>
    </div>

    <div class="contentpanel">
        @if(Session::has('message'))
            <div class="alert alert-warning">
                {{ Session::get('message') }}
            </div>
        @endif
    <!-- row -->
        <div class="panel panel-default">
            <div class="panel-body">
                <!-- table-responsive -->
                <div class="clearfix mb30">
                    <img class="img-circle"  width="100px" height="auto" src="{{asset('images/product/'.$thread[0]->product_id.'/S/'.$thread[0]->photos['0'])}}" />
                    <b style="font-size: 20px">{{$thread[0]->title}}</b>
                    <h4>{{$thread[0]->question}}</h4>
                </div>
                <br/>
                <div class="col-sm-9 frame">
                <ul>
                    <?php $i=0; ?>
                    @foreach($thread as $t)
                        @if($t->requested_by == 'buyer' || $t->requested_by == 'seller')
                    <li style="width:100%">
                        <div class="msj macro">
                            <div class="avatar">
                                @if($t->requested_by=='buyer')
                                    @if($t->b_pic=='')
                                        <img class="img-circle"  width="50px" height="50px" src="{{asset('images/user-placeholder.jpg')}}" />
                                    @else
                                        <img class="img-circle"  width="50px" height="50px" src="{{asset('images/user/'.$t->buyer_id.'/'.$t->b_pic)}}" />
                                    @endif
                                @elseif($t->requested_by=='seller')
                                    @if($t->s_pic=='')
                                        <img class="img-circle"  width="50px" height="50px" src="{{asset('images/user-placeholder.jpg')}}" />
                                    @else
                                        <img class="img-circle"  width="50px" height="50px" src="{{asset('images/user/'.$t->seller_id.'/'.$t->s_pic)}}" />
                                    @endif
                                @endif
                            </div>
                            <div class="text text-l">
                                @if($t->requested_by=='buyer')
                                    <b>{{$t->buyer_f_name.' '.$t->buyer_l_name }}(Buyer)</b>
                                @elseif($t->requested_by=='seller')
                                    <b>{{ $t->seller_f_name.' '.$t->seller_l_name }}(Seller)</b>
                                @endif
                                @if($i==0)
                                <p>{{$t->question}}</p>
                                @else
                                <p>{{$t->answer}}</p>
                                @endif
                            <?php $i=1; ?>
                                <p><small>{{$t->created_date}}</small></p>
                                </div>
                            </div>
                        </li>
                    @elseif($t->requested_by == 'admin')
                                <li style="width:100%;">
                                    <div class="msj-rta macro admin-msg">
                                        <div class="text text-r admin-r">
                                            <b>Admin (admin)</b>
                                            <p>{{$t->answer}}</p>
                                            <p><small>{{$t->created_date}}</small></p>
                                        </div>
                                        <div class="avatar admin-img" style="padding:0px 0px 0px 10px !important"><img class="img-circle" width="50px" height="50px" src="{{asset('images/user-placeholder.jpg')}}" /></div>
                                    </div>
                                </li>
                        @endif
                    @endforeach
                </ul>
                <div class="text-center">
                    <form action="{{ action('ResolutionCenterController@replyResolutionCenter') }}" method="post" enctype="multipart/form-data" style="width: 100%">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <input type="hidden" name="ticket_id" value="{{$thread[0]->ticket_id}}">
                        <input type="hidden" name="user_role" value="admin">
                        {{--<div class="input-group">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Button</button>
                                <button class="btn btn-outline-secondary" type="button">Button</button>
                            </div>
                        </div>--}}
                        <div>
                            <div class="col-sm-4" style="margin-bottom:10px">
                              <input class="form-control" name="reply" placeholder="Type a message"/>
                            </div>
                            <div class="col-sm-2">
                               <button class="btn btn-primary" type="submit"> Send Reply</button>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- table-responsive -->
            </div>
            <!-- panel-body -->
        </div>
        <!-- panel -->
    </div>
    <!-- contentpanel -->
    </div>
</div>
<!-- mainpanel -->
<!-- rightpanel -->
</section>
@include('admin.include.footer')
<script>
    jQuery(document).ready(function() {

        jQuery('#table1').dataTable();

        jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers",
            aaSorting : [[0, 'asc']]
        });

        // Chosen Select
        jQuery("select").chosen({
            'min-width': '100px',
            'white-space': 'nowrap',
            disable_search_threshold: 10
        });

        // Delete row in a table
        jQuery('.delete-row').click(function() {
            var c = confirm("Continue delete?");
            if (c)
                jQuery(this).closest('tr').fadeOut(function() {
                    jQuery(this).remove();
                });

            return false;
        });

        // Show aciton upon row hover
        jQuery('.table-hidaction tbody tr').hover(function() {
            jQuery(this).find('.table-action-hide a').animate({
                opacity: 1
            });
        }, function() {
            jQuery(this).find('.table-action-hide a').animate({
                opacity: 0
            });
        });

    });
</script>
</body>

</html>

