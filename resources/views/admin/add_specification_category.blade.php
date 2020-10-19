@include('admin.include.sidebar')
<style>
.hide{
    display: none;
}
.show{
    display: block;
}
</style>
<!-- leftpanel -->
<div class="mainpanel">
@include('admin.include.header')
<!-- headerbar -->
    <div class="pageheader">
        <h2> Add Specification </h2>
        <div class="breadcrumb-wrapper">
            <span class="label">You are here:</span>
            <ol class="breadcrumb">
                <li class="active">add specification</li>
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
            <form action="{{ action('SpecificationController@saveSpecification') }}" method="post" enctype="multipart/form-data">
                <div class="panel panel-default">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="panel-body">

                        <div class="form-group">
                            <label class="col-sm-3 control-label">Parent Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="parent_id" name="parent_id">
                                    <option selected disabled>Select Parent Category</option>
                                    <?php
                                    $parent_ids = \App\Http\Controllers\CategoryController::viewParentCategory();
                                    foreach ($parent_ids  as $parent_id){ ?>
                                    <option value="<?php echo $parent_id->id; ?>"><?php echo $parent_id->category_name; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Sub Category *:</label>
                            <div class="col-sm-6">
                                <select class="form-control" id="category_id" name="category_id">
                                </select>
                            </div>
                        </div>
                        <div class="main-class">
                            <div class="form-group  25 26 27 28 29 46 47 48 49 50 51 52 53 54 55 67 69 70 71 72 31 32 33 34 35 36 37 38 40
                             41 42 43 44 57 58 59 60 61 62 63 64 65 108 110 111 114 85 86 87 88 89 90 91 92 93 94 95 98 99 101 102 103 104 105 106" style="display: none">
                                <label class="col-sm-3 control-label">Item Condition :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[item-condition]"  placeholder="Enter Item Condition">
                                </div>
                            </div>
                            <div class="form-group  25 26 27 28 50 52 53 55 89 93 94 98" style="display: none">
                                <label class="col-sm-3 control-label">Gender :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[gender]"  placeholder="Enter Gender">
                                </div>
                            </div>
                            <div class="form-group   25 26 27 28 29 40 46 47 48 49 50 51 54 55 67 69 70 71 72 31 32 35 36 37 38 40 41 42 43 44
                            57 58 60 61 62 65 108 110 111 114 85 86 87 88 89 90 91 92 93 94 95 98 99 101 102 103 104 105 106" style="display: none">
                                <label class="col-sm-3 control-label">Type :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[type]"  placeholder="Enter Type">
                                </div>
                            </div>
                            <div class="form-group 25 26 28 47 48 49 50 52 54 85 86 89 91 92 93 94 98" style="display: none">
                                <label class="col-sm-3 control-label">Size :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[size]"  placeholder="Enter Size">
                                </div>
                            </div>
                            <div class="form-group   25 46 50 101" style="display: none">
                                <label class="col-sm-3 control-label">Occasion :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[occasion]"  placeholder="Enter Occasion">
                                </div>
                            </div>
                            <div class="form-group   25 48 49 50 69 31 38 40 44 85 86 88 89 90 93 98" style="display: none">
                                <label class="col-sm-3 control-label">Accessories :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[accessories]"  placeholder="Enter Accessories">
                                </div>
                            </div>
                            <div class="form-group 25 26  28 29 46 47 48 49 50 51 52 53 54 55 65 69 31 34 36 57 60 61 62 65 86 89 91 92 93 94 98
                                99" style="display: none">
                                <label class="col-sm-3 control-label ">Color :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[color]"  placeholder="Enter Color">
                                </div>
                            </div>
                            <div class="form-group 26 27 29 48 49 50 52 53 54 55 58 59 62 64 67 69 70 72 31 32 33 34 36 37 38 40 41 42 60 63 85 86 87 88 89 90 91 92
                            93 94 95 98 99" style="display: none">
                                <label class="col-sm-3 control-label">Brand :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[brand]"  placeholder="Enter brand">
                                </div>
                            </div>
                            <div class="form-group 59" style="display: none">
                                <label class="col-sm-3 control-label">Dining :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Access]"  placeholder="Enter Access">
                                </div>
                            </div>
                            <div class="form-group 28" style="display: none">
                                <label class="col-sm-3 control-label">Access :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Access]"  placeholder="Enter Access">
                                </div>
                            </div>
                            <div class="form-group 28 38 104" style="display: none">
                                <label class="col-sm-3 control-label">Genre :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Genre]"  placeholder="Enter Genre">
                                </div>
                            </div>
                            <div class="form-group 29" style="display: none">
                                <label class="col-sm-3 control-label">Smart Home :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Smart-Home]"  placeholder="Enter Smart Home">
                                </div>
                            </div>
                            <div class="form-group 29" style="display: none">
                                <label class="col-sm-3 control-label">Home Security & Surveillance :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Home-Security-Surveillance]"  placeholder="Enter Home Security & Surveillance">
                                </div>
                            </div>
                            <div class="form-group 29" style="display: none">
                                <label class="col-sm-3 control-label">Wi-Fi & Networking :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Wi-Fi-&-Networking]"  placeholder="Enter Wi-Fi & Networking">
                                </div>
                            </div>
                            <div class="form-group 29" style="display: none">
                                <label class="col-sm-3 control-label">OS Compatibility :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[OS-Compatibility]"  placeholder="Enter OS Compatibility">
                                </div>
                            </div>
                            <div class="form-group 29 54 31 32 34 36 40 69" style="display: none">
                                <label class="col-sm-3 control-label">Features :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Features]"  placeholder="Enter Features">
                                </div>
                            </div>
                            <div class="form-group 46" style="display: none">
                                <label class="col-sm-3 control-label">Fabric :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Fabric]"  placeholder="Enter Fabric">
                                </div>
                            </div>
                            <div class="form-group 46" style="display: none">
                                <label class="col-sm-3 control-label">Tops :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Tops]"  placeholder="Enter Tops">
                                </div>
                            </div>
                            <div class="form-group 46" style="display: none">
                                <label class="col-sm-3 control-label">Dresses :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Dresses]"  placeholder="Enter Dresses">
                                </div>
                            </div>
                            <div class="form-group 46" style="display: none">
                                <label class="col-sm-3 control-label">Skirt :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Skirt]"  placeholder="Enter Skirt">
                                </div>
                            </div>
                            <div class="form-group 46" style="display: none">
                                <label class="col-sm-3 control-label">Pants :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Pants]"  placeholder="Enter Pants">
                                </div>
                            </div>
                            <div class="form-group 46" style="display: none">
                                <label class="col-sm-3 control-label">Denim :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Dresses]"  placeholder="Enter Denim">
                                </div>
                            </div>
                            <div class="form-group 47 51 53 54 55 69 31 61 63 87 92" style="display: none">
                                <label class="col-sm-3 control-label">Material :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Material]"  placeholder="Enter Material">
                                </div>
                            </div>
                            <div class="form-group 48 49 101 102 103 104 105 106" style="display: none">
                                <label class="col-sm-3 control-label">Age :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Age]"  placeholder="Enter Age">
                                </div>
                            </div>
                            <div class="form-group 51" style="display: none">
                                <label class="col-sm-3 control-label">Necklaces :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Necklaces]"  placeholder="Enter Necklaces">
                                </div>
                            </div>
                            <div class="form-group 51" style="display: none">
                                <label class="col-sm-3 control-label">Earrings :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Earrings]"  placeholder="Enter Earrings">
                                </div>
                            </div>
                            <div class="form-group 51" style="display: none">
                                <label class="col-sm-3 control-label">Bracelets :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bracelets]"  placeholder="Enter Bracelets">
                                </div>
                            </div>
                            <div class="form-group 51 52" style="display: none">
                                <label class="col-sm-3 control-label">Tone :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Tone]"  placeholder="Enter Tone">
                                </div>
                            </div>
                            <div class="form-group 52" style="display: none">
                                <label class="col-sm-3 control-label">Style (Women) :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Style-Women]"  placeholder="Enter Style (Women)">
                                </div>
                            </div>
                            <div class="form-group 52" style="display: none">
                                <label class="col-sm-3 control-label">Style (Men) :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Style-Men]"  placeholder="Enter Style (Men)">
                                </div>
                            </div>
                            <div class="form-group 52" style="display: none">
                                <label class="col-sm-3 control-label">Shape (Men) :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Shape-Men]"  placeholder="Enter Shape (Men)">
                                </div>
                            </div>
                            <div class="form-group 53" style="display: none">
                                <label class="col-sm-3 control-label">Man Type:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Man]"  placeholder="Enter Man Type">
                                </div>
                            </div>
                            <div class="form-group 53" style="display: none">
                                <label class="col-sm-3 control-label">Women Type:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Women]"  placeholder="Enter Women Type">
                                </div>
                            </div>
                            <div class="form-group 54" style="display: none">
                                <label class="col-sm-3 control-label">Usage :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Usage]"  placeholder="Enter Usage">
                                </div>
                            </div>
                            <div class="form-group 55 51" style="display: none">
                                <label class="col-sm-3 control-label">Style :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Style]"  placeholder="Enter Style">
                                </div>
                            </div>
                            <div class="form-group 55" style="display: none">
                                <label class="col-sm-3 control-label">Face Shape :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Face-Shape]"  placeholder="Enter Face Shape">
                                </div>
                            </div>
                            <div class="form-group 67 71 72 111 85 86 94 95 104 105" style="display: none">
                                <label class="col-sm-3 control-label">Category :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Category]"  placeholder="Enter Category">
                                </div>
                            </div>
                            <div class="form-group 69" style="display: none">
                                <label class="col-sm-3 control-label">Seats :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Seats]"  placeholder="Enter Seats">
                                </div>
                            </div>
                            <div class="form-group 70" style="display: none">
                                <label class="col-sm-3 control-label">Hand Tools :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Hand-Tools]"  placeholder="Enter Hand Tools">
                                </div>
                            </div>
                            <div class="form-group 70" style="display: none">
                                <label class="col-sm-3 control-label">Power Tools :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Power-Tools]"  placeholder="Enter Power Tools">
                                </div>
                            </div>
                            <div class="form-group 70" style="display: none">
                                <label class="col-sm-3 control-label">Garden Tools :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Garden-Tools]"  placeholder="Enter Garden Tools">
                                </div>
                            </div>
                            <div class="form-group 31" style="display: none">
                                <label class="col-sm-3 control-label">Megapixel :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Megapixel]"  placeholder="Enter Megapixel">
                                </div>
                            </div>
                            <div class="form-group 32 33" style="display: none">
                                <label class="col-sm-3 control-label">Remote Control :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Remote-Control]"  placeholder="Enter Remote Control">
                                </div>
                            </div>
                            <div class="form-group 32" style="display: none">
                                <label class="col-sm-3 control-label">Display :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Display]"  placeholder="Enter Display">
                                </div>
                            </div>
                            <div class="form-group 32" style="display: none">
                                <label class="col-sm-3 control-label">Speakers :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Speakers]"  placeholder="Enter Speakers">
                                </div>
                            </div>
                            <div class="form-group 32 35 36 40" style="display: none">
                                <label class="col-sm-3 control-label">Screen Size :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Screen-Size]"  placeholder="Enter Screen Size">
                                </div>
                            </div>
                            <div class="form-group 32" style="display: none">
                                <label class="col-sm-3 control-label">USB Ports :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[USB-Ports]"  placeholder="Enter USB Ports">
                                </div>
                            </div>
                            <div class="form-group 32" style="display: none">
                                <label class="col-sm-3 control-label">Resolution :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Resolution]"  placeholder="Enter Resolution">
                                </div>
                            </div>
                            <div class="form-group 32" style="display: none">
                                <label class="col-sm-3 control-label">HDMI Ports :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[HDMI-Ports]"  placeholder="Enter HDMI Ports">
                                </div>
                            </div>
                            <div class="form-group 33" style="display: none">
                                <label class="col-sm-3 control-label">Speaker Configuration :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Speaker-Configuration]"  placeholder="Enter Speaker Configuration">
                                </div>
                            </div>
                            <div class="form-group 34" style="display: none">
                                <label class="col-sm-3 control-label">Fit :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Fit]"  placeholder="Enter Fit">
                                </div>
                            </div>
                            <div class="form-group 35" style="display: none">
                                <label class="col-sm-3 control-label">Car strero brands :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Car-strero-brands]"  placeholder="Enter Car strero brands">
                                </div>
                            </div>
                            <div class="form-group 35" style="display: none">
                                <label class="col-sm-3 control-label">GPS Feature :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[GPS-Feature]"  placeholder="Enter GPS Feature">
                                </div>
                            </div>
                            <div class="form-group 35" style="display: none">
                                <label class="col-sm-3 control-label">GPS Brands:</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[GPS-Brands]"  placeholder="Enter GPS Brands">
                                </div>
                            </div>
                            <div class="form-group 35" style="display: none">
                                <label class="col-sm-3 control-label">Receivers :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Receivers]"  placeholder="Enter Receivers">
                                </div>
                            </div>
                            <div class="form-group 35" style="display: none">
                                <label class="col-sm-3 control-label">Mapping :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Mapping]"  placeholder="Enter Mapping">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">Cores :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Cores]"  placeholder="Enter Cores">
                                </div>
                            </div>
                            <div class="form-group 36 40" style="display: none">
                                <label class="col-sm-3 control-label">RAM :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[RAM]"  placeholder="Enter RAM">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">Network :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Network]"  placeholder="Enter Network">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">Primary Camera :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Primary-Camera]"  placeholder="Enter Primary Camera">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">Back Camera :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Back-Camera]"  placeholder="Enter Back Camera">
                                </div>
                            </div>
                            <div class="form-group 36 40" style="display: none">
                                <label class="col-sm-3 control-label">Operating System :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[os]"  placeholder="Enter Operating System">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">Internal Storage :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Internal-Storage]"  placeholder="Enter Internal Storage">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">Power Bank :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Power-Bank]"  placeholder="Enter Power Bank">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">SIM :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[SIM]"  placeholder="Enter SIM">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">Battery Life :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Battery-Life]"  placeholder="Enter Battery Life">
                                </div>
                            </div>
                            <div class="form-group 36" style="display: none">
                                <label class="col-sm-3 control-label">SD Cards :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[SD-Cards]"  placeholder="Enter SD Cards">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Video Games :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Video-Games]"  placeholder="Enter Video Games">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Car :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Car]"  placeholder="Enter Car">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Alarms & Security :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Alarms-Security]"  placeholder="Enter Alarms & Security">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Home Audio & Video  :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Home-Audio-Video]"  placeholder="Enter Home Audio & Video ">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Camera :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Camera]"  placeholder="Enter Camera">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Projector :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Projector]"  placeholder="Enter Projector">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Computer :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Computer]"  placeholder="Enter Computer">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">Mobile :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Mobile]"  placeholder="Enter Mobile">
                                </div>
                            </div>
                            <div class="form-group 37" style="display: none">
                                <label class="col-sm-3 control-label">TV :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[TV]"  placeholder="Enter TV">
                                </div>
                            </div>
                            <div class="form-group 38" style="display: none">
                                <label class="col-sm-3 control-label">Platform :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Platform]"  placeholder="Enter Platform">
                                </div>
                            </div>
                            <div class="form-group 40" style="display: none">
                                <label class="col-sm-3 control-label">Processor :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Processor]"  placeholder="Enter Processor">
                                </div>
                            </div>
                            <div class="form-group 40" style="display: none">
                                <label class="col-sm-3 control-label">HD Capacity :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[HD-Capacity]"  placeholder="Enter HD Capacity">
                                </div>
                            </div>
                            <div class="form-group 40" style="display: none">
                                <label class="col-sm-3 control-label">Weight :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Weight]"  placeholder="Enter Weight">
                                </div>
                            </div>
                            <div class="form-group 40" style="display: none">
                                <label class="col-sm-3 control-label">Graphic :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Graphic]"  placeholder="Enter Graphic">
                                </div>
                            </div>
                            <div class="form-group 42" style="display: none">
                                <label class="col-sm-3 control-label">Capacity :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Capacity]"  placeholder="Enter Capacity">
                                </div>
                            </div>
                            <div class="form-group 43" style="display: none">
                                <label class="col-sm-3 control-label">License :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[License]"  placeholder="Enter License">
                                </div>
                            </div>
                            <div class="form-group 43" style="display: none">
                                <label class="col-sm-3 control-label">Mode :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Mode]"  placeholder="Enter Mode">
                                </div>
                            </div>
                            <div class="form-group 44" style="display: none">
                                <label class="col-sm-3 control-label">Duty Cycle :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Duty-Cycle]"  placeholder="Enter Duty Cycle">
                                </div>
                            </div>
                            <div class="form-group 44" style="display: none">
                                <label class="col-sm-3 control-label">Usability :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Usability]"  placeholder="Enter Usability">
                                </div>
                            </div>
                            <div class="form-group 44" style="display: none">
                                <label class="col-sm-3 control-label">Print Speed :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Print-Speed]"  placeholder="Enter Print Speed">
                                </div>
                            </div>
                            <div class="form-group 44" style="display: none">
                                <label class="col-sm-3 control-label">Interface :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Interface]"  placeholder="Enter Interface">
                                </div>
                            </div>
                            <div class="form-group 44" style="display: none">
                                <label class="col-sm-3 control-label">Output :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Output]"  placeholder="Enter Output">
                                </div>
                            </div>
                            <div class="form-group 44" style="display: none">
                                <label class="col-sm-3 control-label">Functions :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Functions]"  placeholder="Enter Functions">
                                </div>
                            </div>
                            <div class="form-group 44" style="display: none">
                                <label class="col-sm-3 control-label">Scanner Type :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Scanner-Type]"  placeholder="Enter Scanner Type">
                                </div>
                            </div>
                            <div class="form-group 57" style="display: none">
                                <label class="col-sm-3 control-label">Air Conditioners :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Air-Conditioners]"  placeholder="Enter Air Conditioners">
                                </div>
                            </div>
                            <div class="form-group 57" style="display: none">
                                <label class="col-sm-3 control-label">Microwave Ovens :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Microwave-Ovens]"  placeholder="Enter Microwave Ovens">
                                </div>
                            </div>
                            <div class="form-group 57" style="display: none">
                                <label class="col-sm-3 control-label">Refrigerators :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Refrigerators]"  placeholder="Enter Refrigerators">
                                </div>
                            </div>
                            <div class="form-group 57" style="display: none">
                                <label class="col-sm-3 control-label">Washing-Machines :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Washing-Machines]"  placeholder="Enter Washing Machines">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Bakeware :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bakeware]"  placeholder="Enter Bakeware">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Cookware :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Cookware]"  placeholder="Enter Cookware">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Dinnerware :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Dinnerware]"  placeholder="Enter Dinnerware">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Appliances :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Appliances]"  placeholder="Enter Appliances">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Disposables :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Disposables]"  placeholder="Enter Disposables">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Linen :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Linen]"  placeholder="Enter Linen">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Storage :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Storage]"  placeholder="Enter Storage">
                                </div>
                            </div>
                            <div class="form-group 58" style="display: none">
                                <label class="col-sm-3 control-label">Other :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Other]"  placeholder="Enter Other">
                                </div>
                            </div>
                            <div class="form-group 59 63 64" style="display: none">
                                <label class="col-sm-3 control-label">Room :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Room]"  placeholder="Enter Room">
                                </div>
                            </div>
                            <div class="form-group 59 63" style="display: none">
                                <label class="col-sm-3 control-label">Bathroom :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bathroom]"  placeholder="Enter Bathroom">
                                </div>
                            </div>
                            <div class="form-group 59 63" style="display: none">
                                <label class="col-sm-3 control-label">Bedroom  :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bedroom]"  placeholder="Enter Bedroom">
                                </div>
                            </div>
                            <div class="form-group 59 63" style="display: none">
                                <label class="col-sm-3 control-label">Beds :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Beds]"  placeholder="Enter Beds">
                                </div>
                            </div>
                            <div class="form-group 59 63" style="display: none">
                                <label class="col-sm-3 control-label">Living Room :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Living-Room]"  placeholder="Enter Living Room">
                                </div>
                            </div>
                            <div class="form-group 59 63 102 103 106" style="display: none">
                                <label class="col-sm-3 control-label">Outdoor  :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Outdoor]"  placeholder="Enter Outdoor ">
                                </div>
                            </div>
                            <div class="form-group 59 108" style="display: none">
                                <label class="col-sm-3 control-label">Office :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Office]"  placeholder="Enter Office">
                                </div>
                            </div>
                            <div class="form-group 60" style="display: none">
                                <label class="col-sm-3 control-label">Mattress :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Mattress]"  placeholder="Enter Mattress">
                                </div>
                            </div>
                            <div class="form-group 60" style="display: none">
                                <label class="col-sm-3 control-label">Bedspreads :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bedspreads]"  placeholder="Enter Bedspreads">
                                </div>
                            </div>
                            <div class="form-group 61" style="display: none">
                                <label class="col-sm-3 control-label">Cushions :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Cushions]"  placeholder="Enter Cushions">
                                </div>
                            </div>
                            <div class="form-group 61" style="display: none">
                                <label class="col-sm-3 control-label">Design :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Design]"  placeholder="Enter Design">
                                </div>
                            </div>
                            <div class="form-group 62" style="display: none">
                                <label class="col-sm-3 control-label">Supplies :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Supplies]"  placeholder="Enter Supplies">
                                </div>
                            </div>
                            <div class="form-group 64" style="display: none">
                                <label class="col-sm-3 control-label">Kitchen :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Kitchen]"  placeholder="Enter Kitchen">
                                </div>
                            </div>
                            <div class="form-group 64" style="display: none">
                                <label class="col-sm-3 control-label">Bath :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bath]"  placeholder="Enter Bath">
                                </div>
                            </div>
                            <div class="form-group 64 65" style="display: none">
                                <label class="col-sm-3 control-label">Finish :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Finish]"  placeholder="Enter Finish">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Outdoor Lights :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Outdoor-Lights]"  placeholder="Enter Outdoor Lights">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Ceiling Lights :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Ceiling-Lights]"  placeholder="Enter Ceiling Lights">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Table Lamps :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Table-Lamps]"  placeholder="Enter Table Lamps">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Floor Lamps :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Floor-Lamps]"  placeholder="Enter Floor Lamps">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Wall Lights :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Wall-Lights]"  placeholder="Enter Wall Lights">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Outdoor Lights :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Outdoor-Lights]"  placeholder="Enter Outdoor Lights">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Landscape Lighting :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Landscape-Lighting]"  placeholder="Enter Landscape Lighting">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Chandeliers :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Chandeliers]"  placeholder="Enter Chandeliers">
                                </div>
                            </div>
                            <div class="form-group 65" style="display: none">
                                <label class="col-sm-3 control-label">Shade Color :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Shade-Color]"  placeholder="Enter Shade Color">
                                </div>
                            </div>
                            <div class="form-group 108" style="display: none">
                                <label class="col-sm-3 control-label">Writing Supplies :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Writing-Supplies]"  placeholder="Enter Writing Supplies">
                                </div>
                            </div>
                            <div class="form-group 108" style="display: none">
                                <label class="col-sm-3 control-label">Essentials :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Essentials]"  placeholder="Enter Essentials">
                                </div>
                            </div>
                            <div class="form-group 108" style="display: none">
                                <label class="col-sm-3 control-label">Machines :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Machines]"  placeholder="Enter Machines">
                                </div>
                            </div>
                            <div class="form-group 110" style="display: none">
                                <label class="col-sm-3 control-label">Fiction :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Fiction]"  placeholder="Enter Fiction">
                                </div>
                            </div>
                            <div class="form-group 110" style="display: none">
                                <label class="col-sm-3 control-label">Non-Fiction :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Non-Fiction]"  placeholder="Enter Non-Fiction">
                                </div>
                            </div>
                            <div class="form-group 110" style="display: none">
                                <label class="col-sm-3 control-label">Age Group :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Age-Group]"  placeholder="Enter Age Group">
                                </div>
                            </div>
                            <div class="form-group 110" style="display: none">
                                <label class="col-sm-3 control-label">Cover :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Cover]"  placeholder="Enter Cover">
                                </div>
                            </div>
                            <div class="form-group 110 111" style="display: none">
                                <label class="col-sm-3 control-label">Format :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Format]"  placeholder="Enter Format">
                                </div>
                            </div>
                            <div class="form-group 110" style="display: none">
                                <label class="col-sm-3 control-label">Search Options :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Search-Options]"  placeholder="Enter Search Options">
                                </div>
                            </div>
                            <div class="form-group 111" style="display: none">
                                <label class="col-sm-3 control-label">Offer :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Offer]"  placeholder="Enter Offer">
                                </div>
                            </div>
                            <div class="form-group 111" style="display: none">
                                <label class="col-sm-3 control-label">Price :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Price]"  placeholder="Enter Price">
                                </div>
                            </div>
                            <div class="form-group 114" style="display: none">
                                <label class="col-sm-3 control-label">Car Year :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Car-Year]"  placeholder="Enter Car Year">
                                </div>
                            </div>
                            <div class="form-group 114" style="display: none">
                                <label class="col-sm-3 control-label">Car Make :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Car-Make]"  placeholder="Enter Car Make">
                                </div>
                            </div>
                            <div class="form-group 114" style="display: none">
                                <label class="col-sm-3 control-label">Interior :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Interior]"  placeholder="Enter Interior">
                                </div>
                            </div>
                            <div class="form-group 114" style="display: none">
                                <label class="col-sm-3 control-label">Exterior :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Exterior]"  placeholder="Enter Exterior">
                                </div>
                            </div>
                            <div class="form-group 85" style="display: none">
                                <label class="col-sm-3 control-label">Swimwear :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Swimwear]"  placeholder="Enter Swimwear">
                                </div>
                            </div>
                            <div class="form-group 86 87" style="display: none">
                                <label class="col-sm-3 control-label">Sports :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Sports]"  placeholder="Enter Sports">
                                </div>
                            </div>
                            <div class="form-group 89 98" style="display: none">
                                <label class="col-sm-3 control-label">Bike Type :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bike-Type]"  placeholder="Enter Bike Type">
                                </div>
                            </div>
                            <div class="form-group 90 92" style="display: none">
                                <label class="col-sm-3 control-label">Sports Category :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Sports-Category]"  placeholder="Enter Sports Category">
                                </div>
                            </div>
                            <div class="form-group 91" style="display: none">
                                <label class="col-sm-3 control-label">Sport Product :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Sport-Product]"  placeholder="Enter Sport Product">
                                </div>
                            </div>
                            <div class="form-group 93" style="display: none">
                                <label class="col-sm-3 control-label">Bags :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Bags]"  placeholder="Enter Bags">
                                </div>
                            </div>
                            <div class="form-group 93" style="display: none">
                                <label class="col-sm-3 control-label">Golf Clubs :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Golf-Clubs]"  placeholder="Enter Golf Clubs">
                                </div>
                            </div>
                            <div class="form-group 93" style="display: none">
                                <label class="col-sm-3 control-label">Apparel :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Apparel]"  placeholder="Enter Apparel">
                                </div>
                            </div>
                            <div class="form-group 98" style="display: none">
                                <label class="col-sm-3 control-label">Frame Material :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Frame-Material]"  placeholder="Enter Frame Material">
                                </div>
                            </div>
                            <div class="form-group 98" style="display: none">
                                <label class="col-sm-3 control-label">Brake :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Brake]"  placeholder="Enter Brake">
                                </div>
                            </div>
                            <div class="form-group 101" style="display: none">
                                <label class="col-sm-3 control-label">Characters :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Characters]"  placeholder="Enter Characters">
                                </div>
                            </div>
                            <div class="form-group 102 103 106" style="display: none">
                                <label class="col-sm-3 control-label">Indoor :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Indoor]"  placeholder="Enter Indoor">
                                </div>
                            </div>
                            <div class="form-group 102 103 106" style="display: none">
                                <label class="col-sm-3 control-label">Art & Craft :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Art-Craft]"  placeholder="Enter Art & Craft">
                                </div>
                            </div>
                            <div class="form-group 104" style="display: none">
                                <label class="col-sm-3 control-label">No. of Players :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Number-Players]"  placeholder="Enter No. of Players">
                                </div>
                            </div>
                            <div class="form-group 105" style="display: none">
                                <label class="col-sm-3 control-label">Skills :</label>
                                <div class="col-sm-6">
                                    <input class="form-control"  name="specification[Skills]"  placeholder="Enter Skills">
                                </div>
                            </div>
                        </div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-12">
                                <button class="btn btn-primary">Submit</button>
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
<script>
    $('#parent_id').change(function(){
        $.ajax({
            type:'POST',
            url:'get-subcategoty',
            data: {
                '_token': $('input[name=_token]').val(),
                'id': $('#parent_id').val(),
            },
            success:function(data){
                $("#category_id").html(data);

                var v=$("#category_id").val();
                $('.'+v).show();
                $('.main-class .form-group:not(".'+v+'")').hide();
            }
        });
    });

    $('#category_id').on('change',function(){
            var v=$('#category_id').val();
            $('.'+v).show();
            $('.main-class .form-group:not(".'+v+'")').hide();
    });

</script>
</body>

</html>
