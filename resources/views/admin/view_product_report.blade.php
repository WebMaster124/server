
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Reported Product </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view reported product</li>
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
                            <th>Image</th>
                            <th>Product SKU</th>
                            <th>Product Name</th>
                            <th>Reported By</th>
                            <th>Seller Name</th>
                            <th>Reasons</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($product_reports as $product_report){
                            $img=unserialize($product_report->photos);
                            ?>
                        <tr>
                            <td><img height="auth" width="150" src='{{asset("/images/product/$product_report->product_id/M/$img[0]")}}'></td>
                            <td>{{$product_report->product_sku}}</td>
                            <td><a title="{{$product_report->title}}" href="view-product-details/{{$product_report->product_id}}">{{ mb_strimwidth($product_report->title,0,25,'...') }}</a></td>
                            <td><a href="buyer-details/{{$product_report->user_id}}">{{ $product_report->first_name .' '.$product_report->last_name }}</a> </td>
                            <td><a href="seller-details/{{$product_report->seller_id}}">{{ $product_report->seller_f_name .' '.$product_report->seller_l_name }}</a> </td>
                            <td><?php $reasons=unserialize($product_report->report_reasons); ?>
                               <table class="table table-hover">
                                   <tr>
                                       <td>Report Category</td>
                                       <td>{{$reasons[0]}}</td>
                                   </tr>
                                   <tr>
                                       <td>Reason for Report</td>
                                       <td>{{$reasons[1]}}</td>
                                   </tr>
                                   <tr>
                                       <td>Detailed Reason</td>
                                       <td>{{$reasons[2]}}</td>
                                   </tr>
                                   <tr>
                                       <td>Other</td>
                                       <td>{{$product_report->reason}}</td>
                                   </tr>
                               </table>
                                    {{-- @foreach($reasons as $r)
                                        {{$r}} <br>
                                    @endforeach--}}
                            </td>
                            <td>
                                <a class="btn btn-success btn-both-width" href="delete-report/{{$product_report->id}}">Allow Product</a>
                                <a class="btn btn-danger btn-both-width" href='delete-product/{{$product_report->product_id}}/{{$product_report->id}}'>Delete Product</a>
                            </td>
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

