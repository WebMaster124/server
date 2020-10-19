
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Category </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view category</li>
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
                            <a href="{{action('CategoryController@mainCategoryForm')}}" class="btn btn-primary">Add Category</a> </div>
                    </div>
                </h5>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Parent Category</th>
                            <th>Facility Charges</th>
                            <th>Category</th>
                            <th>Live View</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($categories as $category){ ?>
                        <tr>
                            <td>
                                @if($category->category_image!='')
                                    <img height="auto" width="100" src="{{asset("/images/category/$category->category_image")}}">
                                @else
                                    <img height="auto" width="100" src="{{asset("/images/placeholder.gif")}}">
                                @endif
                            </td>
                            <td><?php
                                $id=$category->parent_id;
                                if($id==0)
                                    $parentCatName='-';
                                else{
                                    $parentName=\App\Http\Controllers\CategoryController::viewParentCategoryName($id);
                                    $parentCatName=$parentName->category_name;
                                }
                                echo $parentCatName;
                                ?></td>
                            <td><?php  echo $category->facility_charges;?></td>
                            <td><?php  echo $category->category_name;?></td>
                            <td> <a href="{{config('app.frontend_url')}}b/<?php echo $category->id;?>" target="_blank"><i title="View" class="fa fa-eye text-primary" style="font-size: 20px;"></i></a></td>
                            <td><a href="edit-main-category/<?php echo $category->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-main-category/<?php echo $category->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="view-category-detail/<?php echo $category->id;?>"><i title="View" class="fa fa-eye text-primary" style="font-size: 20px;"></i></a>
                            </td>
                        </tr>
                        @foreach($category->sub as $sub_category)
                            <tr>
                                <td>
                                    @if($sub_category->category_image!='')
                                        <img height="auto" width="100" src="{{asset("/images/category/$sub_category->category_image")}}">
                                    @else
                                        <img height="auto" width="100" src="{{asset("/images/placeholder.gif")}}">
                                    @endif
                                </td>
                                <td><?php
                                    $id=$sub_category->parent_id;
                                    if($id==0)
                                        $parentCatName='-';
                                    else{
                                        $parentName=\App\Http\Controllers\CategoryController::viewParentCategoryName($id);
                                        $parentCatName=$parentName->category_name;
                                    }
                                    echo $parentCatName;
                                    ?></td>
                                <td><?php  echo $sub_category->facility_charges;?></td>
                                <td><?php  echo $sub_category->category_name;?></td>
                                <td> <a href="{{config('app.frontend_url')}}c/<?php echo $sub_category->id;?>" target="_blank"><i title="View" class="fa fa-eye text-primary" style="font-size: 20px;"></i></a></td>
                                <td><a href="edit-main-category/<?php echo $sub_category->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-main-category/<?php echo $sub_category->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="view-category-detail/<?php echo $sub_category->id;?>"><i title="View" class="fa fa-eye text-primary" style="font-size: 20px;"></i></a>
                                </td>
                            </tr>
                            @endforeach

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

