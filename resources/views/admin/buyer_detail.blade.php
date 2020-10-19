@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Buyer Details  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button> </h2>
        <div class="breadcrumb-wrapper">
            <!--        <span class="label">You are here:</span>-->
            <ol class="breadcrumb">
                <!--          <li><a href="index.php">Dashboard</a></li>-->
                <li class="active">View buyer details</li>
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
                            <li class="active"><a href="#profile" data-toggle="tab"><strong>Profile</strong></a>
                            </li>
                            <li><a href="#contact" data-toggle="tab"><strong>Contact</strong></a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content mb30">
                            <div class="tab-pane active" id="profile">
                                <!--                                      <div class="tab-pane" id="profile">-->
                                <div class="userview-data">

                                    <table class="table table-hover">
                                        <tbody>
                                        <tr>
                                            <td>Profile Image:</td>
                                            <td> @if($user->profile_pic=='')
                                                    <img class="admin_reg_list_img" height="100" width="100"
                                                         src="{{ asset('images/user-placeholder.jpg') }}"/>
                                                @else
                                                    <img class="admin_reg_list_img" height="100" width="100"
                                                         src="{{ asset("images/user/$user->id/$user->profile_pic") }}"/>
                                                @endif</td>
                                        </tr>
                                        <tr>
                                            <td>User Name:</td>
                                            <td>{{$user->display_name}}</td>
                                        </tr>
                                        <tr>
                                            <td>First Name:</td>
                                            <td>{{$user->first_name}}</td>
                                        </tr>
                                        <tr>
                                            <td>Last Name:</td>
                                            <td>{{$user->last_name}}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Birth:</td>
                                            <td>{{$user->dob}}</td>
                                        </tr>
                                        <tr>
                                            <td>Gender:</td>
                                            <td>{{$user->gender}}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td><?php
                                                if ($user->user_status == '1') {
                                                    echo "<div style=\"width: 141px;\" class=\"alert well-sm alert-success\"><center>Active</center></div>";
                                                } else if ($user->user_status == '0') {
                                                    echo "<div style=\"width: 141px;\" class=\"alert well-sm alert-danger\"><center>Suspended</center></div>";
                                                }
                                                ?></td>
                                        <tr>
                                            <td>Date Registered:</td>
                                            <td>{{$user->created_date}}</td>
                                        </tr>
                                        <tr>
                                            <td>Date Updated:</td>
                                            <td>{{$user->updated_date}}</td>
                                        </tr>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane" id="contact">

                                <table class="table table-hover">
                                    <tbody>
                                    <tr>
                                        <td>Mobile Number:</td>
                                        <td>{{$user->mobile_number}}</td>
                                    </tr>
                                    <tr>
                                        <td>E-mail Address:</td>
                                        <td>{{$user->email}}</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td><?php $address= explode('@',$user->address); ?>
                                            @foreach($address as $a)
                                                {{$a}},
                                            @endforeach</td>
                                    </tr>
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

