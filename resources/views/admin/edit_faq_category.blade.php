@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
    <style>
        .close1{
            font-size: 20px;
            position: absolute;
            top: -11px;
            left: 200px;
            color: black;
        }
        .close{
            top: -11px;
            color: black;
            opacity: unset;
            left: 200px;
            position: absolute;
        }
        .close2{
            font-size: 20px;
            position: absolute;
            top: -11px;
            left: 200px;
            color: black;
        }
    </style>
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Update FAQ Category  <button class="btn btn-primary" onclick="history.go(-1);"><i style="font-size:10px" class="fa">&#xf060;</i> Go Back </button></h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Update Faq Category</li>
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
            <form action="{{ action('FaqController@editFaqCategoryData') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <input type="hidden" name="id" value="{{ $Faq->id }}">

                    <div class="panel-body">
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Title <span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <input type="text" required value="{{$Faq->title}}" class="form-control" id="topic_name" placeholder="Enter Title" name="topic_name">
                                @if ($errors->has('topic_name'))
                                    <div class="error">{{ $errors->first('topic_name') }}</div>
                                @endif
                            </div>
                        </div>
						<div class="form-group">
                            <label class="col-sm-3 control-label">Icon<span style="color:red">*</span> :</label>
                            <div class="col-sm-6">
                                <input type="text" required  value="{{$Faq->icon}}" class="form-control" id="topic_icon" placeholder="Enter Icon" name="topic_icon">
                                @if ($errors->has('topic_icon'))
                                    <div class="error">{{ $errors->first('topic_icon') }}</div>
                                @endif
                            </div>
                        </div>
						      
                        
                        
                        
                        
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Description <span style="color:red"> *</span> :</label>
                            <div class="col-sm-6">
                                <textarea class="form-control" rows="5" name="topic_desc"> {{$Faq->description}}</textarea>
                                @if ($errors->has('topic_desc'))
                                    <div class="error">{{ $errors->first('topic_desc') }}</div>
                                @endif
							</div>
                        </div>
						
						<div class="form-group">
                            <label class="col-sm-3 control-label">Status<span style="color:red"> *</span> :</label>
                            <div class="col-sm-6">
                                <select  value="{{$Faq->status}}" class="form-control" id="sel1" name="status">
                                    <option value="">Select Status</option>
                                                                        <option value="1" <?php if($Faq->status==1){ echo 'selected'; } ?> > Active</option>
									<option value="2" <?php if($Faq->status==2){ echo 'selected'; } ?>>Inactive</option>
                                    ?>
                                </select>
								@if ($errors->has('status'))
                                    <div class="error">{{ $errors->first('status') }}</div>
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

<div class="modal fade" id="modal-basic" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="myModalLabel"><strong>Icons</strong> List</h4>
                        </div>
                        <div class="modal-body">
                           <div class="main-content">
                <div class="content-view">
                    <div class="row">
