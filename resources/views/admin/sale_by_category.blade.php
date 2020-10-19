
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
        <h2> Item Listed By Category  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
    </div>
<?php 
	if(isset($_GET['month']) && $_GET['month'] != ""){
		$monthNum  = $_GET['month'];
		$month_name = date("F", mktime(0, 0, 0, $monthNum, 10)); 
	}else{
		$month_name ='-';
	}
	
	?>
	<input type="hidden" name="month" id="month_name" value="<?php echo $month_name; ?>">
	<input type="hidden" name="year" id="year" value="<?php echo (isset($_GET['year']) && $_GET['year'] != "")? $_GET['year']:'-'; ?>">
	<input type="hidden" name="startdate" id="startdate" value="<?php echo (isset($_GET['start_date']) && $_GET['start_date'] != "")? $_GET['start_date']:'-'; ?>">
	<input type="hidden" name="enddate" id="enddate" value="<?php echo (isset($_GET['end_date']) && $_GET['end_date'] != "")? $_GET['end_date']:'-'; ?>">
   
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
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Parent Category</th>
                            <th>Category</th>
                            <th>Seller Name</th>
                            <th>Quantity</th>
                            <th>Buyer Name</th>
                            <th>Value (AED)</th>
                            <th>Address</th>
                            <th>Approve Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($parent_categorys as $parent_category)
                            <?php
                            foreach ($parent_category->product as $product){
                            ?>

                            <tr>
                                <td> <a title="{{$product->title }}" href='{{url("admin/view-product-details", $product->id)}}' >{{ mb_strimwidth($product->title,0,25,'...')  }}</a> </td>
                                <td>{{$product->parent_cat_name}}</td>
                                <td><?php
                                    $id=$product->category_id;
                                    $categoryName=\App\Http\Controllers\CategoryController::viewParentCategoryName($id);
                                    echo $categoryName->category_name;
                                    ?></td>
                                <td>{{$product->first_name.' '.$product->last_name}}</td>
                                <td>{{$product->quantity}}</td>
                                <td>{{$product->b_f_name.' '.$product->b_l_name}}</td>
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
                                <td width="20">{{$product->product_address}}</td>
                                @if($product->approve_date !='')
                                    <td>{{date('M d,Y',strtotime($product->approve_date))}}</td>
                                @else
                                    <td> <center> - </center></td>
                                @endif
                            </tr>
                            <?php  }?>
                        @endforeach
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
		var fmonth = $('#month_name').val();
		var fyear = $('#year').val();
		var fstartdate = $('#startdate').val();
		var fenddate = $('#enddate').val();
        jQuery("#datepicker").focus( function()
        {
            $(this).val("");
            var table  =  jQuery('#table2').dataTable();
            table.fnFilter( $('#datepicker').val(),'6',true);
        });

        jQuery('#datepicker').datepicker({
            dateFormat: 'D-M-dd,yy',
            maxDate: 0
        });

        jQuery('#table1').dataTable();

        var x=  jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers",
            "bSort" : false,
            "bFilter": true,
			dom: 'Bfrtip',
        
		buttons: [
            {
                extend: 'collection',
                text: 'Export',
                buttons: [
							{
							extend: 'excelHtml5',
							title: 'Data Export - Item Sale By Category'
						    },
							{
							extend: 'csvHtml5',
							title: 'Data Export - Item Sale By Category'
						    },
							{
                            extend: 'pdfHtml5',
							//messageTop: 'Data Export - View Products list',
							filename:'Data Export - Item Sale By Category',
							title: null,
                            customize: function ( doc ) {
								doc.content.splice( 0, 0, {
									marginTop:  10,
									alignment: 'center',
									columns: [
											{
												text: ''
											}
										]	
								});
								doc.content.splice( 0, 0, {
									marginTop:  10,
									alignment: 'center',
									table: {
											
											widths: ['*', '*', '*', '*'],
											body: [
												[{text:'Year',	alignment: 'center'},{text:'Month',	alignment: 'center'},{text:'Start Date',	alignment: 'center'},{text:'End Date',	alignment: 'center'} ],
												[{text:fyear,alignment: 'center'},{text:fmonth,alignment: 'center'},{text:fstartdate,alignment: 'center'},{text:fenddate,alignment: 'center'}]
											]
											}
										
									
								});	 
								doc.content.splice( 0, 0, {
									marginTop:  10,
									alignment: 'center',
									columns: [
											{
												text: 'Data Export - Item Sale By Category',bold: true
											}
										]	
								});
                                doc.content.splice( 0, 0, {
                                    margin: [ 0, 0, 0, 10 ],
									alignment: 'center',
									image:'data:image/png;base64,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'

										
						        });
                            }
                        }
					
                ],
                dropdown: true
            }
        ]
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
            table.fnFilter($('#firstDropdownId').val(),'10',true);
        });

        var table  =  jQuery('#table2').dataTable();
        $('#datepicker').change(function () {
                table.fnFilter( $('#datepicker').val(),'6',true);
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

