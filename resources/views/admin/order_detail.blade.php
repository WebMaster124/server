@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Order Details (#{{$orders[0]->order_id}})    <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <!--        <span class="label">You are here:</span>-->
            <ol class="breadcrumb">
                        <li>Order Status : {{$orders[0]->status}}</li>
                         <li>Order Date : {{date('M d,Y',strtotime($orders[0]->created_date))}}</li>
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
                            <li><a href="#buyer" data-toggle="tab"><strong>Buyer Detail</strong></a></li>
                            <li><a href="#seller" data-toggle="tab"><strong>Seller Detail</strong></a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content mb30">
                            <div class="tab-pane active" id="profile">
                                <!--  <div class="tab-pane" id="profile">-->
                                <div class="userview-data">
                                    <table class="table table-hover">
                                        <tbody>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Item Sku</th>
                                            <th>Quantity</th>
                                            <th>Ship Type</th>
                                            <th>Price</th>
                                        </tr>
                                        <?php $total=0; ?>
                                        @foreach($orders as $order)
                                            <tr>
                                                <td><?php $product_images=unserialize($order->photos); ?>
                                                    <img class="admin_reg_list_img" height="100" width="100"
                                                               src="{{ asset("images/product/$order->product_id/S/$product_images[0]") }}"/>
                                                  </td>
                                                <td>{{$order->title}}
                                                    <hr>
                                                    @if($order->discount !='0') Discount  {{$order->discount}}% @endif
                                                </td>
                                                <td>{{$order->product_sku}}</td>
                                                <td>{{$order->order_quantity}}</td>
                                                <td><?php $shipment_type= unserialize($order->shipment_type); ?>
                                                    @foreach($shipment_type as $s)
                                                        {{$s}}
                                                    @endforeach</td>
                                                <td> <?php
                                                    $price = $order->order_quantity * $order->price;
                                                    $discount = $price * $order->discount / 100;
                                                    echo $price - $discount;
                                                    $total = $total + $price - $discount;
                                                    ?> AED</td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div style="float: right" class="col-md-1">{{$total}} AED</div>
                                    <div style="float: right" class="col-md-2">Subtotal</div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div style="float: right" class="col-md-1">
                                        <?php
                                        $code=$orders[0]->coupon_code;
                                        if($code!=''){
                                        ?> - <?php  echo   $total - $orders[0]->order_price; ?> AED
                                        <?php } else echo "0 AED"
                                            ?>
                                    </div>
                                    <div style="float: right" class="col-md-2">Coupon Code :
                                    <br>
                                        <?php
                                        $code=$orders[0]->coupon_code;
                                        if($code!=''){
                                            $couponCode= \App\Http\Controllers\CouponController::viewCoupon($code);
                                            echo $couponCode->code."<br>";
                                            if($couponCode->code_type == "Percentage Discount")
                                                echo $couponCode->discount . "%";
                                            else
                                                echo $couponCode->discount . " AED";
                                        } ?>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div style="float: right" class="col-md-1">{{$orders[0]->order_price}} AED</div>
                                    <div style="float: right" class="col-md-2">Total</div>
                                </div>
                            </div>
                            <div class="tab-pane" id="buyer">
                                <table class="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td>User Name:</td>
                                        <td>{{$buyer->display_name}}</td>
                                    </tr>
                                    <tr>
                                        <td>First Name:</td>
                                        <td>{{$buyer->first_name}}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name:</td>
                                        <td>{{$buyer->last_name}}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number:</td>
                                        <td>{{$buyer->mobile_number}}</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail Address:</td>
                                        <td>{{$buyer->email}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane" id="seller">
                               @foreach($sellers as $seller)
                                <table class="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td>Seller Name:</td>
                                        <td><a href="../seller-details/{{$seller->seller_id}}">{{$seller->display_name}}</a></td>
                                    </tr>
                                    @foreach($payments as $payment)

                                        @if($payment->seller_id == $seller->seller_id)
                                            <tr>
                                                <td>Transaction Id:</td>
                                                <td>
                                                        {{$payment->transaction_id}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Payment Status</td>
                                                <td>Completed</td>
                                            </tr>

                                        @endif

                                    @endforeach
                                    @if(count($payments)<=0)
                                        <tr>
                                            <td>Payment Status</td>
                                            <td>Unpaid</td>
                                        </tr>
                                    @endif
                                    <tr>
                                        <td>Mobile Number:</td>
                                        <td>{{$seller->mobile_number}}</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail Address:</td>
                                        <td>{{$seller->email}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                   <hr style="border: #c9c9c9 solid 1px">
                               @endforeach
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

