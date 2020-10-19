@include('admin.include.sidebar')
<!-- leftpanel -->
<style>
    .filter{
        top: 38px;
        position: relative;
        left: 20%;
        z-index: 10;
    }
</style>
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Order </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view order</li>
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
                <div class="table-responsive">
                    <div class="filter">
                        <div class="col-md-4">
                            <div class="col-md-4" style="margin-top: 5px;">Search by date:</div>
                            <div class="col-md-6">
                                <input type="text" readonly class="form-control" placeholder="Enter date" id="datepicker" name="start_date">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="col-md-4" style="margin-top: 5px;">Search by status:</div>
                            <div class="col-md-6">
                                <select id="firstDropdownId">
                                    <option disabled>Select Status</option>
                                    <option selected value="">All </option>
                                    <option value="completed">Complete</option>
                                    <option value="unpaid">Unpaid</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Buyer Name</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Quantity</th>
                            <th>Order Date</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($orders as $order){ ?>
                        <tr>
                            <td><a href="order-detail/{{$order->order_id}}">#{{$order->order_id}}</a></td>
                            <td><a href="buyer-details/{{$order->buyer_id}}">{{ $order->buyer_f_name .' '.$order->buyer_l_name }}</a> </td>
                            <td>{{$order->title}}</td>
                            <td><a href="seller-details/{{$order->seller_id}}">{{ $order->seller_f_name .' '.$order->seller_l_name }}</a> </td>
                            <td>{{$order->quantity}}</td>
                            <td>{{date('D-M-d,Y',strtotime($order->created_date))}}</td>
                            <td class="capitalize-text">{{$order->status}}</td>
                        </tr>
                        <?php  } ?>
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

        jQuery("#datepicker").focus( function()
        {
            $(this).val("");
            var table  =  jQuery('#table2').dataTable();
            table.fnFilter( $('#datepicker').val(),'5',true);
        } );

        jQuery('#datepicker').datepicker({
            dateFormat: 'D-M-dd,yy',
            maxDate: 0
        });

        jQuery('#table1').dataTable();

        jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers",
            aaSorting : [[5, 'desc']],
            "bFilter": true
        });


        // Drop down status search
        var table  =  jQuery('#table2').dataTable();
        $('#firstDropdownId').on('change', function () {
                table.fnFilter( $('#firstDropdownId').val(),'6',true);
            }
        );

        var table  =  jQuery('#table2').dataTable();
        $('#datepicker').change(function () {
                table.fnFilter( $('#datepicker').val(),'5',true);
            }
        );

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

