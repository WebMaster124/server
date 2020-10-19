
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Faq Category </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view Faq Category</li>
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
                            <a href="{{action('FaqController@faqCategoryForm')}}" class="btn btn-primary">Add Faq Category</a> </div>
                    </div>
                </h5>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Icon</th>
                            <th>Description</th>
                            <th>Status</th>
                           
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($faq as $category){ ?>
                        <tr>
						<td><?php  echo $category->title;?></td>
                                                <td><i class="<?php  echo $category->icon;?>" aria-hidden="true"></i></td>
						<td><?php  echo $category->description;?></td>
						
                            <td><?php
                                $id=$category->status;
                                $parentCatName='';
                                if($id==2)
                                    $parentCatName='Inactive';
                                else if($id==1){
                                    $parentCatName='Active';
                                }
                                echo $parentCatName;
                                ?></td>
                            
                            <td><a href="edit-faq-category/<?php echo $category->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; 
							<a href="delete-faq-category/<?php echo $category->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="view-faq-category-detail/<?php echo $category->id;?>"><i title="View" class="fa fa-eye text-primary" style="font-size: 20px;"></i></a>
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