<!--                        <div class="col-sm-6 col-sm-offset-3 m-b-1">
                            <h6 class="text-xs-center">Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.</h6></div>-->
                    </div>
                    <div class="fontawesome-list">
                        <div class="card">
                            <!--<div class="card-header no-bg b-a-0">23 New Icons in 4.6</div>-->
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>fa fa-american-sign-language-interpreting</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-asl-interpreting" aria-hidden="true"></i>fa fa--asl-interpreting</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-assistive-listening-systems" aria-hidden="true"></i>fa fa--assistive-listening-systems</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-audio-description" aria-hidden="true"></i>fa fa--audio-description</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-blind" aria-hidden="true"></i>fa fa--blind</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-braille" aria-hidden="true"></i>fa fa--braille</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-deaf" aria-hidden="true"></i>fa fa--deaf</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-deafness" aria-hidden="true"></i>fa fa--deafness</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-envira" aria-hidden="true"></i>fa fa--envira</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gitlab" aria-hidden="true"></i>fa fa--gitlab</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-glide" aria-hidden="true"></i>fa fa--glide</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-glide-g" aria-hidden="true"></i>fa fa--glide-g</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hard-of-hearing" aria-hidden="true"></i>fa fa--hard-of-hearing</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-low-vision" aria-hidden="true"></i>fa fa--low-vision</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-question-circle-o" aria-hidden="true"></i>fa fa--question-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sign-language" aria-hidden="true"></i>fa fa--sign-language</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-signing" aria-hidden="true"></i>fa fa--signing</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-snapchat" aria-hidden="true"></i>fa fa--snapchat</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-snapchat-ghost" aria-hidden="true"></i>fa fa--snapchat-ghost</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-snapchat-square" aria-hidden="true"></i>fa fa--snapchat-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-universal-access" aria-hidden="true"></i>fa fa--universal-access</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-viadeo" aria-hidden="true"></i>fa fa--viadeo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-viadeo-square" aria-hidden="true"></i>fa fa--viadeo-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-volume-control-phone" aria-hidden="true"></i>fa fa--volume-control-phone</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wheelchair-alt" aria-hidden="true"></i>fa fa--wheelchair-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wpbeginner" aria-hidden="true"></i>fa fa--wpbeginner</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wpforms" aria-hidden="true"></i>fa fa--wpforms</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Web Application Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-adjust" aria-hidden="true"></i>fa fa--adjust</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>fa fa--american-sign-language-interpreting</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-anchor" aria-hidden="true"></i>fa fa--anchor</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-archive" aria-hidden="true"></i>fa fa--archive</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-area-chart" aria-hidden="true"></i>fa fa--area-chart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows" aria-hidden="true"></i>fa fa--arrows</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows-h" aria-hidden="true"></i>fa fa--arrows-h</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows-v" aria-hidden="true"></i>fa fa--arrows-v</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-asl-interpreting" aria-hidden="true"></i>fa fa--asl-interpreting</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-assistive-listening-systems" aria-hidden="true"></i>fa fa--assistive-listening-systems</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-asterisk" aria-hidden="true"></i>fa fa--asterisk</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-at" aria-hidden="true"></i>fa fa--at</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-audio-description" aria-hidden="true"></i>fa fa--audio-description</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-automobile" aria-hidden="true"></i>fa fa--automobile</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-balance-scale" aria-hidden="true"></i>fa fa--balance-scale</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ban" aria-hidden="true"></i>fa fa--ban</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bank" aria-hidden="true"></i>fa fa--bank</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bar-chart" aria-hidden="true"></i>fa fa--bar-chart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bar-chart-o" aria-hidden="true"></i>fa fa--bar-chart-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-barcode" aria-hidden="true"></i>fa fa--barcode</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bars" aria-hidden="true"></i>fa fa--bars</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-0" aria-hidden="true"></i>fa fa--battery-0</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-1" aria-hidden="true"></i>fa fa--battery-1</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-2" aria-hidden="true"></i>fa fa--battery-2</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-3" aria-hidden="true"></i>fa fa--battery-3</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-4" aria-hidden="true"></i>fa fa--battery-4</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-empty" aria-hidden="true"></i>fa fa--battery-empty</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-full" aria-hidden="true"></i>fa fa--battery-full</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-half" aria-hidden="true"></i>fa fa--battery-half</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-quarter" aria-hidden="true"></i>fa fa--battery-quarter</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-battery-three-quarters" aria-hidden="true"></i>fa fa--battery-three-quarters</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bed" aria-hidden="true"></i>fa fa--bed</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-beer" aria-hidden="true"></i>fa fa--beer</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bell" aria-hidden="true"></i>fa fa--bell</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bell-o" aria-hidden="true"></i>fa fa--bell-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bell-slash" aria-hidden="true"></i>fa fa--bell-slash</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bell-slash-o" aria-hidden="true"></i>fa fa--bell-slash-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bicycle" aria-hidden="true"></i>fa fa--bicycle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-binoculars" aria-hidden="true"></i>fa fa--binoculars</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-birthday-cake" aria-hidden="true"></i>fa fa--birthday-cake</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-blind" aria-hidden="true"></i>fa fa--blind</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bluetooth" aria-hidden="true"></i>fa fa--bluetooth</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bluetooth-b" aria-hidden="true"></i>fa fa--bluetooth-b</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bolt" aria-hidden="true"></i>fa fa--bolt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bomb" aria-hidden="true"></i>fa fa--bomb</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-book" aria-hidden="true"></i>fa fa--book</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bookmark" aria-hidden="true"></i>fa fa--bookmark</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bookmark-o" aria-hidden="true"></i>fa fa--bookmark-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-braille" aria-hidden="true"></i>fa fa--braille</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-briefcase" aria-hidden="true"></i>fa fa--briefcase</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bug" aria-hidden="true"></i>fa fa--bug</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-building" aria-hidden="true"></i>fa fa--building</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-building-o" aria-hidden="true"></i>fa fa--building-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bullhorn" aria-hidden="true"></i>fa fa--bullhorn</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bullseye" aria-hidden="true"></i>fa fa--bullseye</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bus" aria-hidden="true"></i>fa fa--bus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cab" aria-hidden="true"></i>fa fa--cab</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-calculator" aria-hidden="true"></i>fa fa--calculator</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-calendar" aria-hidden="true"></i>fa fa--calendar</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>fa fa--calendar-check-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-calendar-minus-o" aria-hidden="true"></i>fa fa--calendar-minus-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-calendar-o" aria-hidden="true"></i>fa fa--calendar-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i>fa fa--calendar-plus-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-calendar-times-o" aria-hidden="true"></i>fa fa--calendar-times-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-camera" aria-hidden="true"></i>fa fa--camera</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-camera-retro" aria-hidden="true"></i>fa fa--camera-retro</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-car" aria-hidden="true"></i>fa fa--car</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-down" aria-hidden="true"></i>fa fa--caret-square-o-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-left" aria-hidden="true"></i>fa fa--caret-square-o-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-right" aria-hidden="true"></i>fa fa--caret-square-o-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-up" aria-hidden="true"></i>fa fa--caret-square-o-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i>fa fa--cart-arrow-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cart-plus" aria-hidden="true"></i>fa fa--cart-plus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc" aria-hidden="true"></i>fa fa--cc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-certificate" aria-hidden="true"></i>fa fa--certificate</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-check" aria-hidden="true"></i>fa fa--check</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-check-circle" aria-hidden="true"></i>fa fa--check-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-check-circle-o" aria-hidden="true"></i>fa fa--check-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-check-square" aria-hidden="true"></i>fa fa--check-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-check-square-o" aria-hidden="true"></i>fa fa--check-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-child" aria-hidden="true"></i>fa fa--child</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-circle" aria-hidden="true"></i>fa fa--circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-circle-o" aria-hidden="true"></i>fa fa--circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-circle-o-notch" aria-hidden="true"></i>fa fa--circle-o-notch</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-circle-thin" aria-hidden="true"></i>fa fa--circle-thin</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-clock-o" aria-hidden="true"></i>fa fa--clock-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-clone" aria-hidden="true"></i>fa fa--clone</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-close" aria-hidden="true"></i>fa fa--close</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cloud" aria-hidden="true"></i>fa fa--cloud</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cloud-download" aria-hidden="true"></i>fa fa--cloud-download</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cloud-upload" aria-hidden="true"></i>fa fa--cloud-upload</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-code" aria-hidden="true"></i>fa fa--code</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-code-fork" aria-hidden="true"></i>fa fa--code-fork</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-coffee" aria-hidden="true"></i>fa fa--coffee</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cog" aria-hidden="true"></i>fa fa--cog</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cogs" aria-hidden="true"></i>fa fa--cogs</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-comment" aria-hidden="true"></i>fa fa--comment</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-comment-o" aria-hidden="true"></i>fa fa--comment-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-commenting" aria-hidden="true"></i>fa fa--commenting</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-commenting-o" aria-hidden="true"></i>fa fa--commenting-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-comments" aria-hidden="true"></i>fa fa--comments</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-comments-o" aria-hidden="true"></i>fa fa--comments-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-compass" aria-hidden="true"></i>fa fa--compass</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-copyright" aria-hidden="true"></i>fa fa--copyright</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-creative-commons" aria-hidden="true"></i>fa fa--creative-commons</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-credit-card" aria-hidden="true"></i>fa fa--credit-card</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-credit-card-alt" aria-hidden="true"></i>fa fa--credit-card-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-crop" aria-hidden="true"></i>fa fa--crop</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-crosshairs" aria-hidden="true"></i>fa fa--crosshairs</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cube" aria-hidden="true"></i>fa fa--cube</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cubes" aria-hidden="true"></i>fa fa--cubes</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cutlery" aria-hidden="true"></i>fa fa--cutlery</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dashboard" aria-hidden="true"></i>fa fa--dashboard</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-database" aria-hidden="true"></i>fa fa--database</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-deaf" aria-hidden="true"></i>fa fa--deaf</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-deafness" aria-hidden="true"></i>fa fa--deafness</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-desktop" aria-hidden="true"></i>fa fa--desktop</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-diamond" aria-hidden="true"></i>fa fa--diamond</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>fa fa--dot-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-download" aria-hidden="true"></i>fa fa--download</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-edit" aria-hidden="true"></i>fa fa--edit</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ellipsis-h" aria-hidden="true"></i>fa fa--ellipsis-h</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ellipsis-v" aria-hidden="true"></i>fa fa--ellipsis-v</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-envelope" aria-hidden="true"></i>fa fa--envelope</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-envelope-o" aria-hidden="true"></i>fa fa--envelope-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-envelope-square" aria-hidden="true"></i>fa fa--envelope-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-eraser" aria-hidden="true"></i>fa fa--eraser</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-exchange" aria-hidden="true"></i>fa fa--exchange</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-exclamation" aria-hidden="true"></i>fa fa--exclamation</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>fa fa--exclamation-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>fa fa--exclamation-triangle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-external-link" aria-hidden="true"></i>fa fa--external-link</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-external-link-square" aria-hidden="true"></i>fa fa--external-link-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-eye" aria-hidden="true"></i>fa fa--eye</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-eye-slash" aria-hidden="true"></i>fa fa--eye-slash</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-eyedropper" aria-hidden="true"></i>fa fa--eyedropper</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fax" aria-hidden="true"></i>fa fa--fax</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-feed" aria-hidden="true"></i>fa fa--feed</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-female" aria-hidden="true"></i>fa fa--female</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fighter-jet" aria-hidden="true"></i>fa fa--fighter-jet</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-archive-o" aria-hidden="true"></i>fa fa--file-archive-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-audio-o" aria-hidden="true"></i>fa fa--file-audio-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-code-o" aria-hidden="true"></i>fa fa--file-code-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-excel-o" aria-hidden="true"></i>fa fa--file-excel-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-image-o" aria-hidden="true"></i>fa fa--file-image-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-movie-o" aria-hidden="true"></i>fa fa--file-movie-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-pdf-o" aria-hidden="true"></i>fa fa--file-pdf-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-photo-o" aria-hidden="true"></i>fa fa--file-photo-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-picture-o" aria-hidden="true"></i>fa fa--file-picture-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>fa fa--file-powerpoint-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-sound-o" aria-hidden="true"></i>fa fa--file-sound-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-video-o" aria-hidden="true"></i>fa fa--file-video-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-word-o" aria-hidden="true"></i>fa fa--file-word-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-zip-o" aria-hidden="true"></i>fa fa--file-zip-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-film" aria-hidden="true"></i>fa fa--film</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-filter" aria-hidden="true"></i>fa fa--filter</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fire" aria-hidden="true"></i>fa fa--fire</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fire-extinguisher" aria-hidden="true"></i>fa fa--fire-extinguisher</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-flag" aria-hidden="true"></i>fa fa--flag</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-flag-checkered" aria-hidden="true"></i>fa fa--flag-checkered</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-flag-o" aria-hidden="true"></i>fa fa--flag-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-flash" aria-hidden="true"></i>fa fa--flash</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-flask" aria-hidden="true"></i>fa fa--flask</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-folder" aria-hidden="true"></i>fa fa--folder</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-folder-o" aria-hidden="true"></i>fa fa--folder-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-folder-open" aria-hidden="true"></i>fa fa--folder-open</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-folder-open-o" aria-hidden="true"></i>fa fa--folder-open-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-frown-o" aria-hidden="true"></i>fa fa--frown-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-futbol-o" aria-hidden="true"></i>fa fa--futbol-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gamepad" aria-hidden="true"></i>fa fa--gamepad</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gavel" aria-hidden="true"></i>fa fa--gavel</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gear" aria-hidden="true"></i>fa fa--gear</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gears" aria-hidden="true"></i>fa fa--gears</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gift" aria-hidden="true"></i>fa fa--gift</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-glass" aria-hidden="true"></i>fa fa--glass</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-globe" aria-hidden="true"></i>fa fa--globe</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-graduation-cap" aria-hidden="true"></i>fa fa--graduation-cap</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-group" aria-hidden="true"></i>fa fa--group</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-grab-o" aria-hidden="true"></i>fa fa--hand-grab-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-lizard-o" aria-hidden="true"></i>fa fa--hand-lizard-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-paper-o" aria-hidden="true"></i>fa fa--hand-paper-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-peace-o" aria-hidden="true"></i>fa fa--hand-peace-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-pointer-o" aria-hidden="true"></i>fa fa--hand-pointer-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-rock-o" aria-hidden="true"></i>fa fa--hand-rock-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-scissors-o" aria-hidden="true"></i>fa fa--hand-scissors-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-spock-o" aria-hidden="true"></i>fa fa--hand-spock-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-stop-o" aria-hidden="true"></i>fa fa--hand-stop-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hard-of-hearing" aria-hidden="true"></i>fa fa--hard-of-hearing</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hashtag" aria-hidden="true"></i>fa fa--hashtag</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hdd-o" aria-hidden="true"></i>fa fa--hdd-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-headphones" aria-hidden="true"></i>fa fa--headphones</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-heart" aria-hidden="true"></i>fa fa--heart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-heart-o" aria-hidden="true"></i>fa fa--heart-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-heartbeat" aria-hidden="true"></i>fa fa--heartbeat</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-history" aria-hidden="true"></i>fa fa--history</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-home" aria-hidden="true"></i>fa fa--home</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hotel" aria-hidden="true"></i>fa fa--hotel</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass" aria-hidden="true"></i>fa fa--hourglass</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass-1" aria-hidden="true"></i>fa fa--hourglass-1</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass-2" aria-hidden="true"></i>fa fa--hourglass-2</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass-3" aria-hidden="true"></i>fa fa--hourglass-3</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass-end" aria-hidden="true"></i>fa fa--hourglass-end</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass-half" aria-hidden="true"></i>fa fa--hourglass-half</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass-o" aria-hidden="true"></i>fa fa--hourglass-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hourglass-start" aria-hidden="true"></i>fa fa--hourglass-start</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-i-cursor" aria-hidden="true"></i>fa fa--i-cursor</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-image" aria-hidden="true"></i>fa fa--image</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-inbox" aria-hidden="true"></i>fa fa--inbox</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-industry" aria-hidden="true"></i>fa fa--industry</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-info" aria-hidden="true"></i>fa fa--info</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-info-circle" aria-hidden="true"></i>fa fa--info-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-institution" aria-hidden="true"></i>fa fa--institution</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-key" aria-hidden="true"></i>fa fa--key</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-keyboard-o" aria-hidden="true"></i>fa fa--keyboard-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-language" aria-hidden="true"></i>fa fa--language</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-laptop" aria-hidden="true"></i>fa fa--laptop</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-leaf" aria-hidden="true"></i>fa fa--leaf</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-legal" aria-hidden="true"></i>fa fa--legal</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-lemon-o" aria-hidden="true"></i>fa fa--lemon-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-level-down" aria-hidden="true"></i>fa fa--level-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-level-up" aria-hidden="true"></i>fa fa--level-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-life-bouy" aria-hidden="true"></i>fa fa--life-bouy</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-life-buoy" aria-hidden="true"></i>fa fa--life-buoy</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-life-ring" aria-hidden="true"></i>fa fa--life-ring</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-life-saver" aria-hidden="true"></i>fa fa--life-saver</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-lightbulb-o" aria-hidden="true"></i>fa fa--lightbulb-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-line-chart" aria-hidden="true"></i>fa fa--line-chart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-location-arrow" aria-hidden="true"></i>fa fa--location-arrow</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-lock" aria-hidden="true"></i>fa fa--lock</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-low-vision" aria-hidden="true"></i>fa fa--low-vision</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-magic" aria-hidden="true"></i>fa fa--magic</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-magnet" aria-hidden="true"></i>fa fa--magnet</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mail-forward" aria-hidden="true"></i>fa fa--mail-forward</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mail-reply" aria-hidden="true"></i>fa fa--mail-reply</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mail-reply-all" aria-hidden="true"></i>fa fa--mail-reply-all</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-male" aria-hidden="true"></i>fa fa--male</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-map" aria-hidden="true"></i>fa fa--map</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-map-marker" aria-hidden="true"></i>fa fa--map-marker</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-map-o" aria-hidden="true"></i>fa fa--map-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-map-pin" aria-hidden="true"></i>fa fa--map-pin</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-map-signs" aria-hidden="true"></i>fa fa--map-signs</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-meh-o" aria-hidden="true"></i>fa fa--meh-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-microphone" aria-hidden="true"></i>fa fa--microphone</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-microphone-slash" aria-hidden="true"></i>fa fa--microphone-slash</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-minus" aria-hidden="true"></i>fa fa--minus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-minus-circle" aria-hidden="true"></i>fa fa--minus-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-minus-square" aria-hidden="true"></i>fa fa--minus-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-minus-square-o" aria-hidden="true"></i>fa fa--minus-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mobile" aria-hidden="true"></i>fa fa--mobile</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mobile-phone" aria-hidden="true"></i>fa fa--mobile-phone</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-money" aria-hidden="true"></i>fa fa--money</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-moon-o" aria-hidden="true"></i>fa fa--moon-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mortar-board" aria-hidden="true"></i>fa fa--mortar-board</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-motorcycle" aria-hidden="true"></i>fa fa--motorcycle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mouse-pointer" aria-hidden="true"></i>fa fa--mouse-pointer</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-music" aria-hidden="true"></i>fa fa--music</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-navicon" aria-hidden="true"></i>fa fa--navicon</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-newspaper-o" aria-hidden="true"></i>fa fa--newspaper-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-object-group" aria-hidden="true"></i>fa fa--object-group</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-object-ungroup" aria-hidden="true"></i>fa fa--object-ungroup</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paint-brush" aria-hidden="true"></i>fa fa--paint-brush</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paper-plane" aria-hidden="true"></i>fa fa--paper-plane</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paper-plane-o" aria-hidden="true"></i>fa fa--paper-plane-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paw" aria-hidden="true"></i>fa fa--paw</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pencil" aria-hidden="true"></i>fa fa--pencil</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pencil-square" aria-hidden="true"></i>fa fa--pencil-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>fa fa--pencil-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-percent" aria-hidden="true"></i>fa fa--percent</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-phone" aria-hidden="true"></i>fa fa--phone</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-phone-square" aria-hidden="true"></i>fa fa--phone-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-photo" aria-hidden="true"></i>fa fa--photo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-picture-o" aria-hidden="true"></i>fa fa--picture-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pie-chart" aria-hidden="true"></i>fa fa--pie-chart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plane" aria-hidden="true"></i>fa fa--plane</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plug" aria-hidden="true"></i>fa fa--plug</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plus" aria-hidden="true"></i>fa fa--plus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plus-circle" aria-hidden="true"></i>fa fa--plus-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plus-square" aria-hidden="true"></i>fa fa--plus-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plus-square-o" aria-hidden="true"></i>fa fa--plus-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-power-off" aria-hidden="true"></i>fa fa--power-off</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-print" aria-hidden="true"></i>fa fa--print</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-puzzle-piece" aria-hidden="true"></i>fa fa--puzzle-piece</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-qrcode" aria-hidden="true"></i>fa fa--qrcode</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-question" aria-hidden="true"></i>fa fa--question</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-question-circle" aria-hidden="true"></i>fa fa--question-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-question-circle-o" aria-hidden="true"></i>fa fa--question-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-quote-left" aria-hidden="true"></i>fa fa--quote-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-quote-right" aria-hidden="true"></i>fa fa--quote-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-random" aria-hidden="true"></i>fa fa--random</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-recycle" aria-hidden="true"></i>fa fa--recycle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-refresh" aria-hidden="true"></i>fa fa--refresh</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-registered" aria-hidden="true"></i>fa fa--registered</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-remove" aria-hidden="true"></i>fa fa--remove</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-reorder" aria-hidden="true"></i>fa fa--reorder</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-reply" aria-hidden="true"></i>fa fa--reply</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-reply-all" aria-hidden="true"></i>fa fa--reply-all</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-retweet" aria-hidden="true"></i>fa fa--retweet</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-road" aria-hidden="true"></i>fa fa--road</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rocket" aria-hidden="true"></i>fa fa--rocket</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rss" aria-hidden="true"></i>fa fa--rss</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rss-square" aria-hidden="true"></i>fa fa--rss-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-search" aria-hidden="true"></i>fa fa--search</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-search-minus" aria-hidden="true"></i>fa fa--search-minus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-search-plus" aria-hidden="true"></i>fa fa--search-plus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-send" aria-hidden="true"></i>fa fa--send</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-send-o" aria-hidden="true"></i>fa fa--send-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-server" aria-hidden="true"></i>fa fa--server</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-share" aria-hidden="true"></i>fa fa--share</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-share-alt" aria-hidden="true"></i>fa fa--share-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-share-alt-square" aria-hidden="true"></i>fa fa--share-alt-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-share-square" aria-hidden="true"></i>fa fa--share-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-share-square-o" aria-hidden="true"></i>fa fa--share-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-shield" aria-hidden="true"></i>fa fa--shield</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ship" aria-hidden="true"></i>fa fa--ship</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-shopping-bag" aria-hidden="true"></i>fa fa--shopping-bag</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-shopping-basket" aria-hidden="true"></i>fa fa--shopping-basket</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-shopping-cart" aria-hidden="true"></i>fa fa--shopping-cart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sign-in" aria-hidden="true"></i>fa fa--sign-in</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sign-language" aria-hidden="true"></i>fa fa--sign-language</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sign-out" aria-hidden="true"></i>fa fa--sign-out</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-signal" aria-hidden="true"></i>fa fa--signal</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-signing" aria-hidden="true"></i>fa fa--signing</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sitemap" aria-hidden="true"></i>fa fa--sitemap</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sliders" aria-hidden="true"></i>fa fa--sliders</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-smile-o" aria-hidden="true"></i>fa fa--smile-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-soccer-ball-o" aria-hidden="true"></i>fa fa--soccer-ball-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort" aria-hidden="true"></i>fa fa--sort</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-alpha-asc" aria-hidden="true"></i>fa fa--sort-alpha-asc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-alpha-desc" aria-hidden="true"></i>fa fa--sort-alpha-desc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-amount-asc" aria-hidden="true"></i>fa fa--sort-amount-asc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-amount-desc" aria-hidden="true"></i>fa fa--sort-amount-desc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-asc" aria-hidden="true"></i>fa fa--sort-asc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-desc" aria-hidden="true"></i>fa fa--sort-desc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-down" aria-hidden="true"></i>fa fa--sort-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-numeric-asc" aria-hidden="true"></i>fa fa--sort-numeric-asc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-numeric-desc" aria-hidden="true"></i>fa fa--sort-numeric-desc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sort-up" aria-hidden="true"></i>fa fa--sort-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-space-shuttle" aria-hidden="true"></i>fa fa--space-shuttle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-spinner" aria-hidden="true"></i>fa fa--spinner</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-spoon" aria-hidden="true"></i>fa fa--spoon</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-square" aria-hidden="true"></i>fa fa--square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-square-o" aria-hidden="true"></i>fa fa--square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-star" aria-hidden="true"></i>fa fa--star</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-star-half" aria-hidden="true"></i>fa fa--star-half</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-star-half-empty" aria-hidden="true"></i>fa fa--star-half-empty</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-star-half-full" aria-hidden="true"></i>fa fa--star-half-full</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-star-half-o" aria-hidden="true"></i>fa fa--star-half-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-star-o" aria-hidden="true"></i>fa fa--star-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sticky-note" aria-hidden="true"></i>fa fa--sticky-note</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sticky-note-o" aria-hidden="true"></i>fa fa--sticky-note-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-street-view" aria-hidden="true"></i>fa fa--street-view</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-suitcase" aria-hidden="true"></i>fa fa--suitcase</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sun-o" aria-hidden="true"></i>fa fa--sun-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-support" aria-hidden="true"></i>fa fa--support</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tablet" aria-hidden="true"></i>fa fa--tablet</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tachometer" aria-hidden="true"></i>fa fa--tachometer</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tag" aria-hidden="true"></i>fa fa--tag</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tags" aria-hidden="true"></i>fa fa--tags</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tasks" aria-hidden="true"></i>fa fa--tasks</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-taxi" aria-hidden="true"></i>fa fa--taxi</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-television" aria-hidden="true"></i>fa fa--television</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-terminal" aria-hidden="true"></i>fa fa--terminal</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumb-tack" aria-hidden="true"></i>fa fa--thumb-tack</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-down" aria-hidden="true"></i>fa fa--thumbs-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>fa fa--thumbs-o-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>fa fa--thumbs-o-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-up" aria-hidden="true"></i>fa fa--thumbs-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ticket" aria-hidden="true"></i>fa fa--ticket</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-times" aria-hidden="true"></i>fa fa--times</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-times-circle" aria-hidden="true"></i>fa fa--times-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-times-circle-o" aria-hidden="true"></i>fa fa--times-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tint" aria-hidden="true"></i>fa fa--tint</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-down" aria-hidden="true"></i>fa fa--toggle-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-left" aria-hidden="true"></i>fa fa--toggle-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-off" aria-hidden="true"></i>fa fa--toggle-off</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-on" aria-hidden="true"></i>fa fa--toggle-on</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-right" aria-hidden="true"></i>fa fa--toggle-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-up" aria-hidden="true"></i>fa fa--toggle-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-trademark" aria-hidden="true"></i>fa fa--trademark</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-trash" aria-hidden="true"></i>fa fa--trash</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-trash-o" aria-hidden="true"></i>fa fa--trash-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tree" aria-hidden="true"></i>fa fa--tree</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-trophy" aria-hidden="true"></i>fa fa--trophy</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-truck" aria-hidden="true"></i>fa fa--truck</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tty" aria-hidden="true"></i>fa fa--tty</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tv" aria-hidden="true"></i>fa fa--tv</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-umbrella" aria-hidden="true"></i>fa fa--umbrella</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-universal-access" aria-hidden="true"></i>fa fa--universal-access</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-university" aria-hidden="true"></i>fa fa--university</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-unlock" aria-hidden="true"></i>fa fa--unlock</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-unlock-alt" aria-hidden="true"></i>fa fa--unlock-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-unsorted" aria-hidden="true"></i>fa fa--unsorted</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-upload" aria-hidden="true"></i>fa fa--upload</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user" aria-hidden="true"></i>fa fa--user</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user-plus" aria-hidden="true"></i>fa fa--user-plus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user-secret" aria-hidden="true"></i>fa fa--user-secret</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user-times" aria-hidden="true"></i>fa fa--user-times</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-users" aria-hidden="true"></i>fa fa--users</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-video-camera" aria-hidden="true"></i>fa fa--video-camera</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-volume-control-phone" aria-hidden="true"></i>fa fa--volume-control-phone</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-volume-down" aria-hidden="true"></i>fa fa--volume-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-volume-off" aria-hidden="true"></i>fa fa--volume-off</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-volume-up" aria-hidden="true"></i>fa fa--volume-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-warning" aria-hidden="true"></i>fa fa--warning</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wheelchair" aria-hidden="true"></i>fa fa--wheelchair</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wheelchair-alt" aria-hidden="true"></i>fa fa--wheelchair-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wifi" aria-hidden="true"></i>fa fa--wifi</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wrench" aria-hidden="true"></i>fa fa--wrench</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Accessibility Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>fa fa--american-sign-language-interpreting</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-asl-interpreting" aria-hidden="true"></i>fa fa--asl-interpreting</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-assistive-listening-systems" aria-hidden="true"></i>fa fa--assistive-listening-systems</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-audio-description" aria-hidden="true"></i>fa fa--audio-description</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-blind" aria-hidden="true"></i>fa fa--blind</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-braille" aria-hidden="true"></i>fa fa--braille</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc" aria-hidden="true"></i>fa fa--cc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-deaf" aria-hidden="true"></i>fa fa--deaf</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-deafness" aria-hidden="true"></i>fa fa--deafness</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hard-of-hearing" aria-hidden="true"></i>fa fa--hard-of-hearing</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-low-vision" aria-hidden="true"></i>fa fa--low-vision</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-question-circle-o" aria-hidden="true"></i>fa fa--question-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sign-language" aria-hidden="true"></i>fa fa--sign-language</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-signing" aria-hidden="true"></i>fa fa--signing</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tty" aria-hidden="true"></i>fa fa--tty</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-universal-access" aria-hidden="true"></i>fa fa--universal-access</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-volume-control-phone" aria-hidden="true"></i>fa fa--volume-control-phone</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wheelchair" aria-hidden="true"></i>fa fa--wheelchair</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wheelchair-alt" aria-hidden="true"></i>fa fa--wheelchair-alt</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Hand Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-grab-o" aria-hidden="true"></i>fa fa--hand-grab-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-lizard-o" aria-hidden="true"></i>fa fa--hand-lizard-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-down" aria-hidden="true"></i>fa fa--hand-o-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-left" aria-hidden="true"></i>fa fa--hand-o-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-right" aria-hidden="true"></i>fa fa--hand-o-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-up" aria-hidden="true"></i>fa fa--hand-o-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-paper-o" aria-hidden="true"></i>fa fa--hand-paper-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-peace-o" aria-hidden="true"></i>fa fa--hand-peace-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-pointer-o" aria-hidden="true"></i>fa fa--hand-pointer-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-rock-o" aria-hidden="true"></i>fa fa--hand-rock-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-scissors-o" aria-hidden="true"></i>fa fa--hand-scissors-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-spock-o" aria-hidden="true"></i>fa fa--hand-spock-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-stop-o" aria-hidden="true"></i>fa fa--hand-stop-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-down" aria-hidden="true"></i>fa fa--thumbs-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>fa fa--thumbs-o-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>fa fa--thumbs-o-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-thumbs-up" aria-hidden="true"></i>fa fa--thumbs-up</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Transportation Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ambulance" aria-hidden="true"></i>fa fa--ambulance</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-automobile" aria-hidden="true"></i>fa fa--automobile</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bicycle" aria-hidden="true"></i>fa fa--bicycle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bus" aria-hidden="true"></i>fa fa--bus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cab" aria-hidden="true"></i>fa fa--cab</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-car" aria-hidden="true"></i>fa fa--car</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fighter-jet" aria-hidden="true"></i>fa fa--fighter-jet</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-motorcycle" aria-hidden="true"></i>fa fa--motorcycle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plane" aria-hidden="true"></i>fa fa--plane</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rocket" aria-hidden="true"></i>fa fa--rocket</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ship" aria-hidden="true"></i>fa fa--ship</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-space-shuttle" aria-hidden="true"></i>fa fa--space-shuttle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-subway" aria-hidden="true"></i>fa fa--subway</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-taxi" aria-hidden="true"></i>fa fa--taxi</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-train" aria-hidden="true"></i>fa fa--train</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-truck" aria-hidden="true"></i>fa fa--truck</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wheelchair" aria-hidden="true"></i>fa fa--wheelchair</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Gender Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-genderless" aria-hidden="true"></i>fa fa--genderless</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-intersex" aria-hidden="true"></i>fa fa--intersex</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars" aria-hidden="true"></i>fa fa--mars</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-double" aria-hidden="true"></i>fa fa--mars-double</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-stroke" aria-hidden="true"></i>fa fa--mars-stroke</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-stroke-h" aria-hidden="true"></i>fa fa--mars-stroke-h</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-stroke-v" aria-hidden="true"></i>fa fa--mars-stroke-v</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mercury" aria-hidden="true"></i>fa fa--mercury</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-neuter" aria-hidden="true"></i>fa fa--neuter</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-transgender" aria-hidden="true"></i>fa fa--transgender</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-transgender-alt" aria-hidden="true"></i>fa fa--transgender-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-venus" aria-hidden="true"></i>fa fa--venus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-venus-double" aria-hidden="true"></i>fa fa--venus-double</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-venus-mars" aria-hidden="true"></i>fa fa--venus-mars</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">File Type Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file" aria-hidden="true"></i>fa fa--file</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-archive-o" aria-hidden="true"></i>fa fa--file-archive-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-audio-o" aria-hidden="true"></i>fa fa--file-audio-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-code-o" aria-hidden="true"></i>fa fa--file-code-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-excel-o" aria-hidden="true"></i>fa fa--file-excel-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-image-o" aria-hidden="true"></i>fa fa--file-image-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-movie-o" aria-hidden="true"></i>fa fa--file-movie-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-o" aria-hidden="true"></i>fa fa--file-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-pdf-o" aria-hidden="true"></i>fa fa--file-pdf-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-photo-o" aria-hidden="true"></i>fa fa--file-photo-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-picture-o" aria-hidden="true"></i>fa fa--file-picture-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-powerpoint-o" aria-hidden="true"></i>fa fa--file-powerpoint-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-sound-o" aria-hidden="true"></i>fa fa--file-sound-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-text" aria-hidden="true"></i>fa fa--file-text</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-text-o" aria-hidden="true"></i>fa fa--file-text-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-video-o" aria-hidden="true"></i>fa fa--file-video-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-word-o" aria-hidden="true"></i>fa fa--file-word-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-zip-o" aria-hidden="true"></i>fa fa--file-zip-o</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Spinner Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-info-circle" aria-hidden="true"></i>fa fa--info-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-circle-o-notch" aria-hidden="true"></i>fa fa--circle-o-notch</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cog" aria-hidden="true"></i>fa fa--cog</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gear" aria-hidden="true"></i>fa fa--gear</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-refresh" aria-hidden="true"></i>fa fa--refresh</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-spinner" aria-hidden="true"></i>fa fa--spinner</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Form Control Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-check-square" aria-hidden="true"></i>fa fa--check-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-check-square-o" aria-hidden="true"></i>fa fa--check-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-circle" aria-hidden="true"></i>fa fa--circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-circle-o" aria-hidden="true"></i>fa fa--circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dot-circle-o" aria-hidden="true"></i>fa fa--dot-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-minus-square" aria-hidden="true"></i>fa fa--minus-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-minus-square-o" aria-hidden="true"></i>fa fa--minus-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plus-square" aria-hidden="true"></i>fa fa--plus-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plus-square-o" aria-hidden="true"></i>fa fa--plus-square-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-square" aria-hidden="true"></i>fa fa--square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-square-o" aria-hidden="true"></i>fa fa--square-o</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Payment Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-amex" aria-hidden="true"></i>fa fa--cc-amex</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-diners-club" aria-hidden="true"></i>fa fa--cc-diners-club</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-discover" aria-hidden="true"></i>fa fa--cc-discover</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-jcb" aria-hidden="true"></i>fa fa--cc-jcb</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-mastercard" aria-hidden="true"></i>fa fa--cc-mastercard</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-paypal" aria-hidden="true"></i>fa fa--cc-paypal</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-stripe" aria-hidden="true"></i>fa fa--cc-stripe</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-visa" aria-hidden="true"></i>fa fa--cc-visa</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-credit-card" aria-hidden="true"></i>fa fa--credit-card</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-credit-card-alt" aria-hidden="true"></i>fa fa--credit-card-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-google-wallet" aria-hidden="true"></i>fa fa--google-wallet</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paypal" aria-hidden="true"></i>fa fa--paypal</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Chart Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-area-chart" aria-hidden="true"></i>fa fa--area-chart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bar-chart" aria-hidden="true"></i>fa fa--bar-chart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bar-chart-o" aria-hidden="true"></i>fa fa--bar-chart-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-line-chart" aria-hidden="true"></i>fa fa--line-chart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pie-chart" aria-hidden="true"></i>fa fa--pie-chart</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Currency Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bitcoin" aria-hidden="true"></i>fa fa--bitcoin</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-btc" aria-hidden="true"></i>fa fa--btc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cny" aria-hidden="true"></i>fa fa--cny</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dollar" aria-hidden="true"></i>fa fa--dollar</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-eur" aria-hidden="true"></i>fa fa--eur</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-euro" aria-hidden="true"></i>fa fa--euro</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gbp" aria-hidden="true"></i>fa fa--gbp</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gg" aria-hidden="true"></i>fa fa--gg</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gg-circle" aria-hidden="true"></i>fa fa--gg-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ils" aria-hidden="true"></i>fa fa--ils</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-inr" aria-hidden="true"></i>fa fa--inr</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-jpy" aria-hidden="true"></i>fa fa--jpy</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-krw" aria-hidden="true"></i>fa fa--krw</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-money" aria-hidden="true"></i>fa fa--money</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rmb" aria-hidden="true"></i>fa fa--rmb</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rouble" aria-hidden="true"></i>fa fa--rouble</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rub" aria-hidden="true"></i>fa fa--rub</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ruble" aria-hidden="true"></i>fa fa--ruble</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rupee" aria-hidden="true"></i>fa fa--rupee</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-shekel" aria-hidden="true"></i>fa fa--shekel</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sheqel" aria-hidden="true"></i>fa fa--sheqel</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-try" aria-hidden="true"></i>fa fa--try</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-turkish-lira" aria-hidden="true"></i>fa fa--turkish-lira</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-usd" aria-hidden="true"></i>fa fa--usd</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-won" aria-hidden="true"></i>fa fa--won</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-yen" aria-hidden="true"></i>fa fa--yen</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Text Editor Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-align-center" aria-hidden="true"></i>fa fa--align-center</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-align-justify" aria-hidden="true"></i>fa fa--align-justify</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-align-left" aria-hidden="true"></i>fa fa--align-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-align-right" aria-hidden="true"></i>fa fa--align-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bold" aria-hidden="true"></i>fa fa--bold</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chain" aria-hidden="true"></i>fa fa--chain</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chain-broken" aria-hidden="true"></i>fa fa--chain-broken</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-clipboard" aria-hidden="true"></i>fa fa--clipboard</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-columns" aria-hidden="true"></i>fa fa--columns</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-copy" aria-hidden="true"></i>fa fa--copy</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cut" aria-hidden="true"></i>fa fa--cut</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dedent" aria-hidden="true"></i>fa fa--dedent</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-eraser" aria-hidden="true"></i>fa fa--eraser</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file" aria-hidden="true"></i>fa fa--file</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-o" aria-hidden="true"></i>fa fa--file-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-text" aria-hidden="true"></i>fa fa--file-text</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-file-text-o" aria-hidden="true"></i>fa fa--file-text-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-files-o" aria-hidden="true"></i>fa fa--files-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-floppy-o" aria-hidden="true"></i>fa fa--floppy-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-font" aria-hidden="true"></i>fa fa--font</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-header" aria-hidden="true"></i>fa fa--header</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-indent" aria-hidden="true"></i>fa fa--indent</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-italic" aria-hidden="true"></i>fa fa--italic</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-link" aria-hidden="true"></i>fa fa--link</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-list" aria-hidden="true"></i>fa fa--list</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-list-alt" aria-hidden="true"></i>fa fa--list-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-list-ol" aria-hidden="true"></i>fa fa--list-ol</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-list-ul" aria-hidden="true"></i>fa fa--list-ul</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-outdent" aria-hidden="true"></i>fa fa--outdent</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paperclip" aria-hidden="true"></i>fa fa--paperclip</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paragraph" aria-hidden="true"></i>fa fa--paragraph</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paste" aria-hidden="true"></i>fa fa--paste</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-repeat" aria-hidden="true"></i>fa fa--repeat</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rotate-left" aria-hidden="true"></i>fa fa--rotate-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rotate-right" aria-hidden="true"></i>fa fa--rotate-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-save" aria-hidden="true"></i>fa fa--save</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-scissors" aria-hidden="true"></i>fa fa--scissors</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-strikethrough" aria-hidden="true"></i>fa fa--strikethrough</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-subscript" aria-hidden="true"></i>fa fa--subscript</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-superscript" aria-hidden="true"></i>fa fa--superscript</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-table" aria-hidden="true"></i>fa fa--table</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-text-height" aria-hidden="true"></i>fa fa--text-height</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-text-width" aria-hidden="true"></i>fa fa--text-width</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-th" aria-hidden="true"></i>fa fa--th</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-th-large" aria-hidden="true"></i>fa fa--th-large</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-th-list" aria-hidden="true"></i>fa fa--th-list</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-underline" aria-hidden="true"></i>fa fa--underline</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-undo" aria-hidden="true"></i>fa fa--undo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-unlink" aria-hidden="true"></i>fa fa--unlink</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Directional Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-double-down" aria-hidden="true"></i>fa fa--angle-double-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-double-left" aria-hidden="true"></i>fa fa--angle-double-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-double-right" aria-hidden="true"></i>fa fa--angle-double-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-double-up" aria-hidden="true"></i>fa fa--angle-double-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-down" aria-hidden="true"></i>fa fa--angle-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-left" aria-hidden="true"></i>fa fa--angle-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-right" aria-hidden="true"></i>fa fa--angle-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angle-up" aria-hidden="true"></i>fa fa--angle-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i>fa fa--arrow-circle-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i>fa fa--arrow-circle-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>fa fa--arrow-circle-o-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>fa fa--arrow-circle-o-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>fa fa--arrow-circle-o-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i>fa fa--arrow-circle-o-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>fa fa--arrow-circle-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-circle-up" aria-hidden="true"></i>fa fa--arrow-circle-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-down" aria-hidden="true"></i>fa fa--arrow-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-left" aria-hidden="true"></i>fa fa--arrow-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-right" aria-hidden="true"></i>fa fa--arrow-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrow-up" aria-hidden="true"></i>fa fa--arrow-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows" aria-hidden="true"></i>fa fa--arrows</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows-alt" aria-hidden="true"></i>fa fa--arrows-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows-h" aria-hidden="true"></i>fa fa--arrows-h</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows-v" aria-hidden="true"></i>fa fa--arrows-v</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-down" aria-hidden="true"></i>fa fa--caret-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-left" aria-hidden="true"></i>fa fa--caret-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-right" aria-hidden="true"></i>fa fa--caret-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-down" aria-hidden="true"></i>fa fa--caret-square-o-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-left" aria-hidden="true"></i>fa fa--caret-square-o-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-right" aria-hidden="true"></i>fa fa--caret-square-o-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-square-o-up" aria-hidden="true"></i>fa fa--caret-square-o-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-caret-up" aria-hidden="true"></i>fa fa--caret-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i>fa fa--chevron-circle-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i>fa fa--chevron-circle-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i>fa fa--chevron-circle-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-circle-up" aria-hidden="true"></i>fa fa--chevron-circle-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-down" aria-hidden="true"></i>fa fa--chevron-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-left" aria-hidden="true"></i>fa fa--chevron-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-right" aria-hidden="true"></i>fa fa--chevron-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chevron-up" aria-hidden="true"></i>fa fa--chevron-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-exchange" aria-hidden="true"></i>fa fa--exchange</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-down" aria-hidden="true"></i>fa fa--hand-o-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-left" aria-hidden="true"></i>fa fa--hand-o-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-right" aria-hidden="true"></i>fa fa--hand-o-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hand-o-up" aria-hidden="true"></i>fa fa--hand-o-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-long-arrow-down" aria-hidden="true"></i>fa fa--long-arrow-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>fa fa--long-arrow-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>fa fa--long-arrow-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-long-arrow-up" aria-hidden="true"></i>fa fa--long-arrow-up</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-down" aria-hidden="true"></i>fa fa--toggle-down</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-left" aria-hidden="true"></i>fa fa--toggle-left</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-right" aria-hidden="true"></i>fa fa--toggle-right</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-toggle-up" aria-hidden="true"></i>fa fa--toggle-up</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Video Player Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-arrows-alt" aria-hidden="true"></i>fa fa--arrows-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-backward" aria-hidden="true"></i>fa fa--backward</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-compress" aria-hidden="true"></i>fa fa--compress</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-eject" aria-hidden="true"></i>fa fa--eject</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-expand" aria-hidden="true"></i>fa fa--expand</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fast-backward" aria-hidden="true"></i>fa fa--fast-backward</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fast-forward" aria-hidden="true"></i>fa fa--fast-forward</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-forward" aria-hidden="true"></i>fa fa--forward</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pause" aria-hidden="true"></i>fa fa--pause</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pause-circle" aria-hidden="true"></i>fa fa--pause-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pause-circle-o" aria-hidden="true"></i>fa fa--pause-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-play" aria-hidden="true"></i>fa fa--play</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-play-circle" aria-hidden="true"></i>fa fa--play-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-play-circle-o" aria-hidden="true"></i>fa fa--play-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-random" aria-hidden="true"></i>fa fa--random</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-step-backward" aria-hidden="true"></i>fa fa--step-backward</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-step-forward" aria-hidden="true"></i>fa fa--step-forward</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stop" aria-hidden="true"></i>fa fa--stop</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stop-circle" aria-hidden="true"></i>fa fa--stop-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stop-circle-o" aria-hidden="true"></i>fa fa--stop-circle-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-youtube-play" aria-hidden="true"></i>fa fa--youtube-play</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Brand Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-500px" aria-hidden="true"></i>fa fa--500px</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-adn" aria-hidden="true"></i>fa fa--adn</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-amazon" aria-hidden="true"></i>fa fa--amazon</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-android" aria-hidden="true"></i>fa fa--android</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-angellist" aria-hidden="true"></i>fa fa--angellist</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-apple" aria-hidden="true"></i>fa fa--apple</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-behance" aria-hidden="true"></i>fa fa--behance</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-behance-square" aria-hidden="true"></i>fa fa--behance-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bitbucket" aria-hidden="true"></i>fa fa--bitbucket</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bitbucket-square" aria-hidden="true"></i>fa fa--bitbucket-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bitcoin" aria-hidden="true"></i>fa fa--bitcoin</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-black-tie" aria-hidden="true"></i>fa fa--black-tie</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bluetooth" aria-hidden="true"></i>fa fa--bluetooth</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bluetooth-b" aria-hidden="true"></i>fa fa--bluetooth-b</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-btc" aria-hidden="true"></i>fa fa--btc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-buysellads" aria-hidden="true"></i>fa fa--buysellads</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-amex" aria-hidden="true"></i>fa fa--cc-amex</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-diners-club" aria-hidden="true"></i>fa fa--cc-diners-club</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-discover" aria-hidden="true"></i>fa fa--cc-discover</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-jcb" aria-hidden="true"></i>fa fa--cc-jcb</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-mastercard" aria-hidden="true"></i>fa fa--cc-mastercard</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-paypal" aria-hidden="true"></i>fa fa--cc-paypal</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-stripe" aria-hidden="true"></i>fa fa--cc-stripe</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cc-visa" aria-hidden="true"></i>fa fa--cc-visa</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-chrome" aria-hidden="true"></i>fa fa--chrome</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-codepen" aria-hidden="true"></i>fa fa--codepen</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-codiepie" aria-hidden="true"></i>fa fa--codiepie</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-connectdevelop" aria-hidden="true"></i>fa fa--connectdevelop</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-contao" aria-hidden="true"></i>fa fa--contao</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-css3" aria-hidden="true"></i>fa fa--css3</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dashcube" aria-hidden="true"></i>fa fa--dashcube</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-delicious" aria-hidden="true"></i>fa fa--delicious</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-deviantart" aria-hidden="true"></i>fa fa--deviantart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-digg" aria-hidden="true"></i>fa fa--digg</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dribbble" aria-hidden="true"></i>fa fa--dribbble</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dropbox" aria-hidden="true"></i>fa fa--dropbox</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-drupal" aria-hidden="true"></i>fa fa--drupal</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-edge" aria-hidden="true"></i>fa fa--edge</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-empire" aria-hidden="true"></i>fa fa--empire</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-envira" aria-hidden="true"></i>fa fa--envira</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-expeditedssl" aria-hidden="true"></i>fa fa--expeditedssl</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-facebook" aria-hidden="true"></i>fa fa--facebook</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-facebook-f" aria-hidden="true"></i>fa fa--facebook-f</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-facebook-official" aria-hidden="true"></i>fa fa--facebook-official</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-facebook-square" aria-hidden="true"></i>fa fa--facebook-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-firefox" aria-hidden="true"></i>fa fa--firefox</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-flickr" aria-hidden="true"></i>fa fa--flickr</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fonticons" aria-hidden="true"></i>fa fa--fonticons</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-fort-awesome" aria-hidden="true"></i>fa fa--fort-awesome</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-forumbee" aria-hidden="true"></i>fa fa--forumbee</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-foursquare" aria-hidden="true"></i>fa fa--foursquare</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ge" aria-hidden="true"></i>fa fa--ge</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-get-pocket" aria-hidden="true"></i>fa fa--get-pocket</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gg" aria-hidden="true"></i>fa fa--gg</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gg-circle" aria-hidden="true"></i>fa fa--gg-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-git" aria-hidden="true"></i>fa fa--git</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-git-square" aria-hidden="true"></i>fa fa--git-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-github" aria-hidden="true"></i>fa fa--github</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-github-alt" aria-hidden="true"></i>fa fa--github-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-github-square" aria-hidden="true"></i>fa fa--github-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gitlab" aria-hidden="true"></i>fa fa--gitlab</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gittip" aria-hidden="true"></i>fa fa--gittip</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-glide" aria-hidden="true"></i>fa fa--glide</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-glide-g" aria-hidden="true"></i>fa fa--glide-g</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-google" aria-hidden="true"></i>fa fa--google</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-google-plus" aria-hidden="true"></i>fa fa--google-plus</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-google-plus-square" aria-hidden="true"></i>fa fa--google-plus-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-google-wallet" aria-hidden="true"></i>fa fa--google-wallet</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-gratipay" aria-hidden="true"></i>fa fa--gratipay</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hacker-news" aria-hidden="true"></i>fa fa--hacker-news</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-houzz" aria-hidden="true"></i>fa fa--houzz</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-html5" aria-hidden="true"></i>fa fa--html5</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-instagram" aria-hidden="true"></i>fa fa--instagram</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-internet-explorer" aria-hidden="true"></i>fa fa--internet-explorer</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ioxhost" aria-hidden="true"></i>fa fa--ioxhost</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-joomla" aria-hidden="true"></i>fa fa--joomla</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-jsfiddle" aria-hidden="true"></i>fa fa--jsfiddle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-lastfm" aria-hidden="true"></i>fa fa--lastfm</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-lastfm-square" aria-hidden="true"></i>fa fa--lastfm-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-leanpub" aria-hidden="true"></i>fa fa--leanpub</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-linkedin" aria-hidden="true"></i>fa fa--linkedin</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-linkedin-square" aria-hidden="true"></i>fa fa--linkedin-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-linux" aria-hidden="true"></i>fa fa--linux</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-maxcdn" aria-hidden="true"></i>fa fa--maxcdn</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-meanpath" aria-hidden="true"></i>fa fa--meanpath</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-medium" aria-hidden="true"></i>fa fa--medium</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mixcloud" aria-hidden="true"></i>fa fa--mixcloud</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-modx" aria-hidden="true"></i>fa fa--modx</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-odnoklassniki" aria-hidden="true"></i>fa fa--odnoklassniki</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-odnoklassniki-square" aria-hidden="true"></i>fa fa--odnoklassniki-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-opencart" aria-hidden="true"></i>fa fa--opencart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-openid" aria-hidden="true"></i>fa fa--openid</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-opera" aria-hidden="true"></i>fa fa--opera</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-optin-monster" aria-hidden="true"></i>fa fa--optin-monster</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pagelines" aria-hidden="true"></i>fa fa--pagelines</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-paypal" aria-hidden="true"></i>fa fa--paypal</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pied-piper" aria-hidden="true"></i>fa fa--pied-piper</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pied-piper-alt" aria-hidden="true"></i>fa fa--pied-piper-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pinterest" aria-hidden="true"></i>fa fa--pinterest</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pinterest-p" aria-hidden="true"></i>fa fa--pinterest-p</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pinterest-square" aria-hidden="true"></i>fa fa--pinterest-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-product-hunt" aria-hidden="true"></i>fa fa--product-hunt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-qq" aria-hidden="true"></i>fa fa--qq</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ra" aria-hidden="true"></i>fa fa--ra</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-rebel" aria-hidden="true"></i>fa fa--rebel</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-reddit" aria-hidden="true"></i>fa fa--reddit</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-reddit-alien" aria-hidden="true"></i>fa fa--reddit-alien</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-reddit-square" aria-hidden="true"></i>fa fa--reddit-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-renren" aria-hidden="true"></i>fa fa--renren</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-safari" aria-hidden="true"></i>fa fa--safari</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-scribd" aria-hidden="true"></i>fa fa--scribd</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sellsy" aria-hidden="true"></i>fa fa--sellsy</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-share-alt" aria-hidden="true"></i>fa fa--share-alt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-share-alt-square" aria-hidden="true"></i>fa fa--share-alt-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-shirtsinbulk" aria-hidden="true"></i>fa fa--shirtsinbulk</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-simplybuilt" aria-hidden="true"></i>fa fa--simplybuilt</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-skyatlas" aria-hidden="true"></i>fa fa--skyatlas</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-skype" aria-hidden="true"></i>fa fa--skype</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-slack" aria-hidden="true"></i>fa fa--slack</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-slideshare" aria-hidden="true"></i>fa fa--slideshare</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-snapchat" aria-hidden="true"></i>fa fa--snapchat</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-snapchat-ghost" aria-hidden="true"></i>fa fa--snapchat-ghost</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-snapchat-square" aria-hidden="true"></i>fa fa--snapchat-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-soundcloud" aria-hidden="true"></i>fa fa--soundcloud</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-spotify" aria-hidden="true"></i>fa fa--spotify</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stack-exchange" aria-hidden="true"></i>fa fa--stack-exchange</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stack-overflow" aria-hidden="true"></i>fa fa--stack-overflow</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-steam" aria-hidden="true"></i>fa fa--steam</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-steam-square" aria-hidden="true"></i>fa fa--steam-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stumbleupon" aria-hidden="true"></i>fa fa--stumbleupon</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stumbleupon-circle" aria-hidden="true"></i>fa fa--stumbleupon-circle</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tencent-weibo" aria-hidden="true"></i>fa fa--tencent-weibo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-trello" aria-hidden="true"></i>fa fa--trello</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tripadvisor" aria-hidden="true"></i>fa fa--tripadvisor</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tumblr" aria-hidden="true"></i>fa fa--tumblr</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-tumblr-square" aria-hidden="true"></i>fa fa--tumblr-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-twitch" aria-hidden="true"></i>fa fa--twitch</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-twitter" aria-hidden="true"></i>fa fa--twitter</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-twitter-square" aria-hidden="true"></i>fa fa--twitter-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-usb" aria-hidden="true"></i>fa fa--usb</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-viacoin" aria-hidden="true"></i>fa fa--viacoin</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-viadeo" aria-hidden="true"></i>fa fa--viadeo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-viadeo-square" aria-hidden="true"></i>fa fa--viadeo-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-vimeo" aria-hidden="true"></i>fa fa--vimeo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-vimeo-square" aria-hidden="true"></i>fa fa--vimeo-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-vine" aria-hidden="true"></i>fa fa--vine</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-vk" aria-hidden="true"></i>fa fa--vk</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wechat" aria-hidden="true"></i>fa fa--wechat</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-weibo" aria-hidden="true"></i>fa fa--weibo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-weixin" aria-hidden="true"></i>fa fa--weixin</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-whatsapp" aria-hidden="true"></i>fa fa--whatsapp</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wikipedia-w" aria-hidden="true"></i>fa fa--wikipedia-w</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-windows" aria-hidden="true"></i>fa fa--windows</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wordpress" aria-hidden="true"></i>fa fa--wordpress</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wpbeginner" aria-hidden="true"></i>fa fa--wpbeginner</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wpforms" aria-hidden="true"></i>fa fa--wpforms</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-xing" aria-hidden="true"></i>fa fa--xing</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-xing-square" aria-hidden="true"></i>fa fa--xing-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-y-combinator" aria-hidden="true"></i>fa fa--y-combinator</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-y-combinator-square" aria-hidden="true"></i>fa fa--y-combinator-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-yahoo" aria-hidden="true"></i>fa fa--yahoo</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-yc" aria-hidden="true"></i>fa fa--yc</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-yc-square" aria-hidden="true"></i>fa fa--yc-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-yelp" aria-hidden="true"></i>fa fa--yelp</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-youtube" aria-hidden="true"></i>fa fa--youtube</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-youtube-play" aria-hidden="true"></i>fa fa--youtube-play</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-youtube-square" aria-hidden="true"></i>fa fa--youtube-square</div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header no-bg b-a-0">Medical Icons</div>
                            <div class="row card-block fontawesome-icon-list">
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ambulance" aria-hidden="true"></i>fa fa--ambulance</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-h-square" aria-hidden="true"></i>fa fa--h-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-heart" aria-hidden="true"></i>fa fa--heart</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-heart-o" aria-hidden="true"></i>fa fa--heart-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-heartbeat" aria-hidden="true"></i>fa fa--heartbeat</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hospital-o" aria-hidden="true"></i>fa fa--hospital-o</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-medkit" aria-hidden="true"></i>fa fa--medkit</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-plus-square" aria-hidden="true"></i>fa fa--plus-square</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-stethoscope" aria-hidden="true"></i>fa fa--stethoscope</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user-md" aria-hidden="true"></i>fa fa--user-md</div>
                                <div class="fa-hover col-md-3 col-sm-4"><i class="fa fa-wheelchair" aria-hidden="true"></i>fa fa--wheelchair</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                        </div>
                        
                    </div>
                
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
    .fa-hover{
        cursor:pointer;
    }
