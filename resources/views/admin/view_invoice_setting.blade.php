
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Seller Invoice Setting </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view seller invoice setting</li>
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
                            <th>Seller Name</th>
                            <th>Month/Year</th>
                            <th>Permission</th>
                            <!--<th>Action</th>-->
                        </tr>
                        </thead>
                        <tbody>
                        <?php
//                        echo '<pre>';
//                        print_r($datas);
//                        echo '</pre>';
                        foreach ($datas as $data){  ?>
                        <tr>
                            <td>{{$data->first_name .' '. $data->last_name .' ( '.$data->display_name .' ) '}}</td>
                            <td>{{date('F, Y', strtotime('01-'.$data->month))}}</td>
                            <!--<td>{{date('Y-M',strtotime($data->month))}}</td>-->
                            <td><?php 
                            $checklist_id = explode(',',$data->checklist_id);
                                    if(in_array('1',$checklist_id)){
                                        echo 'Edit Invoice';
                                        echo '<br>';
                                    } if(in_array('2',$checklist_id)){
                                        echo 'Resend Invoice';
                                        echo '<br>';
                                    } if(in_array('3',$checklist_id)){
                                        echo 'Charge card on file';
                                        echo '<br>';
                                    }
                                    
                                    ?></td>
<!--                            <td>
                                <a href="edit-invoice-form/<?php echo $data->id;?>">
                                    <i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i>
                                </a> &nbsp;&nbsp;&nbsp; 
                                <a href="delete-invoice-setting/<?php echo $data->id; ?>">
                                    <i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i>
                                </a> 
                            </td>-->
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

