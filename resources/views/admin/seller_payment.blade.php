
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
    <style>
        h3{
            margin-top:14px;
        }
        .search-btn{
            bottom: 20px;
            position: relative;
            left: 13px;
        }
    </style>
<!-- headerbar -->
    <div class="pageheader">

        <h2 style="float: left"> View Payment History </h2>  &nbsp;&nbsp;&nbsp;&nbsp;
        @if(count($products)<=0)
            <a  class="btn btn-primary" href="#" disabled=""> SEND INVOICE TO SELLER </a>
        @else
            <form method="get" action="{{action('SellerController@sendSellerPaymentInvoiceByAdmin')}}">
                <input type="hidden" value="{{$_GET['id']}}" name="id">
                @if(isset($_GET['year']))
                    <input type="hidden" value="{{$_GET['year']}}" name="year">
                @endif
                @if(isset($_GET['month']))
                    <input type="hidden" value="{{$_GET['month']}}" name="month">
                @endif
                <button class="btn btn-primary search-btn">RESEND INVOICE TO SELLER</button>
            </form>
        @endif

        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view payment History</li>
            </ol>
        </div>
    </div>
    <div class="panel panel-default form-panel">

        <div class="panel-body">
            <div class="panel-heading" style="border-color:#ffffff;padding-left: 0px;">
                <h4 class="panel-title">Search By Year and Month</h4>
            </div>

            <form method="get" action="{{action('SellerController@viewSellerPaymentHistory')}}">
                <input type="hidden" name="id" value="{{$_GET['id']}}">
                <div class="row row-pad-5">
                    <div class="col-lg-3 col-md-3">
                        <h6>By Year</h6>
                        <select name="year" class="form-control" id="year">
                            @if(isset($_GET['year']))
                                <option selected="" value="{{$_GET['year']}}" >{{$_GET['year']}}</option>
                            @endif
                        </select>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <h6>By Month</h6>
                        <select name="month" class="form-control" id="month">
                            @if(isset($_GET['month']))
                                <option selected="" value="{{$_GET['month']}}">{{$_GET['month']}}</option>
                            @endif
                        </select>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <h6>&nbsp;</h6>
                        <button class="btn btn-primary btn-search">Search</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="contentpanel">
