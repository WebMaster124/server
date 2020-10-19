
@include('admin.include.sidebar')

<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Feedback </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view Feedback</li>
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
                            <th style="display: none">Created date</th>
                            <th>Sender</th>
                            <th>Receiver</th>
                            <th>Title</th>
                            <th>Product Title</th>
                            <th>Rate</th>
                            <th>Feedback Type</th>
                            <th>Feedback By</th>
                            <th>Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($feedbacks as $feedback){ ?>
                        <tr>
                            <td style="display: none">{{$feedback->created_date}}</td>
                            <td>{{$feedback->buyer_name}}</td>
                            <td>{{$feedback->seller_name}}</td>
                            <td>{{$feedback->title}}</td>
                            <td> <a title="{{$feedback->product_title }}" href="view-product-details/{{$feedback->product_id}}">{{ mb_strimwidth($feedback->product_title,0,25,'...')  }}</a> </td>
                            <td>@for($i=0;$i<$feedback->rate;$i++)
                                    <i class="fa fa-star text-star"></i>
                                @endfor
                            </td>
                            <td>{{$feedback->feedback_type}}</td>
                            <td>{{$feedback->feedback_by}}</td>
                            <td><a href="edit-feedback/<?php echo $feedback->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-feedback/<?php echo $feedback->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a></td>
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

