
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
    <style>
        .filter{
            top: 38px;
            position: relative;
            left: 20%;
            z-index: 10;
        }
    </style>
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Sellers </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view Sellers</li>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Business Name</th>
                            <th>Business Mobile</th>
                            <th>Business Relationship</th>
                            <th>Nationality</th>
                            <th>Display Name</th>
                            <th>Since Date</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($users as $user){ ?>
                        <tr>
                            <td><a href="seller-details/{{$user->id}}">{{ $user->first_name .' '.$user->last_name }}</a> </td>
                            <td>{{$user->email}}</td>
                            <td>{{$user->business_name}}</td>
                            <td>{{$user->business_mobile}}</td>
                            <td>{{$user->business_relationship}}</td>
                            <td>{{$user->natinality}}</td>
                            <td>{{$user->display_name}}</td>
                            <td>{{date('D-M-d,Y',strtotime($user->created_date))}}</td>
                            <td>
                                <form method="get" action="{{action('SellerController@viewSellerPaymentHistory')}}">
                                    <input type="hidden" value="{{$user->id}}" name="id">
                                    <input type="hidden" value="{{date('m')}}" name="month">
                                    <input type="hidden" value="{{date('Y')}}" name="year">
                                    <button class="alert well-sm alert-success">Payment History</button>
                                </form>
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
        jQuery("#datepicker").focus( function()
        {
            $(this).val("");
            var table  =  jQuery('#table2').dataTable();
            table.fnFilter( $('#datepicker').val(),7,false);
        });
        jQuery('#table1').dataTable();

        jQuery('#table2').dataTable({
            "sPaginationType": "full_numbers",
            "bSort":false
        });

        jQuery('#datepicker').datepicker({
            dateFormat: 'D-M-dd,yy',
            maxDate: 0
        });

        var table  =  jQuery('#table2').dataTable();
        $('#datepicker').change(function () {
                table.fnFilter("^"+$('#datepicker').val()+"$",7,true);
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

