
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Banner Management </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Banner Management</li>
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
            <form action="{{ action('FaqController@editFaqBanner') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $banner->id }}">
                    <?php // print_r($banner);exit; ?>
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Title <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <input value="{{$banner->title}}" type="text" class="form-control" placeholder="Enter  banner title" name="banner_title">
                                @if ($errors->has('title'))
                                    <div class="error">{{ $errors->first('title') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Banner Images <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                <input type="file" class="form-control" id="category_name"  name="banner_image">
                                <input type="hidden" class="form-control" id="category_name" value="{{$banner->image}}"  name="old_image">
                                <!--<input type="hidden" class="form-control" id="category_name" value=""  name="old_image">-->
                                    <!--<span class="help-block">Banner image must be in 1310 * 330 dimension.</span>-->
                                    
                                    @if ($errors->has('banner_image'))
                                    <div class="error">{{ $errors->first('banner_image') }}</div>
                                @endif
                                </div>
                                <div class="col-sm-6">
                                    <img height="auto" width="200" src="{{asset("/images/faq_banner/$banner->image")}}">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <button id="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-default">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
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

</body>
</html>
