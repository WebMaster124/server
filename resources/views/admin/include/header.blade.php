<div class="headerbar">
    <a class="menutoggle"><i class="fa fa-bars"></i></a>
    <div class="header-right">
        <ul class="headermenu">
            <li class="dropdown">
<!--       <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="label label-pill label-danger count" style="border-radius:10px;"></span> <span class="glyphicon glyphicon-bell" style="font-size:18px;"></span></a>
       <ul class="dropdown-menu"></ul>-->
       
       
       <div class="btn-group">
           <?php $data=DB::table('admin_notification')->where('status',0)->orderBy('id','desc')->get(); ?>
           <button type="button" class="btn btn-default dropdown-toggle  tp-icon" data-toggle="dropdown" >
                        <span class="label label-pill label-danger count" style="border-radius:10px;"><?php echo count($data); ?></span>
                        <i class="glyphicon glyphicon-bell"></i>
                       
                    </button>
                    <ul class="dropdown-menu dropdown-menu-usermenu logout-nav pull-right">
                        
                        <?php 
                        
                        if(count($data) > 0){
                        foreach ($data as $notification) { ?>
                         <li>
                        <a href="/admin/view-notification/<?php echo $notification->id; ?>">
                        <strong><?php echo $notification->subject; ?></strong><br />
                        <small><em><?php echo $notification->description; ?></em></small>
                        </a>
                        </li>
                        <?php } } else {?>
                        <li><a href="#" class="text-bold text-italic">No Notification Found</a></li>
                          <?php } ?>
                        
                        
                    </ul>
                </div>
       
       
      </li>
            <li>
                <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle  tp-icon" data-toggle="dropdown">
                        <i class="glyphicon glyphicon-user"></i>
                        <span class="user-name">
                 {{ \Illuminate\Support\Facades\Session::get('userName')}}
                 <span class="caret"></span>
               </span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-usermenu logout-nav pull-right">
                        <!-- <li><a href="profile.html"><i class="glyphicon glyphicon-user"></i> My Profile</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-cog"></i> Account Settings</a></li>
                        <li><a href="#"><i class="glyphicon glyphicon-question-sign"></i> Help</a></li> -->
                        <li><a href="{{action('User_Controller@ChangePassword')}}"><i class="glyphicon glyphicon-cog"></i> Change Password</a></li>
                        <li><a href="{{action('User_Controller@logout')}}"><i class="glyphicon glyphicon-log-out"></i> Log Out</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <!-- header-right -->
</div>
