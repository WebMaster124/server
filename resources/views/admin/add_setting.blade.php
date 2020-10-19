
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Setting </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add setting</li>
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
            <form action="{{ action('SettingController@saveSetting') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <?php

                        $feature_item=unserialize($all_setting->feature_item);
                        $setting=unserialize($all_setting->setting);
                        $season_deal_fee=unserialize($all_setting->season_deal_fee);
                        $insert_fee=unserialize($all_setting->insert_fee);


                    ?>
                    <div class="panel-body">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Item Buy it now fee (AED):</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" placeholder="Enter Item Buy it now fee" value="{{$setting['buyitnow_fee'] or 'not-exist'}}" name="setting[buyitnow_fee]">
                            </div>
                        </div>
                        <!--<input type="hidden" class="form-control" id="category_name" value="0" name="setting[insertion_fee]">-->
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Item default insertion fee (AED):</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" placeholder="Enter Item insertion fee"  name="setting[insertion_fee]" value="{{$setting['insertion_fee'] or 'not-exist'}}">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">Item insertion fees (AED):</label>
                            <div class="col-sm-3">
                                <label class="control-label">AED 0.01 to AED 3.75 </label>
                                <input type="text" class="form-control" id="category_name" value="{{$insert_fee['first']}}"  placeholder="Enter AED" name="insert_fee[first]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">AED 3.75  to AED 35  </label>
                                <input type="text" class="form-control" id="category_name" value="{{$insert_fee['second']}}"  placeholder="Enter AED" name="insert_fee[second]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class="control-label">AED 36  to AED 90 </label>
                                <input type="text" class="form-control" id="category_name" value="{{$insert_fee['third']}}"  placeholder="Enter AED" name="insert_fee[third]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">AED 91 to AED 180</label>
                                <input type="text" class="form-control" id="category_name" value="{{$insert_fee['four']}}"  placeholder="Enter AED" name="insert_fee[four]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class=" control-label">AED 181 to AED 750</label>
                                <input type="text" class="form-control" id="category_name" value="{{$insert_fee['five']}}"  placeholder="Enter AED" name="insert_fee[five]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">AED 751 or more</label>
                                <input type="text" class="form-control" id="category_name" value="{{$insert_fee['six']}}"  placeholder="Enter AED" name="insert_fee[six]">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">Insert free product count:</label>
                            <div class="col-sm-6">
                                <input type="number" step="any" class="form-control" id="category_name" placeholder="Enter insert free product count" value="{{$setting['free_insertion']}}" name="setting[free_insertion]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Free product for months:</label>
                            <div class="col-sm-9">
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Start Date *:</label>
                                    <div class="col-sm-6">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                                    <input required  type="text" class="form-control" value="{{$setting['start_date']}}"  placeholder="mm/dd/yyyy" id="datepicker" name="setting[start_date]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">End Date *:</label>
                                    <div class="col-sm-6">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                                    <input required  type="text" class="form-control"  placeholder="mm/dd/yyyy" value="{{$setting['end_date']}}" id="datepicker1" name="setting[end_date]">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div class="input-group">
                                            <?php
//                                            $checklist = explode(',', $setting->checklist_id);
                                            ?>
                                            
                                            <input type="checkbox" name="setting[checklist][]"  value="1" id="selectAll" <?php if(in_array(1, $setting['checklist'])){ echo 'checked';} ?> /> <label>ALL</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="2" id="checkPrimary2" <?php if(in_array(2, $setting['checklist'])){ echo 'checked';} ?> /> <label>Listing Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="3" id="checkPrimary3" <?php if(in_array(3, $setting['checklist'])){ echo 'checked';} ?> /> <label>Final sales commission Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="4" id="checkPrimary4" <?php if(in_array(4, $setting['checklist'])){ echo 'checked';} ?> /> <label>Buy it now Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="5" id="checkPrimary5" <?php if(in_array(5, $setting['checklist'])){ echo 'checked';} ?> /> <label>Season deal Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="6" id="checkPrimary5" <?php if(in_array(6, $setting['checklist'])){ echo 'checked';} ?> /> <label>Feature deal Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="7" id="checkPrimary5" <?php if(in_array(7, $setting['checklist'])){ echo 'checked';} ?>/> <label>Inserting Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="8" id="checkPrimary5" <?php if(in_array(8, $setting['checklist'])){ echo 'checked';} ?>/> <label>Subtitle Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="9" id="checkPrimary5" <?php if(in_array(9, $setting['checklist'])){ echo 'checked';} ?>/> <label>Category Fee</label><br>
                                            <input type="checkbox" name="setting[checklist][]"  value="10" id="checkPrimary5" <?php if(in_array(10, $setting['checklist'])){ echo 'checked';} ?>/> <label>Relisting Fee</label><br>
                                        </div>
