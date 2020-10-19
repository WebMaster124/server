
  @include('admin.include.sidebar')
    <!-- leftpanel -->
    <div class="mainpanel">
      @include('admin.include.header')
        <style>
          .panel-stat i {
            font-size: 40px;
            padding: 15px;
            border-radius: 10px;
            opacity: 1;
          }
        </style>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
	  
<style>
div.dt-buttons {
    float: right; // Add !important for right aligned on mobiles
	background-color:#fff;
}
.dataTables_wrapper .dataTables_filter {
    float: left;
}
.table {
    border-bottom:0px !important;
}
.table th, .table td {
    border: 1px !important;
}
.fixed-table-container {
    border:0px !important;
}

</style>
	  
     
	  
        <!-- headerbar -->
  <div class="pageheader">
    <h2> Dashboard </h2>
    <!--<div class="breadcrumb-wrapper">
      <span class="label">You are here:</span>
      <ol class="breadcrumb">
        <li class="active">Dashboard</li>
      </ol>
    </div>-->
 <div class="breadcrumb-wrapper" style="display:block !important;margin-top:-10px; !important">
            <select id="download_format" class="form-control" style="width: 130px !important;margin-right: 285px !important;">
                <option value="">Download Format</option>
                <option value="xls">XLS</option>
                <option value="csv">CSV</option>
                <option value="pdf">PDF</option>
            </select>
       
    </div>

     <div class="breadcrumb-wrapper" style="display:block !important;margin-top:-10px; !important">

            <select id="ExportReporttoExcel" class="form-control">
                <option value="">Action</option>
                <option value="table0">Category wise & Auction Type </option>
                <option value="table1">Category wise & Buy It Now</option>
                <option value="table2">Sellers by Category wise & Auction Type</option>
                <option value="table3">Sellers by Category wise & Buy It Now</option>                                 
				<option value="table4">Total Deliveries by Category</option>
				<option value="table5">Total Refunds</option>
				<option value="table6">Total Category</option>
            </select>
       
    </div>
  </div>
  <div class="contentpanel">
   {{-- <img src="../../public/images/coming-soon1.png" style="position: relative;top: 69px;left: 130px;">--}}
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default form-panel">
                <div class="panel-body">
                    <div class="panel-heading" style="border-color:#ffffff;padding-left: 0px;">
                        <h4 class="panel-title">Search By Year and Month</h4>
                    </div>
                    <?php
                    $yr='';
                    $mnth='';
                    if(isset($_GET['year'])){
                        $year=$_GET['year'];
                        $yr=$_GET['year'];
                    }
                    else
                        $year=date('Y');

                    if(isset($_GET['month'])){
                        $month=$_GET['month'];
                        $mnth=$_GET['month'];
                    }
                    else
                        $month=date('m');
                    ?>

                    <form method="get" action="{{action('User_Controller@index')}}">
                        <div class="row row-pad-5">
                            <div class="col-lg-3 col-md-3">
                                <h6>By Year</h6>
                                <select name="year" class="form-control" id="year">
                                    <option selected="" value="{{$year}}" >{{$year}}</option>
                                </select>
                            </div>

                            <div class="col-lg-3 col-md-3">
                                <h6>By Month</h6>
                                <select name="month" class="form-control" id="month">
                                    <option selected="" value="{{$month}}" >{{ date('F', mktime(0, 0, 0, $month, 10)) }}</option>
                                </select>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <h6>&nbsp;</h6>
                                <button class="btn btn-primary">Search</button>
                            </div>
							
                        </div>
                    </form>
                </div>
            </div>
        </div>

		

        <div class="col-md-6">
            <div class="panel panel-default form-panel">
                <div class="panel-body">
                    <div class="panel-heading" style="border-color:#ffffff;padding-left: 0px;">
                        <h4 class="panel-title">Search By Period</h4>
                    </div>
                    <?php
                    $start_date='';
                    $end_date='';
                    if(isset($_GET['start_date']))
                        $start_date=$_GET['start_date'];
                    if(isset($_GET['end_date']))
                        $end_date=$_GET['end_date'];
                    ?>
                    <form method="get" action="{{action('User_Controller@index')}}">
                        <div class="row" style="padding-bottom: 10px;">
                            <div class="col-sm-9">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h6>Start Date *:</h6>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                                    <input required  type="text" class="form-control" value="{{$start_date}}"  placeholder="mm/dd/yyyy" id="datepicker" name="start_date">
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <h6>End Date *:</h6>
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                                    <input required  type="text" class="form-control"  value="{{$end_date}}" placeholder="mm/dd/yyyy" id="datepicker1" name="end_date">
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <h6>&nbsp;</h6>
                                <button class="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="panel panel-success panel-stat">
          <div class="panel-heading">
            <div class="stat">
              <div class="row">
                <div class="col-xs-4">
                  <i class="fa fa-product-hunt"></i>
                </div>
                <div class="col-xs-8">
                    <form method="get" id="avtive_product_form" action="{{action('ProductController@viewProduct')}}">
                        <input type="hidden" name="status" value="Suspend">
                        <input type="hidden" name="month" value="{{$mnth}}">
                        <input type="hidden" name="year" value="{{$yr}}">
                        <input type="hidden" name="start_date" value="{{$start_date}}">
                        <input type="hidden" name="end_date" value="{{$end_date}}">

                        <small class="stat-label">Active product</small>
                        <h4 style="cursor: pointer" id="active_product">{{$data['item_count']}}</h4>
                    </form>
                </div>
              </div>
              <!-- row -->
              <div class="mb15"></div>
              <div class="row">
                <div class="col-xs-6">
                    <form method="get" id="pending_product_form" action="{{action('ProductController@viewPendingProduct')}}">
                        <input type="hidden" name="month" value="{{$mnth}}">
                        <input type="hidden" name="year" value="{{$yr}}">
                        <input type="hidden" name="start_date" value="{{$start_date}}">
                        <input type="hidden" name="end_date" value="{{$end_date}}">
                        <small class="stat-label">Pending product</small>
                        <h4 style="cursor: pointer" id="pending_product">{{$data['pending_item_count']}}</h4>
                    </form>
                </div>
                <div class="col-xs-6">
                    <form method="get" id="deleted_product_form" action="{{action('ProductController@viewProduct')}}">
                        <input type="hidden" name="status" value="Deleted">
                        <input type="hidden" name="month" value="{{$mnth}}">
                        <input type="hidden" name="year" value="{{$yr}}">
                        <input type="hidden" name="start_date" value="{{$start_date}}">
                        <input type="hidden" name="end_date" value="{{$end_date}}">
                        <small class="stat-label">Deleted products</small>
                        <h4 style="cursor: pointer" id="deleted_product">{{$data['deleted_item_count']}}</h4>
                    </form>
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
        <div class="panel panel-danger panel-stat">
          <div class="panel-heading">
            <div class="stat">
              <div class="row">
                <div class="col-xs-4">
                  <i class="fa fa-cc-paypal"></i>
                </div>
                <div class="col-xs-8">
                    <form method="get" id="paypal_sale_form" action="{{action('ProductController@paypalSaleDetails')}}">
                        <input type="hidden" name="month" value="{{$mnth}}">
                        <input type="hidden" name="year" value="{{$yr}}">
                        <input type="hidden" name="start_date" value="{{$start_date}}">
                        <input type="hidden" name="end_date" value="{{$end_date}}">
                        <small class="stat-label">Paypal Sale</small>
                        <h1 style="cursor: pointer" id="paypal_sale">{{$data['total_paypal_sale']['paypal_count']}}</h1>
                    </form>
                </div>
              </div>
              <!-- row -->
              <div class="mb15"></div>
                <div class="row">
                    <div class="col-xs-6">
                        <small class="stat-label">Buy It Now</small>
                        <h4>{{$data['total_paypal_sale']['paypal_fix_total']}} AED</h4>
                    </div>
                    <div class="col-xs-6">
                        <small class="stat-label">Auction Sale</small>
                        <h4>{{$data['total_paypal_sale']['paypal_auction_total']}} AED</h4>
                    </div>
                </div>
            </div>
            <!-- stat -->
          </div>
          <!-- panel-heading -->
        </div>
        <!-- panel -->
      </div>
      <!-- col-sm-6 -->
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="panel panel-primary panel-stat">
          <div class="panel-heading">
            <div class="stat">
              <div class="row">
                <div class="col-xs-4">
                  <i class="fa fa-money"></i>
                </div>
                <div class="col-xs-8">
                    <form method="get" id="cash_sale_form" action="{{action('ProductController@cashSaleDetails')}}">
                        <input type="hidden" name="month" value="{{$mnth}}">
                        <input type="hidden" name="year" value="{{$yr}}">
                        <input type="hidden" name="start_date" value="{{$start_date}}">
                        <input type="hidden" name="end_date" value="{{$end_date}}">
                        <small class="stat-label">Cash Sale</small>
                        <h1 style="cursor: pointer" id="cash_sale">{{$data['total_cash_sale']['cash_count']}}</h1>
                    </form>
                </div>
              </div>
              <!-- row -->
                <div class="mb15"></div>
                <div class="row">
                    <div class="col-xs-6">
                        <small class="stat-label">Buy It Now </small>
                        <h4>{{$data['total_cash_sale']['cash_fix_total']}} AED</h4>
                    </div>
                    <div class="col-xs-6">
                        <small class="stat-label">Auction Sale</small>
                        <h4>{{$data['total_cash_sale']['cash_auction_total']}} AED</h4>
                    </div>
                </div>
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
                <div class="col-xs-4">
                  <i class="fa fa-users"></i>
                </div>
                <div class="col-xs-4">
                    <form method="get" id="all_user_form" action="{{action('User_Controller@viewBuyers')}}">
                        <input type="hidden" name="month" value="{{$mnth}}">
                        <input type="hidden" name="year" value="{{$yr}}">
                        <input type="hidden" name="start_date" value="{{$start_date}}">
                        <input type="hidden" name="end_date" value="{{$end_date}}">
                        <small class="stat-label">Users</small>
                        <h1 style="cursor: pointer" id="all_user">{{$data['users_cnt']}}</h1>
                    </form>
                </div>
              </div>
              <!-- row -->
              <div class="mb15"></div>
              <div class="row">
                  <div class="col-xs-4">
                      <form method="get" id="active_user_form" action="{{action('User_Controller@viewBuyers')}}">
                          <input type="hidden" name="status" value="Active">
                          <input type="hidden" name="month" value="{{$mnth}}">
                          <input type="hidden" name="year" value="{{$yr}}">
                          <input type="hidden" name="start_date" value="{{$start_date}}">
                          <input type="hidden" name="end_date" value="{{$end_date}}">
                      <small class="stat-label">Active Users</small>
                      <h4 style="cursor: pointer" id="active_user">{{$data['active_user_count']}}</h4>
                      </form>
                  </div>
                <div class="col-xs-4">
                    <form method="get" id="inactive_user_form" action="{{action('User_Controller@viewBuyers')}}">
                        <input type="hidden" name="status" value="Suspend">
                        <input type="hidden" name="month" value="{{$mnth}}">
                        <input type="hidden" name="year" value="{{$yr}}">
                        <input type="hidden" name="start_date" value="{{$start_date}}">
                        <input type="hidden" name="end_date" value="{{$end_date}}">
                        <small class="stat-label">Suspended Users</small>
                        <h4 style="cursor: pointer" id="inactive_user">{{$data['inactive_user_count']}}</h4>
                    </form>
                </div>
                  <div class="col-xs-4">
                      <form method="get" id="delete_user_form" action="{{action('User_Controller@viewBuyers')}}">
                          <input type="hidden" name="status" value="Deleted">
                          <input type="hidden" name="month" value="{{$mnth}}">
                          <input type="hidden" name="year" value="{{$yr}}">
                          <input type="hidden" name="start_date" value="{{$start_date}}">
                          <input type="hidden" name="end_date" value="{{$end_date}}">
                          <small class="stat-label">Rejected Users</small>
                          <h4 style="cursor: pointer" id="delete_user">{{$data['delete_user_count']}}</h4>
                      </form>
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
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-btns">
              <a href="#" class="panel-close">×</a>
              <a href="#" class="minimize">−</a>
            </div>
            <h4 class="panel-title">Item Listed by Category</h4>
              <form method="get" id="category_list_form" action="{{action('ProductController@ItemListedByCategory')}}">
                  <input type="hidden" name="month" value="{{$mnth}}">
                  <input type="hidden" name="year" value="{{$yr}}">
                  <input type="hidden" name="start_date" value="{{$start_date}}">
                  <input type="hidden" name="end_date" value="{{$end_date}}">
                  <h6 style="cursor: pointer" id="category_list">See Details</h6>
              </form>
          </div>
          <div class="panel-body" style="display: block;">
            <canvas id="doughnut-chart" width="500" height="450"></canvas>
              @foreach($data['item_category_cnt'] as $item_category)
                <?php $cate_name[]=$item_category->category_name;
                $cate_count[]=$item_category->item_count;
                ?>
               @endforeach
              <?php $cate_name =implode(',',$cate_name);
                 $cate_count=implode(',',$cate_count);
              ?>
              <input type="hidden" value="{{$cate_name}}" name="item_by_category" id="#item_by_category">
              <input type="hidden" value="{{$cate_count}}" name="item_by_category_cnt" id="#item_by_category_cnt">
          </div>
          <!-- panel-body -->
        </div>
        <!-- panel -->
      </div>
        <div class="col-md-6">
            <div class="panel panel-default">
            <div class="panel-body" style="padding-bottom: 175px;display: block;">
                <table class="table" id="Total_Category">
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Items</th>
                        <th>Total AED</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($data['item_category_cnt'] as $item_category) { ?>
                    <tr>
                        <td>
                            {{$item_category->category_name}}
                        </td>
                        <td>
                            {{ $item_category->item_count  }}
                        </td>
                        <td>
                            {{ $item_category->aed  }} AED
                        </td>
                    </tr>
                    <?php  }?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>

      <div class="row">
          <div class="col-md-6">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <div class="panel-btns">
                          <a href="#" class="panel-close">×</a>
                          <a href="#" class="minimize">−</a>
                      </div>
                      <h4 class="panel-title">Number of item By Category wise & Auction Type</h4>
					 <!-- <a href="users/exportc/csv" class="btn btn-primary">Export to .csv</a>-->

                  </div>
                  <div class="panel-body" style="display: block;">
                      <table class="table" id="Auction_Type_Export">
                          <thead>
                          <tr>
                              <th>Category Name</th>
                              <th>Items</th>
                          </tr>
                          </thead>
                          <tbody>
                          <?php foreach ($data['auction_category_cnt'] as $item_category) { ?>
                          <tr>
                              <td>
                                  @if($yr)
                                      <a href="item-by-auction/{{$item_category->id}}/{{$yr}}/{{$mnth}}">{{$item_category->category_name}}</a>
                                  @elseif($start_date)
                                      <a href="item-by-auction/{{$item_category->id}}/0/0/{{date("Y-m-d",strtotime($start_date))}}/{{date("Y-m-d",strtotime($end_date))}}">{{$item_category->category_name}}</a>
                                  @else
                                      <a href="item-by-auction/{{$item_category->id}}">{{$item_category->category_name}}</a>
                                  @endif
                              </td>
                              <td>
                                  {{ $item_category->item_count  }}
                              </td>
                          </tr>
                          <?php  }?>
                          </tbody>
                      </table>
                  </div>
                  <!-- panel-body -->
                  <!-- panel -->
              </div>
          </div>
          <div class="col-md-6">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <div class="panel-btns">
                          <a href="#" class="panel-close">×</a>
                          <a href="#" class="minimize">−</a>
                      </div>
                      <h4 class="panel-title">Number of item By Category wise & Buy It Now</h4>
                  </div>
                  <div class="panel-body" style="display: block;">
                      <table class="table" id="Buy_Export">
                          <thead>
                          <tr>
                              <th>Category Name</th>
                              <th>Items</th>
                          </tr>
                          </thead>
                          <tbody>
                          <?php foreach ($data['fix_category_cnt'] as $item_category) { ?>
                          <tr>
                              <td>
                                  @if($yr)
                                      <a href="item-by-fix/{{$item_category->id}}/{{$yr}}/{{$mnth}}">{{$item_category->category_name}}</a>
                                  @elseif($start_date)
                                      <a href="item-by-fix/{{$item_category->id}}/0/0/{{date("Y-m-d",strtotime($start_date))}}/{{date("Y-m-d",strtotime($end_date))}}">{{$item_category->category_name}}</a>
                                  @else
                                      <a href="item-by-fix/{{$item_category->id}}">{{$item_category->category_name}}</a>
                                  @endif
                              </td>
                              <td>
                                  {{ $item_category->item_count  }}
                              </td>
                          </tr>
                          <?php  }?>
                          </tbody>
                      </table>
                  </div>
                  <!-- panel-body -->
                  <!-- panel -->
              </div>
          </div>

      </div>


      <div class="row">
          <div class="col-md-6">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <div class="panel-btns">
                          <a href="#" class="panel-close">×</a>
                          <a href="#" class="minimize">−</a>
                      </div>
                      <h4 class="panel-title"> Fees Charged to Sellers by Category wise & Auction Type</h4>
                      <div class="row">
                          <div class="col-xs-6">
                              <small class="stat-label">Total Items</small>
                              <h4>{{$data['fees_auction_type']['auction_cnt']}}</h4>
                          </div>
                          <div class="col-xs-6">
                              <small class="stat-label">Total AED</small>
                              <h4>{{$data['fees_auction_type']['auction_sum']}}</h4>
                          </div>
                      </div>
                  </div>
                  <div class="panel-body" style="display: block;">
                      <table class="table" id="Seller_Auction_Type">
                          <thead>
                          <tr>
                              <th>Category Name</th>
                              <th>Total AED</th>
                          </tr>
                          </thead>
                          <tbody>
                          <?php foreach ($data['auction_categorys_sales'] as $item_category) { ?>
                          <tr>
                              <td>
                                  @if($yr)
                                      <a href="seller-charge-by-auction/{{$item_category->id}}/{{$yr}}/{{$mnth}}">{{$item_category->category_name}}</a>
                                  @elseif($start_date)
                                      <a href="seller-charge-by-auction/{{$item_category->id}}/0/0/{{date("Y-m-d",strtotime($start_date))}}/{{date("Y-m-d",strtotime($end_date))}}">{{$item_category->category_name}}</a>
                                  @else
                                      <a href="seller-charge-by-auction/{{$item_category->id}}">{{$item_category->category_name}}</a>
                                  @endif
                              </td>
                              <td>
                                  <?php foreach ($item_category->data as $key=>$value){
                                      if($key == 'Total AED')
                                          echo $key .'  :  ' .$value .' AED <br>';
                                      else
                                          echo $key .'  :  ' .$value .'<br>';
                                  } ?>
                              </td>
                          </tr>
                          <?php  }?>
                          </tbody>
                      </table>
                  </div>
                  <!-- panel-body -->
                  <!-- panel -->
              </div>
          </div>
          <div class="col-md-6">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <div class="panel-btns">
                          <a href="#" class="panel-close">×</a>
                          <a href="#" class="minimize">−</a>
                      </div>
                      <h4 class="panel-title"> Fees Charged to Sellers by Category wise & Buy It Now</h4>
                      <div class="row">
                          <div class="col-xs-6">
                              <small class="stat-label">Total Items</small>
                              <h4>{{$data['fees_fix_type']['fix_cnt']}}</h4>
                          </div>
                          <div class="col-xs-6">
                              <small class="stat-label">Total AED</small>
                              <h4>{{$data['fees_fix_type']['fix_sum']}}</h4>
                          </div>
                      </div>
                  </div>
                  <div class="panel-body" style="display: block;">
                      <table class="table" id="Sellers_Buy_It">
                          <thead>
                          <tr>
                              <th>Category Name</th>
                              <th>Total AED</th>
                          </tr>
                          </thead>
                          <tbody>
                          <?php foreach ($data['fix_categorys_sales'] as $item_category){ ?>
                          <tr>
                              <td>
                                  @if($yr)
                                      <a href="seller-charge-by-fix/{{$item_category->id}}/{{$yr}}/{{$mnth}}">{{$item_category->category_name}}</a>
                                  @elseif($start_date)
                                      <a href="seller-charge-by-fix/{{$item_category->id}}/0/0/{{date("Y-m-d",strtotime($start_date))}}/{{date("Y-m-d",strtotime($end_date))}}">{{$item_category->category_name}}</a>
                                  @else
                                      <a href="seller-charge-by-fix/{{$item_category->id}}">{{$item_category->category_name}}</a>
                              @endif
                              <td>
                                  <?php foreach ($item_category->data as $key=>$value){
                                      if($key == 'Total AED')
                                          echo $key .'  :  ' .$value .' AED <br>';
                                      else
                                          echo $key .'  :  ' .$value .'<br>';
                                  } ?>
                              </td>
                          </tr>
                          <?php  }?>
                          </tbody>
                      </table>
                  </div>
                  <!-- panel-body -->
                  <!-- panel -->
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <div class="panel-btns">
                              <a href="#" class="panel-close">×</a>
                              <a href="#" class="minimize">−</a>
                          </div>
                          <h4 class="panel-title">Total Deliveries by Category</h4>
                      </div>
                      <div class="panel-body" style="padding-bottom: 121px;display: block;">
                          <table class="table" id="Deliveries_By_Category">
                              <thead>
                              <tr>
                                  <th>Category Name</th>
                                  <th>Total Item</th>
                              </tr>
                              </thead>
                              <tbody>
                              <?php foreach ($data['delivered_category_cnt'] as $item_category){ ?>
                              <tr>
                                  <td>
                                      @if($yr)
                                          <a href="delivered-category-item/{{$item_category->id}}/{{$yr}}/{{$mnth}}">{{$item_category->category_name}}</a>
                                      @elseif($start_date)
                                          <a href="delivered-category-item/{{$item_category->id}}/0/0/{{date("Y-m-d",strtotime($start_date))}}/{{date("Y-m-d",strtotime($end_date))}}">{{$item_category->category_name}}</a>
                                      @else
                                          <a href="delivered-category-item/{{$item_category->id}}">{{$item_category->category_name}}</a>
                                  @endif
                                  <td>
                                      {{ $item_category->item_count }}
                                  </td>
                              </tr>
                              <?php  }?>
                              </tbody>
                          </table>
                      </div>
                      <!-- panel-body -->
                      <!-- panel -->
                  </div>
              </div>
              <div class="col-md-6" >
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <div class="panel-btns">
                              <a href="#" class="panel-close">×</a>
                              <a href="#" class="minimize">−</a>
                          </div>
                          <h4 class="panel-title">Item Sale Listed by Category</h4>
                          <form method="get" id="category_sale_form" action="{{action('ProductController@saleByCategory')}}">
                              <input type="hidden" name="month" value="{{$mnth}}">
                              <input type="hidden" name="year" value="{{$yr}}">
                              <input type="hidden" name="start_date" value="{{$start_date}}">
                              <input type="hidden" name="end_date" value="{{$end_date}}">
                              <h6 style="cursor: pointer" id="category_sale">See Details</h6>
                          </form>
                      </div>
                      <div class="panel-body" style="display: block;">
                          <canvas id="bar-chart" width="500" height="450" style="overflow: scroll"></canvas>
                          @foreach($data['sale_category_cnt'] as $item_category)
                              <?php $cate_names[]=$item_category->category_name;
                              $cate_counts[]=$item_category->item_count;
                              ?>
                          @endforeach
                          <?php $cate_names =implode(',',$cate_names);
                          $cate_counts=implode(',',$cate_counts);
                          ?>

                          <input type="hidden" value="{{$cate_names}}" name="item_by_category_sale" id="#item_by_category_sale">
                          <input type="hidden" value="{{$cate_counts}}" name="item_by_category__sale_cnt" id="#item_by_category_sale_cnt">
                      </div>
                      <!-- panel-body -->
                      <!-- panel -->
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <div class="panel-btns">
                              <a href="#" class="panel-close">×</a>
                              <a href="#" class="minimize">−</a>
                          </div>
                          <h4 class="panel-title">Total returns, total refunds etc.</h4>
                          <div class="row">
                              <div class="col-xs-6">
                                  <small class="stat-label">Number of items under query</small>
                                  <h4>{{$data['total_return']}}</h4>
                              </div>
                              <div class="col-xs-6">
                                  <small class="stat-label">Value of sales query</small>
                                  <h4>{{$data['total_sale']}}</h4>
                              </div>
                          </div>
                          <form method="get" id="return_product_form" action="{{action('ProductController@returnProductList')}}">
                              <input type="hidden" name="month" value="{{$mnth}}">
                              <input type="hidden" name="year" value="{{$yr}}">
                              <input type="hidden" name="start_date" value="{{$start_date}}">
                              <input type="hidden" name="end_date" value="{{$end_date}}">
                              <h6 style="cursor: pointer" id="return_product">See Details</h6>
                          </form>
                      </div>
                      <div class="panel-body" style="display: block;">
                          <table class="table" id="Refunds">
                              <thead>
							 
                              <tr>
                                  <th>Type of query</th>
                                  <th>Item Count</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td><p>I received an item that does not match the seller's description</p></td>
                                  <td>{{$data['total_diff_product']}}</td>
                              </tr>
                              <tr>
                                  <td><p>I haven't received it yet</p></td>
                                  <td>{{$data['total_remaining_product']}}</td>
                              </tr>
                              <tr>
                                  <td><p>Buyer's Others</p></td>
                                  <td>{{$data['buyer_other']}}</td>
                              </tr>
                              <tr>
                                  <td><p>I haven't received my payment yet</p></td>
                                  <td>{{$data['total_remaining_payment']}}</td>
                              </tr>
                              <tr>
                                  <td><p>I need to cancel a transaction</p></td>
                                  <td>{{$data['total_cancal_transaction']}}</td>
                              </tr>
                              <tr>
                                  <td><p>Seller's Others</p></td>
                                  <td>{{$data['seller_other']}}</td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                      <!-- panel-body -->
                      <!-- panel -->
                  </div>
              </div>
          </div>
      </div>


  <!-- row -->
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
               var get_year={{$year}};
               var get_month={{$month}};
               const monthNames = ["","January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"];
               for(i = curYear-5 ; i <= curYear ; i++) {
                   if(i != get_year)
                   $('#year').append('<option value="'+i+'">'+i+'</option>');
               }
               if(get_year == curYear){
                   $('#month').find('option').not(':first').remove();
                   for(i = 1 ; i <= curMonth +1 ; i++) {
                       if (i != get_month)
                           $('#month').append('<option value="'+i+'">'+monthNames[i]+'</option>');
                   }
               }else{
                   for (i = 1; i <= 12; i++) {
                       if (i != get_month)
                       $('#month').append('<option value="' + i + '">' + monthNames[i] + '</option>');
                   }
               }
               $('#year').change(function () {
                   if($('#year').val()==curYear){
                       $('#month').find('option').remove();
                       for (i = 1; i <= curMonth + 1; i++) {
                           $('#month').append('<option value="' + i + '">' + monthNames[i] + '</option>');
                       }
                   }else{
                       $('#month').find('option').remove();
                       for (i = 1; i <= 12; i++) {
                               $('#month').append('<option value="' + i + '">' + monthNames[i] + '</option>');
                       }
                   }
               });
           });
            var item_by_category=$("input[name=item_by_category]").val();
            var item_by_category_cnt=$("input[name=item_by_category_cnt]").val();
            var item_by_category = item_by_category.split(',');
            var item_by_category_cnt = item_by_category_cnt.split(',');

           new Chart(document.getElementById("doughnut-chart"), {
               type: 'doughnut',
               data: {
                   labels: item_by_category,
                   datasets: [
                       {
                           label: "item category (counts)",
                           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95ca","#3e9505","#3e9584","#3e95df","#3e95ff","#3e95df"],
                           data: item_by_category_cnt
                       }
                   ]
               },
               options: {
                   title: {
                       display: true,
                       text: 'Item Listed by Category'
                   }
               }
           });

           // Bar chart
           var item_by_category_sale=$("input[name=item_by_category_sale]").val();
           var item_by_category_sale_cnt=$("input[name=item_by_category__sale_cnt]").val();
           var item_by_category_sale = item_by_category_sale.split(',');
           var item_by_category_sale_cnt = item_by_category_sale_cnt.split(',');

           new Chart(document.getElementById("bar-chart"), {
               type: 'bar',
               data: {
                   labels: item_by_category_sale,
                   datasets: [
                       {
                           label: "Item Sale (count)",
                           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95ca","#3e9505","#3e9584","#3e95df","#3e95ff","#3e95df"],
                           data: item_by_category_sale_cnt
                       }
                   ]
               },
               options: {
                   legend: { display: false },
                   title: {
                       display: true,
                       text: 'Item Sale Listed by Category'
                   }
               }
           });

           //USER FORM SUBMISSION

           $('#all_user').click(function () {
               $('#all_user_form').submit();
           });
           $('#active_user').click(function () {
               $('#active_user_form').submit();
           });
           $('#inactive_user').click(function () {
               $('#inactive_user_form').submit();
           });
           $('#delete_user').click(function () {
               $('#delete_user_form').submit();
           });
           //PRODUCT FORM SUBMISSION
           $('#deleted_product').click(function () {
               $('#deleted_product_form').submit();
           });
           $('#active_product').click(function () {
               $('#avtive_product_form').submit();
           });
           $('#pending_product').click(function () {
               $('#pending_product_form').submit();
           });

           //CASH SALE DETAILS
           $('#cash_sale').click(function () {
               $('#cash_sale_form').submit();
           });
            // PAYPAL SALE DETAILS
           $('#paypal_sale').click(function () {
               $('#paypal_sale_form').submit();
           });
           //LIST BY CATEGORY
           $('#category_list').click(function () {
               $('#category_list_form').submit();
           });
           //SALE BY CATEGORY
           $('#category_sale').click(function () {
               $('#category_sale_form').submit();
           });
           //RETURN PRODUCT LIST
           $('#return_product').click(function () {
               $('#return_product_form').submit();
           });


         </script>
  <script>
      jQuery('#datepicker').datepicker({

      });
      jQuery('#datepicker1').datepicker({

      });
  </script>

	  <script>
	  jQuery.fn.tableToCSV = function (options) {
    var settings = $.extend({
        filename: ""
    }, options);
    var clean_text = function (text) {
        text = $.trim(text.replace(/"/g, '""'));
        return '"' + text + '"';
    };
    $(this).each(function () {
        var table = $(this);
        var caption = settings.filename;
        var title = [];
        var rows = [];
        $(this).find('tr').each(function () {
            var data = [];
            $(this).find('th').each(function () {
                var text = clean_text($(this).text());
                title.push(text);
            });
            $(this).find('td').each(function () {
                var text = clean_text($(this).text());
                data.push(text);
            });
            data = data.join(",");
            rows.push(data);
        });
        title = title.join(",");
        rows = rows.join("\n");
        var csv = title + rows;
        var uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
        var download_link = document.createElement('a');
        download_link.href = uri;
        var ts = new Date().getTime();
        if (caption == "") {
            download_link.download = ts + ".csv";
        } else {
            download_link.download = caption + ".csv";
        }
        document.body.appendChild(download_link);
        download_link.click();
        document.body.removeChild(download_link);
    });
};
	/*   $(document).ready(function() {
		  
    //$('#Auction_Type_Export,#Buy_Export,#Seller_Auction_Type,#Sellers_Buy_It,#Deliveries_By_Category,#Refunds,#tot_category').DataTable( {
    $('table.display').DataTable( {
        dom: 'Bfrtip',
        
		buttons: [
            {
                extend: 'collection',
                text: 'Export',
                buttons: [
							{
							extend: 'excelHtml5',
							title: 'Data export'
						    },
							{
							extend: 'csvHtml5',
							title: 'Data export'
						    },
							{
							extend: 'pdfHtml5',
							title: 'Data export'
						    },
					
                ],
                dropdown: true
            }
        ],
		
		searching: false, 
		paging: false, 
		info: false
    } );
} ); */

   
    
$(function () 
{
	$('#download_format').change(function(e){
	  $("#ExportReporttoExcel option[value='']").prop('selected', true);
	});
		$('#ExportReporttoExcel').change(function(e){
			var selected_value = $('#ExportReporttoExcel option:selected').val();
			var format_type = $('#download_format option:selected').val();
			var year = $('#year option:selected').val();
			var month = $('#month option:selected').text();
			var Start_Date = $('#datepicker').val();
			var sdate ="";
			var edate ="";
			if(Start_Date != ""){
				sdate = Start_Date;
			}else{
				sdate = "-";
			}
			var End_Date = $('#datepicker1').val();
			if(End_Date != ""){
				edate = End_Date;
			}else{
				edate = "-";
			}
			var avoid ='table';
			var avoided = selected_value.replace(avoid,'');
			e.preventDefault();
			if(format_type != ""){
			if(format_type == "xls"){
						if(avoided == 0){
							var table = $('#Auction_Type_Export').dataTable({searching: false, paging: false, info: false});
		                    //window.open('data:application/vnd.ms-excel,' +encodeURIComponent(table[0].outerHTML)); 
							let file = new Blob([table[0].outerHTML], {type:"application/vnd.ms-excel"});
							DoActionxl(file,'Auction_Type_Export');
			}else if(avoided == 1){					
							var table1 = $('#Buy_Export').dataTable({searching: false, paging: false, info: false}); 
							let file = new Blob([table1[0].outerHTML], {type:"application/vnd.ms-excel"});
							DoActionxl(file,'Buy_Export');
			}else if(avoided == 2){
							var table2 = $('#Seller_Auction_Type').dataTable({searching: false, paging: false, info: false});
							let file = new Blob([table2[0].outerHTML], {type:"application/vnd.ms-excel"});
							DoActionxl(file,'Seller_Auction_Type');
			}else if(avoided == 3){
							var table3 = $('#Sellers_Buy_It').dataTable({searching: false, paging: false, info: false});
							let file = new Blob([table3[0].outerHTML], {type:"application/vnd.ms-excel"});
							DoActionxl(file,'Sellers_Buy_It');
			}else if(avoided == 4){
							 var table4 = $('#Deliveries_By_Category').dataTable({searching: false, paging: false, info: false});
							 let file = new Blob([table4[0].outerHTML], {type:"application/vnd.ms-excel"});
							 DoActionxl(file,'Deliveries_By_Category'); 
			}else if(avoided == 5){
							 var table5 = $('#Refunds').dataTable({searching: false, paging: false, info: false});
							 let file = new Blob([table5[0].outerHTML], {type:"application/vnd.ms-excel"});
							 DoActionxl(file,'Refunds');
			}else if(avoided == 6){
							 var table6 = $('#Total_Category').dataTable({searching: false, paging: false, info: false});
							 let file = new Blob([table6[0].outerHTML], {type:"application/vnd.ms-excel"});
							 DoActionxl(file,'Total_Category'); 
            }else {
				alert("Please Choose Table Want To Export!");
			}		
			}else if(format_type == "csv"){
							if(avoided == 0){
											$("#Auction_Type_Export").tableToCSV({ filename: 'Data Export - Auction_Type_Export'}); 
							}else if(avoided == 1){	
											$("#Buy_Export").tableToCSV({ filename: 'Data Export - Buy_Export'}); 
							}else if(avoided == 2){
											$("#Seller_Auction_Type").tableToCSV({ filename: 'Data Export - Seller_Auction_Type'});  
							}else if(avoided == 3){
											$("#Sellers_Buy_It").tableToCSV({ filename: 'Data Export - Sellers_Buy_It'});  
							}else if(avoided == 4){
											$("#Deliveries_By_Category").tableToCSV({ filename: 'Data Export - Deliveries_By_Category'});  
							}else if(avoided == 5){
											$("#Refunds").tableToCSV({ filename: 'Data Export - Total returns, total refunds etc'});   
							}else if(avoided == 6){
											$("#Total_Category").tableToCSV({ filename: 'Data Export - Total_Category'});   
							}else {
								alert("Please Choose Table Want To Export!");
							}		
			}
			else if(format_type == "pdf"){
				if(avoided == 0){
								DoAction('Auction_Type_Export','Number of item By Category wise & Auction Type',year,month,sdate,edate);
							}else if(avoided == 1){	
								DoAction('Buy_Export','Number of item By Category wise & Buy It Now',year,month,sdate,edate);
							}else if(avoided == 2){
								DoAction('Seller_Auction_Type','Fees Charged to Sellers by Category wise & Auction Type',year,month,sdate,edate);
							}else if(avoided == 3){
								DoAction('Sellers_Buy_It','Fees Charged to Sellers by Category wise & Buy It Now',year,month,sdate,edate);
							}else if(avoided == 4){
								DoAction('Deliveries_By_Category','Total Deliveries by Category',year,month,sdate,edate);
							}else if(avoided == 5){
								DoAction('Refunds','Total returns, total refunds etc',year,month,sdate,edate);
							}else if(avoided == 6){
								DoAction('Total_Category','Total Category',year,month,sdate,edate);
							}else {
								alert("Please Choose Table Want To Export!");
							}		
			}
			}else{
				alert("Please Choose which File Format Want To Export!");
				    $("#ExportReporttoExcel option[value='']").prop('selected', true);
			}
			
		
		});
		

});
function DoAction(tablename,headings,Year,Month,StartDate,EndDate){
 //$("body").on("click", "#btnExport", function () {
            html2canvas($('#'+tablename)[0],{
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
					//alert(data);
					var imgData = canvas.toDataURL('http://onlinetnt.com/assets/images/Dibdaa.png');              
                    var docDefinition = {
						header: [{
							marginTop:  30,
							alignment: 'center',
							image:'data:image/png;base64,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'
						}],
                        content: [	{
							 marginTop:  60,
			text: "Data Export - "+headings,bold: true,
			//style: 'header',
			alignment: 'center'
		},
		{
			marginTop:  5,
			table: {
			    	
				widths: ['*', '*', '*', '*'],
				
				body: [
					[{text:'Year',	alignment: 'center'},{text:'Month',	alignment: 'center'},{text:'Start Date',	alignment: 'center'},{text:'End Date',	alignment: 'center'} ],
					[{text:Year,alignment: 'center'},{text:Month,alignment: 'center'},{text:StartDate,alignment: 'center'},{text:EndDate,alignment: 'center'}]
				]
			}
		},
		{
							marginTop:  20,
							alignment: 'center',
                            image: data,
                            width: 500
                        }]
						
                    };
                    pdfMake.createPdf(docDefinition).download("Data Export - "+tablename+".pdf");
                }
            });
 }
 function DoActionxl(file,title){
 let url = URL.createObjectURL(file);

let a = $("<a />", {
  href: url,
  download: "Data Export - "+title+".xls"
})
.appendTo("body")
.get(0)
.click();
 }
 
 
        //});

	
	  </script>
<!-- <script>
 function load_unseen_notification(view = '')
 {
  $.ajax({
   url:"fetch.php",
   method:"POST",
   data:{view:view},
   dataType:"json",
   success:function(data)
   {
    $('.dropdown-menu').html(data.notification);
    if(data.unseen_notification > 0)
    {
     $('.count').html(data.unseen_notification);
    }
   }
  });
 }
 
 load_unseen_notification();
 
 $(document).on('click', '.dropdown-toggle', function(){
 alert('sadasd');
  $('.count').html('');
  load_unseen_notification('yes');
 });
 </script>-->
</body>
</html>







