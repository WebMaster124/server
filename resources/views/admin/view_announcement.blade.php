
@include('admin.include.sidebar')

<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Announcements </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view announcements</li>
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
                            <th>Announce By</th>
                            <th>Announce For</th>
                            <th>Announcement</th>
                            <th>Announce On</th>
                            <th>Created date</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($announcements as $announcement){ ?>
                        <tr>
                            <td>{{$announcement->announcements_by}}</td>
                            <td>{{$announcement->announce_to}}</td>
                            <td><?php echo $announcement->message;?></td>
                            <td>{{date('D-M-d,Y h:m a',strtotime($announcement->announce_on))}}</td>
                            <td>{{date('D-M-d,Y',strtotime($announcement->created_date))}}</td>
                            <td> <a href="delete-announcement/<?php echo $announcement->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a></td>
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
            aaSorting : [[0, 'desc']]
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

