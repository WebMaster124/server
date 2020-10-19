
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
    <style>
        .filter{
            top: 38px;
            position: relative;
            left: 20%;
            z-index: 10;
        }
    </style>
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Relist Products list </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view Relist products list</li>
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
				
<!--				 <div class="form-group row">
                 <a href="pending-product/export/xlsx" class="btn btn-success">Export to .xlsx</a>
				 <a href="pending-product/export/csv" class="btn btn-primary">Export to .csv</a>
				 <a href="pending-product/download-jsonfile" class="btn btn-danger">Export to .txt</a>
				 
             </div>-->
                    <div class="filter">
                        <div class="col-md-4">
                            <div class="col-md-4" style="margin-top: 5px;">Search by date:</div>
                            <div class="col-md-6">
                                <input type="text" readonly class="form-control" placeholder="Enter date" id="datepicker" name="start_date">
                            </div>
                        </div>
                    </div>
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>All<div class="ckbox ckbox-default">
                                    <input type="checkbox" class="checkBoxClass"  id="ckbCheckAll">
                                    <label for="ckbCheckAll"></label>
                                </div>
                            </th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price (AED)</th>
                            <th>Selling Type</th>
                            <th>Daily Deal</th>
                            <th>Renew Duration</th>
                            <th>Since Date</th>
                            <th>Approve Date</th>
                            <th>Relist Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($products as $product){ ?>
                        <tr>
                            <td>
                                <div class="ckbox ckbox-default">
                                    <input type="checkbox" class="checkBoxClass" name="product_id" value="{{$product->id}}" id="{{$product->id}}">
                                    <label for="{{$product->id}}"></label>
                                </div>
                            </td>
                            <td> <a title="{{$product->title }}" href="view-product-details/{{$product->id}}">{{ $product->id  }}</a> </td>
                            <td> <a title="{{$product->title }}" href="view-product-details/{{$product->id}}">{{ mb_strimwidth($product->title,0,25,'...')  }}</a> </td>
                            <td><?php
                                $id=$product->category_id;
                                $categoryName=\App\Http\Controllers\CategoryController::viewParentCategoryName($id);
                                echo $categoryName->category_name;
                                ?></td>
                            <td>{{$product->quantity}}</td>
                            <td>
                                @if($product->selling_type=='Fixed price')
                                    {{$product->price}}
                                @else
                                    <?php $lastBid=\App\Http\Controllers\ProductController::lastBid($product->id); ?>
                                    @if($lastBid)
                                        {{$lastBid->bid_price}}
                                    @else
                                        {{$product->min_price}}
                                    @endif
                                @endif
                            </td>
                            <td>{{$product->selling_type}}</td>
                            <td>{{$product->daily_deal}}</td>
                            <td>{{$product->renew_duration}}</td>
                            <td>{{date('D-M-d,Y H:i:s',strtotime($product->created_date))}}</td>
                            @if($product->approve_date !='')
                                <td>{{date('D-M-d,Y H:i:s',strtotime($product->approve_date))}}</td>
                            @else
                                <td> <center> - </center></td>
                            @endif
                            <td>
                                <?php
                                if($product->status=='5'){
                                    echo "<div class=\"alert well-sm alert-info\"><center>Pending</center></div> &nbsp &nbsp";
                                }
                                ?>
                            </td>
                            <td>
                                <?php
                                if($product->status=='5'){
                                    echo "<center> <a href='change-product-status/$product->id/1/view-relist-product'>Approve</a> </center> &nbsp";
                                    echo "<center><a href='deactive-product-form/$product->id/2/view-relist-product'>Reject</a></center>";
                                }
                                ?>
                            </td>
                        </tr>
                        <?php  }?>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6">
                    <div class="col-md-3">
                      <form action="{{action('ProductController@approveBulkProductStatus')}}" method="post">
                          <input type="hidden" name="_token" value="{{ csrf_token() }}">
                          <input type="hidden" id="ids" name="ids" value="">
                          <input type="hidden" name="status" value="1">
                          <input type="hidden" name="slug" value="view-pending-product">
                          <button class="btn btn-primary" id="approve-btn" disabled>Bulk Approve</button>
                      </form>
                    </div>
                    <div class="col-md-3">
                      <form action="{{action('ProductController@rejectBulkProductStatus')}}" method="post">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <input type="hidden" id="rids" name="rids" value="">
                            <input type="hidden" name="status" value="2">
                            <input type="hidden" name="slug" value="view-pending-product">
                            <button class="btn btn-primary" id="remove-btn" disabled>Bulk Reject</button>
                      </form>
                    </div>
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

        $(".checkBoxClass").removeAttr('checked');
        $("#ckbCheckAll").click(function () {
            $(".checkBoxClass").prop('checked', $(this).prop('checked'));
            var approve = [];
            $.each($("input[name='product_id']:checked"), function(){
                approve.push($(this).val());
            });

            $('#ids').val(approve);
            $('#rids').val(approve);
            if(approve.length>0) {
                $('#approve-btn').removeAttr('disabled');
                $('#remove-btn').removeAttr('disabled');
            }
            else {
                $('#approve-btn').attr('disabled', true);
                $('#remove-btn').attr('disabled', true);
            }
        });

        $("input[name='product_id']").click(function(){
            var approve = [];
            $.each($("input[name='product_id']:checked"), function(){
                approve.push($(this).val());
            });
             $('#ids').val(approve);
            $('#rids').val(approve);
            if(approve.length>0) {
                $('#approve-btn').removeAttr('disabled');
                $('#remove-btn').removeAttr('disabled');
            }
            else {
                $('#approve-btn').attr('disabled', true);
                $('#remove-btn').attr('disabled', true);
            }
        });

        jQuery("#datepicker").focus( function()
        {
            $(this).val("");
            var table  =  jQuery('#table2').dataTable();
            table.fnFilter( $('#datepicker').val(),'7',true);
        });

        jQuery('#datepicker').datepicker({
            dateFormat: 'D-M-dd,yy',
            maxDate: 0
        });

        jQuery('#table1').dataTable();

        var x=  jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers",
            "bSort" : false,
            "bFilter": true
        });

        // Chosen Select
        jQuery("select").chosen({
            'min-width': '100px',
            'white-space': 'nowrap',
            disable_search_threshold: 10
        });
        // Drop down status search
        var table  =  jQuery('#table2').dataTable();
        $('#firstDropdownId').on('change', function () {
                table.fnFilter( $('#firstDropdownId').val(),'10',true);
            }
        );

        var table  =  jQuery('#table2').dataTable();
        $('#datepicker').change(function () {
                table.fnFilter( $('#datepicker').val(),'7',true);
            }
        );

        //Delete row in a table
        jQuery('.delete-row').click(function() {
            var c = confirm("Continue delete?");
            if (c)
                jQuery(this).closest('tr').fadeOut(function() {
                    jQuery(this).remove();
                });
            return false;
        });

        //Show action upon row hover
        jQuery('.table-hidaction tbody tr').hover(function() {
            jQuery(this).find('.table-action-hide a').animate({
                opacity: 1
            });
        }, function(){
            jQuery(this).find('.table-action-hide a').animate({
                opacity: 0
            });
        });
    });
</script>
</body>
</html>

