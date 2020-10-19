
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Email Templates </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view email templates</li>
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
                <h5 class="subtitle mb5">
                    <div class="row">
                        <div class="col-md-3">
                          {{--  <a href="{{action('EmailController@emailTemplateForm')}}" class="btn btn-primary">Add Email Template</a>--}}
                        </div>
                    </div>
                </h5>
                <br/>
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th width="15%">Email Title</th>
                            <th>Subject</th>
                            <th width="70%">Content</th>
                            <th width="15%">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($emails as $email){ ?>
                        <tr>
                            <td width="100px"><?php echo $email->title;?></td>
                            <td width="100px"><?php echo $email->subject;?></td>
                            <td width="850px"><?php echo $email->content;?></td>
                            <td><a href="edit-email-template/<?php echo $email->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <?php } ?>
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