<?php // print_r($products); exit;  ?>
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="panel panel-dark panel-stat">
                    <div class="panel-heading">
                        <div class="stat">
                            <div class="row">
                                <div class="col-xs-6">
                                    <h3 class="stat-label">Invoice ID:</h3>
                                    <h3 class="stat-label">Issue Date:</h3>
                                    <h3 class="stat-label">Start Date:</h3>
                                    <h3 class="stat-label">End Date:</h3>
                                </div>
                                <div class="col-xs-6">
                                    <h3 class="stat-label">{{$dates['invoice_id']}}</h3>
                                    <h3 class="stat-label">{{$dates['issue_date']}}</h3>
                                    <h3 class="stat-label">{{$dates['start_date']}}</h3>
                                    <h3 class="stat-label">{{$dates['end_date']}}</h3>
                                </div>
                            </div>
                            <!-- row -->
                        </div>
                        <!-- stat -->
                    </div>
                    <!-- panel-heading -->
                </div>
                <!-- panel -->
            </div>
            <!-- col-sm-6 -->
            <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="panel panel-dark panel-stat">
                    <div class="panel-heading">
                        <div class="stat">
                            <div class="row">
                                <div class="col-xs-12">
                                    <small class="stat-label">From:</small>
                                    <h2>Dibdaa,</h2>
                                </div>
                            </div>
                            <!-- row -->
                            <div class="mb15"></div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <small class="stat-label">109C Street Umm Suqeim 3</small>
                                    <small class="stat-label">PO Box 29662 Dubai,</small>
                                    <small class="stat-label">UAE</small>
                                </div>
                            </div>
                            <!-- row -->
                        </div>
                        <!-- stat -->
                    </div>
                    <!-- panel-heading -->
                </div>
                <!-- panel -->
            </div>
            <!-- col-sm-6 -->
            <!-- col-sm-6 -->
            <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="panel panel-dark panel-stat">
                    <div class="panel-heading">
                        <div class="stat">
                            <div class="row">
                                <div class="col-xs-12">
                                    <small class="stat-label">Invoice For:</small>
                                    <h2>{{$user->first_name}} {{$user->last_name}},</h2>
                                </div>
                            </div>
                            <!-- row -->
                            <div class="mb15"></div>
                            <div class="row">
                                <div class="col-xs-12">
                                    @if($user->address[0] != '')
                                        <small class="stat-label">{{$user->address[0]}} {{$user->address[1]}}</small>
                                        <small class="stat-label">{{$user->address[3]}} {{$user->address[2]}},</small>
                                        <small class="stat-label">{{$user->address[4]}}</small>
                                    @else
                                        Address is not set yet.
                                    @endif
                                </div>
                            </div>
                            <!-- row -->
                        </div>
                        <!-- stat -->
                    </div>
                    <!-- panel-heading -->
                </div>
                <!-- panel -->
            </div>
            @if($payment_detail != '')
            <div class="col-sm-6 col-md-6 col-lg-3" style="float: right">
                <div class="panel panel-dark panel-stat">
                    <div class="panel-heading">
                        <div class="stat">
                            <div class="row">
                                <div class="col-xs-12">
                                    <small>Transaction Status</small>
                                    <h4>{{$payment_detail->payment_detail['transaction_status']}}</h4>
                                    <small>Transaction Id</small>
                                    <h4>{{$payment_detail->payment_detail['transaction_id']}}</h4>
                                    <small>Payment Date</small>
                                    <h4>{{$payment_detail->created_dt}}</h4>
                                </div>
                            </div>
                        </div>
                        <!-- stat -->
                    </div>
                    <!-- panel-heading -->
                </div>
                <!-- panel -->
            </div>
            @endif
            <!-- col-sm-6 -->
        </div>
        @if(Session::has('message'))
            <div class="alert alert-warning">
                {{ Session::get('message') }}
            </div>
    @endif
    <!-- row -->
        <div class="panel panel-default">
            <div class="panel-body">
                <!-- table-responsive -->
                <div class="clearfix mb30"><h3><b> Seller Invoice Detail</b></h3></div>
                    <table class="table" >
                        <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>FEES TYPE</th>
                            <th>AMOUNT (AED)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
//                        print_r($products);
//                        exit;
                        ?>
                        @foreach($products as $product)
                        
                        
                            <tr>
                                <td style="width: 50%">{{$product->title}}</td>
                                <td style="width:25%">
                                    Insertion Fees  &nbsp; &nbsp; :  {{$product->fees_details['insertion_fees'][0]}} AED <br>
                                    Categories Fees &nbsp;:{{$product->fees_details['categories_fees'][0]}} AED <br>
                                    <?php 
//                                    print_r($product->fees_details);
//                                    print_r($product->fees_details['featured_fees']);
                                    if($product->fees_details['featured_fees'][0]!=0){
                                        echo 'Feature Fees &nbsp; ('.$product->fees_details['featured_fees'][0]. ') :'. $product->fees_details['featured_fees'][1]. 'AED';
                                    }
