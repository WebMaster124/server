@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
    <style>
        .close{
            top: -7px;
            color: black;
            left: 10px;
            opacity: unset;
            z-index: 10;
            position: absolute;
        }
    </style>
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> View Category <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">View Category</li>
            </ol>
        </div>
    </div>
    <div class="contentpanel">
        @if(Session::has('message'))
            <div class="alert alert-warning">
                {{ Session::get('message') }}
            </div>
        @endif
        <div class="row">
            <div class="panel panel-default">
                    <div class="panel-body">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <td>Parent Category :</td>
                                <td><?php
                                    $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
                                    $tmp=0;
                                    ?>
                                    @foreach($parent_ids as $parent_id)
                                        @if($parent_id->id==$category->parent_id)
                                            {{$parent_id->category_name}}
                                            <?php $tmp=1; ?>
                                        @endif
                                    @endforeach
                                    @if($tmp==0)
                                        ---
                                    @endif</td>
                            </tr>
                            <tr>
                                <td>Category Name :</td>
                                <td>{{$category->category_name}}</td>
                            </tr>
                            <tr>
                                <td>Category Image :</td>
                                <td> @if($category->category_image!='')
                                        <img src="{{asset("/images/category/$category->category_image")}}" height="auto" width="200">
                                    @else
                                        <img height="auto" width="200" src="{{ asset('/images/placeholder.gif')}}">
                                    @endif</td>
                            </tr>
                            <tr>
                                <td>Facility Charges :</td>
                                <td>{{$category->facility_charges}}</td>
                            </tr>
                            <tr>
                                <td>Season Thumbnails Image:</td>
                                <td>
                                    @if($category->season_thumbnail!='')
                                        <img height="auto" width="200" src="{{ asset('/images/category/'.$category->season_thumbnail)}}">
                                    @else
                                        <img height="auto" width="200" src="{{ asset('/images/placeholder.gif')}}">
                                    @endif
                                </td>
                            </tr>
                            <tr>
                                <td>Banner Title :</td>
                                <td>{{$category->Category_banner_title}}</td>
                            </tr>
                            <tr>
                                <td>Banner Description :</td>
                                <td>{{$category->Category_banner_desc}}</td>
                            </tr>
                            <tr>
                                <td>Banner Image :</td>
                                <td>
                                    @if($category->Category_banner_image!='')
                                        <img height="auto" width="200" src="{{ asset('/images/category/'.$category->Category_banner_image)}}">
                                    @else
                                        <img height="auto" width="200" src="{{ asset('/images/placeholder.gif')}}">
                                    @endif
                                </td>
                            </tr>
                            <tr>
                                <td>Banner URL :</td>
                                <td> {{$category->Category_banner_link}} </td>
                            </tr>
                            <tr>
                                <td>Menu Type :</td>
                                <td>{{($category->menu_type=='top'?'Top Category':' Additional Category ')}}</td>
                            </tr>
                            </tbody>
                        </table>
            </div>
        </div>
    </div>
    <!-- row -->
</div>
<!-- contentpanel -->
</div>
<!-- mainpanel -->
<!-- rightpanel -->
</section>
@include('admin.include.footer')

<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
<script>
    $(document).ready(function () {
        var self= [];
        $('.close').on('click',function(){

            var imgSRC = $(this).parent().find('img').attr('src');
            var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

            self.push(imgName);
            $(this).parent().remove();
            $('.hidde_val').val(self);
        });


        var ids=$('#sel1').val();
        if(ids != 107 || ids != 0){
            $('#facility_charge').attr('disabled','disabled')
        }
        $('#sel1').change(function(){
            var id=$('#sel1').val();
            if(id == 107 || id==0){

                $('#facility_charge').removeAttr('disabled')
                $('#facility_charge').val('');
            }else{
                $.ajax({
                    type:'POST',
                    url:'../get-facility-charge',
                    data: {
                        '_token': $('input[name=_token]').val(),
                        'id': id,
                    },
                    success:function(data){
                        $("#facility_charge").val(data);
                        $('#facility_charge').attr('disabled','disabled')
                    }
                });
            }
        });
    });

</script>
</body>

</html>
