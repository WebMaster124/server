@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Product Details  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <ol class="breadcrumb">
                <!--          <li><a href="index.php">Dashboard</a></li>-->
                <li class="active">View Product Details</li>
            </ol>
        </div>
    </div>
    <div class="contentpanel">
        <div class="row">
            <div class="col-md-12">
                <div class="panel table-panel viewdata-user">
                    <div class="panel-body">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#profile" data-toggle="tab"><strong>Product Details</strong></a></li>
                            <li><a href="#selling" data-toggle="tab"><strong>Price Details</strong></a></li>
                            <li><a href="#contact" data-toggle="tab"><strong>Seller Details</strong></a></li>
                            <li><a href="#fee" data-toggle="tab"><strong>Fee Details</strong></a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content mb30">
                            <div class="tab-pane active" id="profile">
                                <!--<div class="tab-pane" id="profile">-->
                                <div class="userview-data">

                                    <table class="table table-hover">
                                        <tbody>
                                        <tr>
                                            <td>Product Image:</td>
                                            <td> <?php $product_images=unserialize($product->photos); ?>
                                                @foreach($product_images as $product_image)
                                                    <img class="admin_reg_list_img" height="100" width="100"
                                                         src="{{ asset("images/product/$product->product_id/M/$product_image") }}"/>
                                                @endforeach
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Title:</td>
                                            @if($product->status==1)
                                                <td><a href="{{config('app.frontend_url')."viewItem/".$product->product_id}}">{{$product->title}}</a> </td>
                                            @else
                                                <td> {{$product->title}} </td>
                                            @endif
                                        </tr>
                                        <tr>
                                            <td>Sub title:</td>
                                            <td>{{$product->subtitle}}</td>
                                        </tr>
                                        <tr>
                                            <td>Category:</td>
                                            <td><?php
                                                $categoryName=\App\Http\Controllers\CategoryController::viewParentCategoryName($product->category_id);
                                                echo $categoryName->category_name;
                                                ?></td>
                                        </tr>
                                        <tr>
                                            <td>ISBN:</td>
                                            @if($product->isbn == "0" || $product->isbn == "")
                                                <td>Not Apply</td>
                                            @else
                                                <td>{{ $product->isbn}}</td>
                                            @endif
                                        </tr>
                                        <tr>
                                            <td>Item SKU:</td>
                                            <td> {{$product->product_sku}}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td><?php
                                                if($product->status=='2'){
                                                    echo "<div  style='width: 141px' class=\"alert well-sm alert-info\"><center>Pending</center></div>";
                                                }
                                                else if ($product->status == '1') {
                                                    echo "<div style=\"width: 141px;\" class=\"alert well-sm alert-success\"><center>Actived</center></div>";
                                                } else if ($product->status == '0') {
                                                    echo "<div style=\"width: 141px;\" class=\"alert well-sm alert-danger\"><center>Suspend</center></div>";
                                                }
                                                else if ($product->status == '9') {
                                                    echo "<div style=\"width: 141px;\" class=\"alert well-sm alert-danger\"><center>Deleted</center></div>";
                                                }else if($product->status=='7'){
                                                    echo "<div style='width: 141px;' class=\"alert well-sm alert-info\"><center>Schedule</center></div>";
                                                }
                                                ?></td>
                                        </tr>
                                        <tr>
                                            <td>Action:</td>
                                            <td><?php
                                                if($product->status=='2'){
                                                    echo "<div style='width: 141px'> <center> <a href='../change-product-status/$product->product_id/1/view-pending-product'>Approve</a> </center> </div> &nbsp";
                                                    echo "<div style='width: 141px'> <center><a href='../deactive-product-form/$product->product_id/2/view-pending-product'>Reject</a></center> </div>";
                                                }
                                                if($product->status=='1'){
                                                    echo "<div style=\"width: 141px;\" class=\"alert well-sm alert-danger\"> <a href='../deactive-product-form/$product->product_id/0/view-product'> <center>Suspend </center> </a> </div>";
                                                }
                                                else if($product->status=='0'){
                                                    echo "<div style=\"width: 141px;\" class=\"alert well-sm alert-success\" > <a href='../change-product-status/$product->product_id/1/view-product'><center>Activated </center> </a> </div>";
                                                }
                                                else if($product->status=='9'){
                                                    echo "<div style=\"width: 141px;\"  class=\"alert well-sm alert-danger\" > <center>Deleted </center></div>";
                                                }else if($product->status=='7'){
                                                    echo "<div style='width: 141px;' class=\"alert well-sm alert-warning\"><center>Waiting</center></div>";
                                                }
                                                ?></td>
                                        </tr>
                                        <tr>
                                            <td>Condition Description:</td>
                                            <td>  {{$product->condition_description}}</td>
                                        </tr>
                                        <tr>
                                            <td>Specification</td>
                                            <td>  <?php $specification=unserialize($product->specification);
                                            foreach ($specification as $s)
                                                foreach ($s as $k=>$s1){
                                                    echo $k  ." &nbsp &nbsp &nbsp : &nbsp &nbsp &nbsp ";
                                                    foreach ($s1 as $s2){
                                                        if(isset($s2))
                                                            echo $s2 .',';
                                                    }
                                                    echo "<br>";
                                                }
                                            ?>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="selling">
                                <table class="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td>Price:</td>
                                        <td> {{$product->price}}</td>
                                    </tr>
                                    @if($product->selling_type=='Auction style')
                                        <tr>
                                            <td>Last Bid:</td>
                                            <td>
                                            <?php $lastBid= \App\Http\Controllers\ProductController::lastBid($product->product_id);?>
                                                @if($lastBid)
                                                    {{$lastBid->bid_price}}
                                                @else
                                                    {{$product->min_price}}
                                                @endif
                                            </td>
                                        </tr>
                                    @endif
                                    <tr>
                                        <td>Quantity:</td>
                                        <td> {{$product->quantity}}</td>
                                    </tr>
                                    <tr>
                                        <td>Duration:</td>
                                        <td>{{$product->duration}}</td>
                                    </tr>
                                    <tr>
                                        <td>Selling Type:</td>
                                        <td>{{$product->selling_type}}</td>
                                    </tr>
                                    <tr>
                                        <td>Product Address:</td>
                                        <td>{{$product->product_address}}</td>
                                    </tr>
                                    <tr>
                                        <td>Ship To:</td>
                                        <td>{{$product->ship_to}}</td>
                                    <tr>
                                        <td>Shipment Type:</td>
                                        <td>
                                            <?php $shipment_type= unserialize($product->shipment_type); ?>
                                            @foreach($shipment_type as $s)
                                                {{$s}}
                                            @endforeach
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Days:</td>
                                        <td>{{$product->delivery_days}}</td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                            <div class="tab-pane" id="contact">
                                <table class="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td>Seller Name:</td>
                                        <td><a href="../seller-details/{{$product->user_id}}">{{ $product->first_name .' '.$product->last_name }}</a></td>
                                    </tr>
                                    <tr>
                                        <td>Business Mobile:</td>
                                        <td> {{$product->business_mobile}}</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail Address:</td>
                                        <td>{{$product->email}}</td>
                                    </tr>
                                    <tr>
                                        <td>Business Relationship:</td>
                                        <td>{{$product->business_relationship}}</td>
                                    </tr>
                                    <tr>
                                        <td>Bussiness Name:</td>
                                        <td>{{$product->business_name}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane" id="fee">
                                <table class="table table-hover">
                                    <tbody>
                                    <thead>
                                    <th></th>
                                    <th>YES</th>
                                    <th>NO</th>
                                    </thead>
                                       
                                        <tr>
                                            <td>Auto Renew:</td>
                                            <!--<td> {{$product->renew}}</td>-->
                                            <td> <?php if ($product->renew=='Yes'){ ?><i class="fa fa-check" style="color:green;font-size: 20px;"></i> <?php } else { echo '-'; } ?></td>
                                            <td> <?php if ($product->renew=='No'){ ?><i class="fa fa-times" aria-hidden="true" style="color:red;font-size: 20px;"></i> <?php } else { echo '-'; } ?> </td>
                                        </tr>
                                        <tr>
                                            <td>Season Deals:</td>
                                            <td> <?php if ($product->season_deal=='Yes'){ ?><i class="fa fa-check" style="color:green;font-size: 20px;"></i> <?php } else { echo '-'; } ?></td>
                                            <td> <?php if ($product->season_deal=='No'){ ?><i class="fa fa-times" aria-hidden="true" style="color:red;font-size: 20px;"></i> <?php } else { echo '-'; } ?> </td>
                                            <!--<td> {{$product->season_deal}}</td>-->
                                        </tr>
                                        <tr>
                                            <td>Daily Deals:</td>
                                            <!--<td> {{$product->daily_deal}}</td>-->
                                            <td> <?php if ($product->daily_deal=='Yes'){ ?><i class="fa fa-check" style="color:green;font-size: 20px;"></i> <?php } else { echo '-'; } ?></td>
                                            <td> <?php if ($product->daily_deal=='No'){ ?><i class="fa fa-times" aria-hidden="true" style="color:red;font-size: 20px;"></i> <?php } else { echo '-'; } ?> </td>
                                        </tr>
                                        
                                          <?php $fee_details=unserialize($product->fees_details);
//                                         echo '<pre>';
//                                         print_r($fee_details);echo '</pre>';
                                         
                                         foreach($fee_details as $key=>$value){
//                                             echo $key;echo '<br>';
//                                             echo $value;
//                                         print_r($value);
                                         if($key=='featured_fees'){
                                             ?>
                                        <tr>
                                            <td>Featured Fees:</td>
                                            <!--<td> {{$product->daily_deal}}</td>-->
                                            <td> <?php if ($value[0]!='0'){ echo $value[0]; } else { echo '-'; } ?></td>
                                            <td> <?php if ($value[0]=='0'){ echo '0'; } else { echo '-'; } ?> </td>
                                        </tr>
                                        <?php
                                         }
                                         elseif($key=='categories_fees'){
                                         ?>
                                        <tr>
                                            <td>Categories Fees:</td>
                                            <!--<td> {{$product->daily_deal}}</td>-->
                                            <td> <?php if ($value[0]!='0'){ echo $value[0]; } else { echo '-'; } ?></td>
                                            <td> <?php if ($value[0]=='0'){ echo '0'; } else { echo '-'; } ?> </td>
                                        </tr>
                                        <?php
                                         
                                         
                                         } elseif($key=='insertion_fees'){
                                             ?>
                                        <tr>
                                            <td>Insertion Fees:</td>
                                            <!--<td> {{$product->daily_deal}}</td>-->
                                            <td> <?php if ($value[0]!='0'){ echo $value[0]; } else { echo '-'; } ?></td>
                                            <td> <?php if ($value[0]=='0'){ echo '0'; } else { echo '-'; } ?> </td>
                                        </tr>
                                        <?php
                                         } elseif($key=='buyitnow_fees'){
                                             ?>
                                        <tr>
                                            <td>Buyitnow Fees:</td>
                                            <!--<td> {{$product->daily_deal}}</td>-->
                                            <td> <?php if ($value[0]!='0'){ echo $value[0]; } else { echo '-'; } ?></td>
                                            <td> <?php if ($value[0]=='0'){ echo '0'; } else { echo '-'; } ?> </td>
                                        </tr>
                                        <?php
                                         }  }
                                         ?>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- col-md-6 -->
        </div>
    </div>
    <!-- contentpanel -->
</div>
<!-- mainpanel -->
<!-- rightpanel -->
</section>
@include('admin.include.footer')
<script>
    $(document).on('ready', function () {
        $('#input-3').rating({displayOnly: true, step: 0.5});
    });
</script>
<script>
    jQuery(document).ready(function () {
        jQuery('#table1').dataTable();
        jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers"
        });
        // Chosen Select
        jQuery("select").chosen({
            'min-width': '100px',
            'white-space': 'nowrap',
            disable_search_threshold: 10
        });

        // Delete row in a table
        jQuery('.delete-row').click(function () {
            var c = confirm("Continue delete?");
            if (c)
                jQuery(this).closest('tr').fadeOut(function () {
                    jQuery(this).remove();
                });

            return false;
        });
        // Show aciton upon row hover
        jQuery('.table-hidaction tbody tr').hover(function () {
            jQuery(this).find('.table-action-hide a').animate({
                opacity: 1
            });
        }, function () {
            jQuery(this).find('.table-action-hide a').animate({
                opacity: 0
            });
        });
        jQuery('#datepicker').datepicker();
    });
</script>
</body>
</html>