</style>


<script>
$('#topic_icon').click(function(){
    $('#modal-basic').modal('toggle');
});
$('.fa-hover').click(function(){
    var icon = $(this).text();
    $('#topic_icon').val(icon);
    $('.close').trigger('click');
});

</script>
<!--<script>
        $(document).ready(function () {
            var self= '';
            $('.close').on('click',function(){

                var imgSRC = $(this).parent().find('img').attr('src');
                var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

                //self.push(imgName);
                $(this).parent().remove();
                $('.hidde_val').val(imgName);
            });

            $('.close1').on('click',function(){

                var imgSRC = $(this).parent().find('img').attr('src');
                var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

                //self.push(imgName);
                $(this).parent().remove();
                $('.remove_cat_img').val(imgName);
            });
            $('.close2').on('click',function(){

                var imgSRC = $(this).parent().find('img').attr('src');
                var imgName = imgSRC.substr(imgSRC.lastIndexOf('/') + 1);

                //self.push(imgName);
                $(this).parent().remove();
                $('.remove_season_thumbnail').val(imgName);
            });

            var ids=$('#sel1').val();

            if(parseInt(ids)  == 107 || parseInt(ids) == 0){
                $('#facility_charge1').attr('disabled','disabled');
                $('#season_thumbnail').show();
            }else{
                $('#season_thumbnail').hide();
            }

            $('#sel1').change(function(){
                var id=$('#sel1').val();
                if( id == 107 || id==0){
                    $('#facility_charge').removeAttr('disabled');
                    $('#facility_charge').val('');
                    $('#season_thumbnail').show();
                }else{
                    $('#season_thumbnail').hide();
                    $.ajax({
                        type:'POST',
                        url:'../get-facility-charge',
                        data: {
                            '_token': $('input[name=_token]').val(),
                            'id': id,
                        },
                        success:function(data){
                            $("#facility_charge").val(data);
                           /*$('#facility_charge').attr('disabled','disabled');*/
                        }
                    });
                }
            });
        });

</script>-->
</body>

</html>
