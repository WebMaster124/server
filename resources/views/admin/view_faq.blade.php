
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Faq </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view Faq</li>
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
                <h5 class="subtitle mb5"><div class="row">
                        <div class="col-md-3">
                            <a href="{{action('FaqController@faqForm')}}" class="btn btn-primary">Add Faq</a> </div>
                    </div>
                </h5>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Faq Topics</th>
                            <th>Question</th>
                            <th>Answer</th>
                            <th style="display: none">Created Date</th>
                            <th>Live View</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($faqs as $faq){ ?>
                        <tr>
                            <td>
                                    @if($faq->category_id==1)
                                        Listing
                                    @elseif($faq->category_id==2)
                                        Shipping
                                    @elseif($faq->category_id==3)
                                        Stores
                                    @elseif($faq->category_id==4)
                                        Returns
                                    @elseif($faq->category_id==5)
                                        Seller Protection
                                    @elseif($faq->category_id==6)
                                        Buyer
                                    @elseif($faq->category_id==7)
                                       Seller
                                    @endif
                            </td>
                            <td width="250px"><?php echo $faq->question;?></td>
                            <td width="550px"><?php echo $faq->answer;?></td>
                            <td style="display: none"><?php echo $faq->created_date;?></td>
                            <td> <a href="{{config('app.frontend_url')}}faq/listing/<?php echo $faq->category_id;?>" target="_blank"><i title="View" class="fa fa-eye text-primary" style="font-size: 20px;"></i></a></td>
                            <td><a href="edit-faq/<?php echo $faq->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-faq/<?php echo $faq->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a></td>
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
            aaSorting : [[3, 'asc']]
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

