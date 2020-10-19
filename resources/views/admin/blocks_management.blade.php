
@include('admin.include.sidebar')
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Block Management </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">Block Management</li>
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
            <form action="{{ action('SettingController@blockManagement') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Home Page Banner :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[banner]" <?php echo ($blocks['banner']==0?'checked':'') ?>  value="0" id="radioPrimary1" />
                                        <label for="radioPrimary1">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[banner]" <?php echo ($blocks['banner']==1?'checked':'') ?> value="1" id="radioPrimaryd1" />
                                        <label for="radioPrimaryd1">Show</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Featured Deals :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[dailydeals]" <?php echo ($blocks['dailydeals']==0?'checked':'') ?>  value="0" id="radioPrimary6"  />
                                        <label for="radioPrimary6">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[dailydeals]" <?php echo ($blocks['dailydeals']==1?'checked':'') ?> value="1" id="radioPrimaryd6" />
                                        <label for="radioPrimaryd6">Show</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Season Deals :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[season_deal]" <?php echo ($blocks['season_deal']==0?'checked':'') ?> value="0" id="radioPrimary2" />
                                        <label for="radioPrimary2">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[season_deal]" <?php echo ($blocks['season_deal']==1?'checked':'') ?> value="1" id="radioPrimaryd2" />
                                        <label for="radioPrimaryd2">Show</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Your Recently Viewed Items :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[recentlyviewed]" <?php echo ($blocks['recentlyviewed']==0?'checked':'') ?>  value="0" id="radioPrimary7" />
                                        <label for="radioPrimary7">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[recentlyviewed]"  <?php echo ($blocks['recentlyviewed']==1?'checked':'') ?> value="1" id="radioPrimaryd7" />
                                        <label for="radioPrimaryd7">Show</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Your currently viewed items :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[currently_view]" <?php echo ($blocks['currently_view']==0?'checked':'') ?> value="0" id="radioPrimary3"  />
                                        <label for="radioPrimary3">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[currently_view]" <?php echo ($blocks['currently_view']==1?'checked':'') ?> value="1" id="radioPrimaryd3" />
                                        <label for="radioPrimaryd3">Show</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Trending on dibdaa :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[trending]" <?php echo ($blocks['trending']==0?'checked':'') ?> value="0" id="radioPrimary4"  />
                                        <label for="radioPrimary4">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[trending]" <?php echo ($blocks['trending']==1?'checked':'') ?> value="1" id="radioPrimaryd4" />
                                        <label for="radioPrimaryd4">Show</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">Recommended for you :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[recommended]" <?php echo ($blocks['recommended']==0?'checked':'') ?> value="0" id="radioPrimary5"  />
                                        <label for="radioPrimary5">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[recommended]" <?php echo ($blocks['recommended']==1?'checked':'') ?> value="1" id="radioPrimaryd5" />
                                        <label for="radioPrimaryd5">Show</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" id="menu_type" >
                            <label class="col-sm-3 control-label">All New Items :</label>
                            <div class="col-sm-6">
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[new_items]" <?php echo ($blocks['new_items']==0?'checked':'') ?>  value="0" id="radioPrimary8"  />
                                        <label for="radioPrimary8">Hide </label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="rdio rdio-primary">
                                        <input type="radio" name="block[new_items]" <?php echo ($blocks['new_items']==1?'checked':'') ?> value="1" id="radioPrimaryd8" />
                                        <label for="radioPrimaryd8">Show</label>
                                    </div>
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
