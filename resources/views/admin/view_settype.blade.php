
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View SetType </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view settype</li>
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
                            <a href="{{action('SetTypeController@setTypeForm')}}" class="btn btn-primary">Add SetType</a> </div>
                    </div>
                </h5>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Images</th>
                            <th>Category</th>
                            <th>SetType</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($settypes as $settype){ ?>
                        <tr>
                            <td>
                                @if($settype->settype_image!='')
                                    <img height="auto" width="100" src="{{asset("/images/settype/$settype->id/$settype->settype_image")}}">
                                @else
                                    <img height="auto" width="100" src="{{asset("/images/placeholder.gif")}}">
                                @endif
                            </td>
                            <td><?php
                                $id=$settype->category_id;
                                $parentName=\App\Http\Controllers\CategoryController::viewParentCategoryName($id);
                                $parentCatName=$parentName->category_name;
                                echo $parentCatName;
                                ?></td>
                            <td><?php echo $settype->settype;?></td>

                            <td><a href="edit-settype/<?php echo $settype->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-settype/<?php echo $settype->id; ?>">Delete</a></td>
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

