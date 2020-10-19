
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Edit Faq <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">edit faq</li>
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
            <form action="{{ action('FaqController@editFaqData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $faq->id }}">

                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Faq Topics *:</label>
                            <div class="col-sm-6">
                                <?php $s1=($faq->category_id==1?'selected':'');
                                $s2=($faq->category_id==2?'selected':'');
                                $s3=($faq->category_id==3?'selected':'');
                                $s4=($faq->category_id==4?'selected':'');
                                $s5=($faq->category_id==5?'selected':'');
                                $s6=($faq->category_id==6?'selected':'');
                                $s7=($faq->category_id==7?'selected':'');?>
                                <select class="form-control" id="sel1" name="category_id">
                                    <option value="1" {{$s1}} >Listing</option>
                                    <option value="2" {{$s2}}>Shipping</option>
                                    <option value="3" {{$s3}}>Stores</option>
                                    <option value="4" {{$s4}}>Returns</option>
                                    <option value="5" {{$s5}}>Seller Protection</option>
                                    <option value="6" {{$s6}}>Buyer</option>
                                    <option value="7" {{$s7}}>Seller</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Question *:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" placeholder="Enter question" value="{{$faq->question}}" name="question">
                                @if ($errors->has('question'))
                                    <div class="error">{{ $errors->first('question') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Answer *:</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="answer">{{$faq->answer}}</textarea>
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
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>

</html>
