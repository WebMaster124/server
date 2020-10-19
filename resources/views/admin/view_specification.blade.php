
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Specification </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">view specification</li>
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
                            <a href="{{action('SpecificationController@specificationForm')}}" class="btn btn-primary">Add Specification</a> </div>
                    </div>
                </h5>
                <br />
                <div class="table-responsive">
                    <table class="table" id="table2">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Specification</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($specifications as $specification){ ?>
                        <tr>
                            <td><?php
                                $id=$specification->category_id;
                                if($id!='0'){
                                    $parentName=\App\Http\Controllers\CategoryController::viewParentCategoryName($id);
                                    $parentCatName=$parentName->category_name;
                                }
                                else
                                    $parentCatName='-';

                                echo $parentCatName;
                                ?></td>
                            <td>
                                <table class="table table-hover">
                                    <tr>
                                        <th>Type</th>
                                        <th>Label</th>
                                        <th>Value</th>
                                    </tr>
                                <?php
                                $spec= $specification->specification;
                                $spec=unserialize($spec);
                                    for($i=0;$i<count($spec);$i++){
                                        ?>
                                        <tr>
                                            <td>
                                                @if($spec[$i]['type']==1)
                                                    Dropdown
                                                @elseif($spec[$i]['type']==2)
                                                    Inputbox
                                                @else($spec[$i]['type']==3)
                                                    Checkbox
                                                 @endif
                                                </td>
                                            <td> {{$spec[$i]['label']}} </td>
                                            <td>{{ $spec[$i]['value'] }}</td>
                                        </tr>
                                    <?php
                                    }
                            ?></table></td>
                            <td><a href="edit-specification/<?php echo $specification->id;?>"><i title="Edit" class="fa fa-edit text-primary" style="font-size: 20px;"></i></a> &nbsp;&nbsp;&nbsp; <a href="delete-specification/<?php echo $specification->id; ?>"><i title="Delete" class="fa fa-trash-o text-danger" style="font-size: 20px;"></i></a></td>
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

