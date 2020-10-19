<?php

$ruta_explode   = explode("/",$_SERVER["REQUEST_URI"]);
 $last_array     = last($ruta_explode);
?>
<div class="row">
    <div class="col-md-12">
        <ol class="breadcrumb">
            <?php $val_url = ''?>
            <a href="{{asset('/')}}"><i class="entypo-folder"></i> Home</a>
            @if(isset($ruta_explode) &&  count($ruta_explode)>0)
                @foreach ($ruta_explode as $val)
                    <?php $val_url .= $val ?>
                        @if($last_array!=$val)
                            <a href="{{ asset($val_url) }}">
                                {{ ucfirst($val) }}
                            </a>
                        @else
                            {{ ucfirst($val) }}
                        @endif

                    <?php $val_url .= '/'?>
                @endforeach
            @endif
        </ol>
    </div>
</div><?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/21/2018
 * Time: 6:05 PM
 */