<!--                                        @if ($errors->has('checklist'))
                                            <div class="error">{{ $errors->first('checklist') }}</div>
                                        @endif-->
                                            </div>
                                        </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Subtitle fee (AED):</label>
                            <div class="col-sm-6">
                                <input type="number"  step="any" class="form-control" id="category_name" value="{{$setting['subtitle_fee']}}"  placeholder="Enter Subtitle fee" name="setting[subtitle_fee]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Basket - email notification days:</label>
                            <div class="col-sm-6">
                                <input type="text"  step="any" class="form-control" id="category_name" value="{{$setting['basket_email']}}"  placeholder="Enter basket - email notification days" name="setting[basket_email]">
                            </div>
                        </div>
                        <div style="display: none" class="form-group">
                            <label class="col-sm-3 control-label">Picture fee (AED):</label>
                            <div class="col-sm-6">
                                <input type="number"  step="any" class="form-control" id="category_name"  value="{{$setting['picture_fee']}}" placeholder="Enter picture  fee" name="setting[picture_fee]">
                            </div>
                        </div>
                        <div style="display: none" class="form-group">
                            <label class="col-sm-3 control-label">Additional picture  fee (AED):</label>
                            <div class="col-sm-6">
                                <input type="number"  step="any" class="form-control" id="category_name" value="{{$setting['addition_picture_fee']}}" placeholder="Enter Additional picture  fee" name="setting[addition_picture_fee]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Punch line:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" value="{{$setting['punch_line']}}"  placeholder="Enter Punch Line" name="setting[punch_line]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Invoice note:</label>
                            <div class="col-sm-6">
                                <textarea rows="10" class="form-control"  placeholder="Enter Punch Line" name="invoice_note">{{$all_setting->invoice_note}} </textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Category default fee (AED):</label>
                            <div class="col-sm-6">
                                <input type="number"  step="any" class="form-control" id="category_name" value="{{$setting['category_fee']}}"  placeholder="Enter Category default fee" name="setting[category_fee]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Product return days:</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="category_name" value="{{$setting['return_days']}}"  placeholder="Enter return days like 3,5,7" name="setting[return_days]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Feature item fee (AED):</label>
                            <div class="col-sm-3">
                                <label class="control-label">For 1 Day </label>
                                <input type="number" class="form-control" id="category_name" value="{{$feature_item['Days_1']}}"  placeholder="Enter day 1 fee" name="feature_item[Days_1]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">For 3 Days  </label>
                                <input type="number" class="form-control" id="category_name" value="{{$feature_item['Days_3']}}"  placeholder="Enter day 3 fee" name="feature_item[Days_3]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class="control-label">For 5 Days </label>
                                <input type="number" class="form-control" id="category_name" value="{{$feature_item['Days_5']}}"  placeholder="Enter day 5 fee" name="feature_item[Days_5]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">For 7 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$feature_item['Days_7']}}"  placeholder="Enter day 7 fee" name="feature_item[Days_7]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class=" control-label">For 10 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$feature_item['Days_10']}}"  placeholder="Enter day 10 fee" name="feature_item[Days_10]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">For 15 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$feature_item['Days_15']}}"  placeholder="Enter day 15 fee" name="feature_item[Days_15]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class="control-label">For 30 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$feature_item['Days_30']}}"  placeholder="Enter day 30 fee" name="feature_item[Days_30]">
                            </div>
                        </div>


                        <div class="form-group">
                            <label class="col-sm-3 control-label">Season deal fee (AED):</label>
                            <div class="col-sm-3">
                                <label class="control-label">For 1 Day </label>
                                <input type="number" class="form-control" id="category_name" value="{{$season_deal_fee['Days_1']}}"  placeholder="Enter day 1 fee" name="season_deal_fee[Days_1]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">For 3 Days  </label>
                                <input type="number" class="form-control" id="category_name" value="{{$season_deal_fee['Days_3']}}"  placeholder="Enter day 3 fee" name="season_deal_fee[Days_3]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class="control-label">For 5 Days </label>
                                <input type="number" class="form-control" id="category_name" value="{{$season_deal_fee['Days_5']}}"  placeholder="Enter day 5 fee" name="season_deal_fee[Days_5]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">For 7 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$season_deal_fee['Days_7']}}"  placeholder="Enter day 7 fee" name="season_deal_fee[Days_7]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class=" control-label">For 10 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$season_deal_fee['Days_10']}}"  placeholder="Enter day 10 fee" name="season_deal_fee[Days_10]">
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label">For 15 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$season_deal_fee['Days_15']}}"  placeholder="Enter day 15 fee" name="season_deal_fee[Days_15]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label"></label>
                            <div class="col-sm-3">
                                <label class="control-label">For 30 Days</label>
                                <input type="number" class="form-control" id="category_name" value="{{$season_deal_fee['Days_30']}}"  placeholder="Enter day 30 fee" name="season_deal_fee[Days_30]">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Home Page Menu Value (AED):</label>
                            <div class="col-sm-6">
                                <label class="control-label">Under </label>
                                <input type="number" class="form-control" id="menu_value" value="{{$all_setting->home_page_menu_value}}"  placeholder="Enter value" name="menu_value">
                            </div>
                        </div>
<!--                        <div class="form-group" >
                            <label class="col-sm-3 control-label">Currency <span style="color:red"> </span>:</label>
                            <div class="col-sm-3">
                                <select required class="form-control" id="currency_id" name="currency_id">
								<option value="">Select Currency </option>
                                 <?php
//                                    $currency_ids = \App\Http\Controllers\SettingController::viewCurrency();
//										$i =0;
//										$get_img ="";
//                                    foreach ($currency_ids  as $currency_id){
//                                    $select='';				
                                    ?>
                              <option <?php // echo $select; ?> value="<?php // echo $currency_id->id; ?>"><?php // echo $currency_id->country.' - '.$currency_id->currency.'( '.$currency_id->symbol.' )'; ?></option>
                                    <?php // } ?>
                                </select>
                            </div>
                        </div>-->
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
    jQuery('#datepicker').datepicker({
        minDate : 0
    });
    jQuery('#datepicker1').datepicker({
        minDate : 0
    });
</script>
<style>
    div.error{
        color: red;
        display:block !important;
    }
</style>
</body>

</html>