//                                    echo $product->fees_details['featured_fees'][0];
                                      ?>
                                </td>
                                <td style="width:25%">{{$product->seller_fee}} AED</td>
                            </tr>
                        @endforeach
                        @if(count($products)<=0)
                            <tr>
                                <td colspan="3"> No Record Found. </td>
                            </tr>
                        @endif
                        </tbody>
                    </table>
                <!-- table-responsive -->
                <div class="col-sm-6 col-md-6 col-lg-3" style="float: right">
                    <div class="panel panel-dark panel-stat">
                        <div class="panel-heading">
                            <div class="stat">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <small class="stat-label">Total: <b> {{$total}} AED</b></small>
                                    </div>
                                </div>
                                </div>
                            <!-- stat -->
                        </div>
                        <!-- panel-heading -->
                    </div>
                    <!-- panel -->
                </div>
                <br>
                <div class="clearfix mb30"><h4><b> Transaction Fees Detail</b></h4></div>
                <table class="table" >
                    <thead>
                    <tr>
                        <th>DATE</th>
                        <th>TITLE</th>
                        <th>ITEM NUMBER</th>
                        <th>FEES TYPE</th>
                        <th>AMOUNT (AED)</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($transaction_detail as $transaction)
                        <tr>
                            <td style="width: 20%">{{ date('Y-M-d',strtotime($transaction->created_date))}}</td>
                            <td style="width: 20%">{{$transaction->title}}</td>
                            <td style="width: 20%">{{$transaction->product_sku}}</td>
                            <td style="width:20%">
                                @if(isset($changes[0][0]) && $changes[0][0]!='')
                                    Feature Fees ({{$changes[0][0]}})
                                @elseif(isset($transaction->changes['categories_fees']) && $transaction->changes['categories_fees']!='')
                                    Categories Fees
                                @endif
                            </td>
                            <td style="width:20%">
                                @if(isset($changes[0][1]) && $changes[0][1]!='')
                                    {{$changes[0][1]}} AED
                                @elseif(isset($transaction->changes['categories_fees']) && $transaction->changes['categories_fees']!='')
                                    {{$transaction->changes['categories_fees'][0]}} AED
                                @endif
                            </td>
                        </tr>
                    @endforeach
                    @if(count($transaction_detail)<=0)
                        <tr>
                            <td colspan="3"> No Record Found. </td>
                        </tr>
                    @endif
                    </tbody>
                </table>
                <!-- table-responsive -->
                <div class="col-sm-6 col-md-6 col-lg-3" style="float: right">
                    <div class="panel panel-dark panel-stat">
                        <div class="panel-heading">
                            <div class="stat">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <small class="stat-label">Transaction Total: <b> {{$transaction_total}} AED</b></small>
                                    </div>
                                </div>
                            </div>
                            <!-- stat -->
                        </div>
                        <!-- panel-heading -->
                    </div>
                    <!-- panel -->
                </div>
                <br>
                <br>
                <br>
                <div style="float: right;position: relative;left: 140px;"><b>Billing Detail Summary</b></div>
                <br>
                <div class="col-sm-6 col-md-6 col-lg-3" style="float: right">
                    <div class="panel panel-dark panel-stat">
                        <div class="panel-heading">
                            <div class="stat">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <small class="stat-label">Total: <b> {{$total}} AED</b></small>
                                        <small class="stat-label">Transaction Total: <b> {{$transaction_total}} AED</b></small>
                                        <small class="stat-label">Total Amount due: <b> {{$grand_total}} AED</b></small>
                                    </div>
                                </div>
                            </div>
                            <!-- stat -->
                        </div>
                        <!-- panel-heading -->
                    </div>
                    <!-- panel -->
                </div>
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
    jQuery(document).ready(function () {
        var curYear = new Date().getFullYear();
        var curMonth=new Date().getMonth();
        var get_year={{$_GET['year']}};
        var get_month={{$_GET['month']}};
        for(i = curYear-5 ; i <= curYear ; i++) {
            if(i != get_year)
            $('#year').append('<option value="'+i+'">'+i+'</option>');
        }

        if(get_year == curYear){
            $('#month').find('option').not(':first').remove();
            for(i = 1 ; i <= curMonth +1 ; i++) {
                if (i != get_month)
                    $('#month').append('<option value="'+i+'">'+i+'</option>');
            }
        }else{
            for (i = 1; i <= 12; i++) {
                if (i != get_month)
                $('#month').append('<option value="' + i + '">' + i + '</option>');
            }
        }

        $('#year').change(function () {
            if($('#year').val()==curYear){
                $('#month').find('option').remove();
               for (i = 1; i <= curMonth + 1; i++) {
                        $('#month').append('<option value="' + i + '">' + i + '</option>');
                }
            }else{
                $('#month').find('option').remove();
                for (i = 1; i <= 12; i++) {
                        $('#month').append('<option value="' + i + '">' + i + '</option>');
                }
            }
        });
 });

    jQuery(document).ready(function() {
         jQuery('#table1').dataTable();

        jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers",
            aaSorting : [[0, 'asc']]
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
