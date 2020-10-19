
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Resolution Center </h2>
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
                <div class="clearfix mb30"></div>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th style="display: none">Created Date</th>
                            <th>Ticket Id</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Seller Name</th>
                            <th>Buyer Name</th>
                            <th>Question</th>
                            <th>Requested by</th>
                            {{--<th>Status</th>--}}
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($resolution_center as $center){ ?>
                        <tr>
                            <td style="display: none">{{$center->created_date}}</td>
                            <td><a href="view-ticket/{{$center->ticket_id}}" target="_blank">#{{$center->ticket_id}}</a>
                               {{-- <a id="redirect"  href="" target="_blank">#{{$center->ticket_id}}</a></td>--}}
                            <td><?php $product_images=unserialize($center->photos); ?>
                                <img class="admin_reg_list_img" height="auto" width="150"
                                     src="{{ asset("images/product/$center->product_id/M/$product_images[0]") }}"/>
                            </td>
                            <td> <a href="view-product-details/{{$center->product_id}}">{{ $center->title }}</a> </td>
                            <td><a href="seller-details/{{$center->seller_id}}">{{ $center->seller_f_name .' '.$center->seller_l_name }}</a> </td>
                            <td><a href="buyer-details/{{$center->buyer_id}}">{{ $center->buyer_f_name .' '.$center->buyer_f_name }}</a> </td>
                            <td>{{$center->question}}</td>
                            <td class="capitalize-text">{{$center->requested_by}}</td>
{{--                            <td> <a href="view-resolution-center/{{$center->id}}">Reply</a> </td></td>--}}
                        </tr>
                        <?php  }?>
                        </tbody>
                    </table>
                </div>
                <!-- table-responsive -->
            </div>
            <!-- panel-body -->
        </div>
        <!-- panel -->
    </div>
    <!-- contentpanel -->
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
            aaSorting : [[0, 'desc']]
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

        $('#redirect').click(function(){
            alert('call');
            var v={sender_id: 24, receiver_id: 17, product_id: 47};
            $('#redirect').attr('href','http://192.168.1.113:8100/#/ViewMessageDetail/'+v);
        });

    });
</script>
</body>

</html>

