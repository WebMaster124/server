
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit About Cart <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit about cart</li>
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
            <form action="{{ action('AboutCartController@editAboutCartData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $about_cart->id }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Question *:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" placeholder="Enter question" value="{{$about_cart->question}}" name="question">
                                @if ($errors->has('question'))
                                    <div class="error">{{ $errors->first('question') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Answer *:</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="answer">{{$about_cart->answer}}</textarea>
                                @if ($errors->has('answer'))
                                    <div class="error">{{ $errors->first('answer') }}</div>
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

<script>

</script>

<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>

</html>
