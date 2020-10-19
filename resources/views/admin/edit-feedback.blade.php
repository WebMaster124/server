
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Update Feedback  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">update feedback</li>
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
            <form action="{{ action('FeedbackController@editFeedbackData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $feedback->id }}">
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Sender Name:</label>
                            <div class="col-sm-6">
                                <input type="text"  disabled="" class="form-control" value="{{$feedback->buyer_name}}" name="sender_id">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Reciever Name:</label>
                            <div class="col-sm-6">
                                <input type="text" disabled="" class="form-control"  value="{{$feedback->seller_name}}"  name="reciver_id">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Product Name*:</label>
                            <div class="col-sm-6">
                                <input type="text" disabled="" class="form-control"  value="{{$feedback->product_title}}">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Product Rating :</label>
                            <div class="col-sm-6">
                                @for($i=0;$i<$feedback->rate;$i++)
                                    <i class="fa fa-star text-star"></i>
                                @endfor
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Feedback type</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="category_ids" name="feedback_type">
                                    @if($feedback->feedback_type=='Possitive')
                                        <option selected value="Possitive">Possitive</option>
                                        <option value="Negative">Negative</option>
                                        <option value="Neutral">Neutral</option>
                                    @elseif($feedback->feedback_type=='Negative')
                                        <option value="Possitive">Possitive</option>
                                        <option selected value="Negative">Negative</option>
                                        <option value="Neutral">Neutral</option>
                                    @else
                                        <option value="Possitive">Possitive</option>
                                        <option value="Negative">Negative</option>
                                        <option selected value="Neutral">Neutral</option>
                                    @endif
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Title</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{$feedback->title}}" id="category_name" placeholder="Enter  title" name="title">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Description</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="description">{{$feedback->description}}</textarea>
                            </div>
                        </div>
                        <?php $tell_us_more=  unserialize($feedback->tell_us_more); ?>
                        @if($feedback->feedback_by=='buyer')
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Communication with Seller :</label>
                            <div class="col-sm-6">
                                @for($i=0;$i<$tell_us_more[0];$i++)
                                        <i class="fa fa-star text-star"></i>
                                @endfor
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Would you recommend item :</label>
                            <div class="col-sm-6">
                                @for($i=0;$i<$tell_us_more[1];$i++)
                                    <i class="fa fa-star text-star"></i>
                                @endfor
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Value for money :</label>
                            <div class="col-sm-6">
                                @for($i=0;$i<$tell_us_more[2];$i++)
                                    <i class="fa fa-star text-star"></i>
                                @endfor
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Item dispatched :</label>
                            <div class="col-sm-6">
                                @for($i=0;$i<$tell_us_more[3];$i++)
                                    <i class="fa fa-star text-star"></i>
                                @endfor
                            </div>
                        </div>
                         @else
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Communication with Buyer :</label>
                                <div class="col-sm-6">
                                    @for($i=0;$i<$tell_us_more[0];$i++)
                                        <i class="fa fa-star text-star"></i>
                                    @endfor
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Payment made promptly:</label>
                                <div class="col-sm-6">
                                    @for($i=0;$i<$tell_us_more[1];$i++)
                                        <i class="fa fa-star text-star"></i>
                                    @endfor
                                </div>
                            </div>
                            @endif
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
