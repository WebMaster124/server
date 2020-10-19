
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Relist Management </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Relist Management</li>
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
            <form action="{{ action('SettingController@autoRelistForm') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                       <div class="form-group">
                            <label class="col-sm-3 control-label">Product Relist Times *:</label>
                            <div class="col-sm-6">
                                <input type="number" value="<?php if($relist['times']!='') { echo $relist['times']; } ?>" class="form-control" id="relist_times" placeholder="Product Relist Times" name="times">
                                <!--<input type="number" value="" class="form-control" id="relist_times" placeholder="Product Relist Times" name="relist[times]">-->
                                @if ($errors->has('times'))
                                    <div class="error">{{ $errors->first('times') }}</div>
                                @endif
                            </div>
                        </div>
                        
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Auto Relist</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="checkbox" name="autorelist" <?php echo ($relist['autorelist']=='1'?'checked':'') ?>  value="1" id="checkPrimary1" />
                                        <!--<input type="checkbox" name="relist[autorelist]" value="0" id="checkPrimary1" />-->
<!--                                        <label for="radioPrimary1">Yes </label>-->
                                        @if ($errors->has('autorelist'))
                                    <div class="error">{{ $errors->first('autorelist') }}</div>
                                @endif
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Charge for auto relist?</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="charge" <?php echo ($relist['charge']==1?'checked':'') ?>  value="1" id="radioPrimary0" />
                                        <!--<input type="radio" name="relist[charge]" value="0" id="radioPrimary1" />-->
                                        <label for="radioPrimary0">Yes </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="charge" <?php echo ($relist['charge']==0?'checked':'') ?> value="0" id="radioPrimaryd1" />
                                        <!--<input type="radio" name="relist[charge]" value="1" id="radioPrimaryd1" />-->
                                        <label for="radioPrimaryd1">No</label>
                                    </div>
                                </div>
                                @if ($errors->has('charge'))
                                    <div class="error">{{ $errors->first('charge') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Value to charge pre relist *:</label>
                            <div class="col-sm-6">
                                <input type="text" value="<?php if($relist['charge_val']!='') { echo $relist['charge_val']; } ?>" class="form-control" id="charge_val" placeholder="Value to charge pre relist" name="charge_val">
                                <!--<input type="text" value="" class="form-control" id="charge_val" placeholder="Value to charge pre relist" name="relist[charge_val]">-->
                                @if ($errors->has('charge_val'))
                                    <div class="error">{{ $errors->first('charge_val') }}</div>
                                @endif
                            </div>
                        </div>

                    </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <button id="submit" class="btn btn-primary">Submit</button>
                                <!--<button type="reset" class="btn btn-default">Reset</button>-->
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
