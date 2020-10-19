
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Banner Set </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view banner set</li>
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
                            <th class="text-center">Banners Set</th>
                            <th class="text-center">Start Date</th>
                            {{--<th>End Date</th>--}}
                            <th class="text-center">Status</th>
                            <th class="text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($banner_sets as $banner_set){  ?>
                        <tr>
                            <td width="25%" align="center">{{$banner_set->set_name}}</td>
                            <td width="25%" align="center">{{$banner_set->start_date}}</td>
                            {{--<td>{{$banner_set->end_date}}</td>--}}
                            <td width="25%" align="center">
                                <?php
                                if($banner_set->status=='1'){
                                    echo "<div class=\"alert well-sm alert-success\"><center>Active</center></div>";
                                }
                                else if($banner_set->status=='0'){
                                    echo "<div class=\"alert well-sm alert-danger\"><center>Inactive</center></div>";
                                }
                                ?>
                            </td>
                            <td width="25%" align="center">
                                <?php
                                if($banner_set->status=='1'){
                                    echo "<div  style='width: 67px;'  class='alert well-sm alert-danger'> <a href='change-set-status/$banner_set->id'>Inactive</a> </div> &nbsp;";
                                }
                                else if($banner_set->status=='0'){
                                    echo "<div style='width: 67px;' class='alert well-sm alert-success'><a href='change-set-status/$banner_set->id'>Active</a> </div> &nbsp;";
                                }
                                ?>
                               <a href="edit-banner-set/<?php echo $banner_set->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-banner-set/<?php echo $banner_set->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a> </td>
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
            aaSorting : [[0, 'asc']]
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

