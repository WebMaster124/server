
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Coupon Code </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view coupon code</li>
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
                <h5 class="subtitle mb5"><div class="row">
                        <div class="col-md-3">
                            <a href="{{action('CouponController@couponCodeForm')}}" class="btn btn-primary">Add Coupon Code</a> </div>
                    </div>
                </h5>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>

                            <th>Code</th>
                            <th>Discount</th>
                            <th>Code Type</th>
                            <th>Count</th>
                            <th>Remaining Count</th>
                            <th>Used Count</th>
                            <th>Created Date</th>
                            <th>Expiry Date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($codes as $code){ ?>
                        <tr>
                            <td>{{ $code->code }}</td>
                            <td>{{ $code->discount }}</td>
                            <td>{{ $code->code_type }}</td>
                            <td>{{ $code->coupon_cnt }}</td>
                            <td>{{ $code->remaining_cnt }}</td>
                            <td>{{ $code->coupon_cnt - $code->remaining_cnt  }}</td>
                            <td>{{date('M d,Y g:i:s',strtotime($code->created_date))}}</td>
                            <td>{{date('M d,Y',strtotime($code->expiry_date))}}</td>
                            <td><a href="edit-coupon-code/<?php echo $code->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-coupon-code/<?php echo $code->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a></td>
                        </tr>
                        <?php } ?>
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
            aaSorting : [[6, 'desc']]
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
