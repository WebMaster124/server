<?php
/**
 * Created by PhpStorm.
 * User: kishand
 * Date: 5/23/2018
 * Time: 4:28 PM
 */

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Session;

class EditorPickController extends Controller
{
    function editorPickForm(){
        if(!Session::get('userId'))
            return redirect('admin/login');

        return view('admin/add_editor_pic');
    }

}