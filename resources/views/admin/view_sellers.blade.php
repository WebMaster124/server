
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
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
                            <th>Action</th>
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
                            <td>{{date('M d,Y',strtotime($user->created_date))}}</td>
                            <td>
                                <?php
                                if($user->user_status=='1'){
                                    echo "<div class=\"alert well-sm alert-success\"><center><a href='inactive-reason/$user->id/0/view-sellers'>Suspended</a></center></div>";
                                }
                                else if($user->user_status=='0'){
                                    echo "<div class=\"alert well-sm alert-danger\"><center><a href='inactive-reason/$user->id/1/view-sellers'>Active</a></center></div>";
                                }
                                ?>
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
            "bSort" : false,
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

