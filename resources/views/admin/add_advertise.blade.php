
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Advertisement </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add advertisement</li>
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
            <form action="{{ action('AdvertisementController@saveAdvertise') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Title *:</label>
                            <div class="col-sm-6">
                                <input required type="text" value="{{old('title')}}" class="form-control" id="category_name" placeholder="Enter title" name="title">
                                @if ($errors->has('title'))
                                    <div class="error">{{ $errors->first('title') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Description :</label>
                            <div class="col-sm-6">
                                <textarea class="form-control"  rows="5" placeholder="Enter Description" name="description">{{old('description')}}</textarea>
                                @if ($errors->has('description'))
                                    <div class="error">{{ $errors->first('description') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Image *:</label>
                            <div class="col-sm-6">
                                <input type="file" class="form-control" id="category_name"  name="image">
                                @if ($errors->has('image'))
                                    <div class="error">{{ $errors->first('image') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">URL *:</label>
                            <div class="col-sm-6">
                                <input required type="text" class="form-control" id="category_name" placeholder="Enter url" value="{{old('url')}}" name="url">
                                @if ($errors->has('url'))
                                    <div class="error">{{ $errors->first('url') }}</div>
                                @endif
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
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>
</html>
