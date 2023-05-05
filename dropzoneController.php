<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DropzoneController extends Controller
{
    public function index(Request $request)
    {
       return view("dropzone");
    }

    public function uploadMulitple(Request $request)
    {
        $valid = Validator::make($request->file('file'),[
            'file.*' =>"required|image|mimes:png,jpg,jpeg"
        ]);

        if ($valid->fails()){
            return $this->catchErrors(['file' => $valid->errors()]);
        }

        if ($request->hasFile('file')){

            $path = public_path('storage/Images/'); //you can use base_path()
            $name = $request->country_code.'/'.$request->city_name .'_'. rand(0,1000000);
            $image =  $request->file('file')[0];

            $request->file('file')[0]->move( $path ,$name . '.'.$image->getClientOriginalExtension());

            $save = GalleryCity::create([
                'path' =>'/uploads/city/'.$name. '.'.$image->getClientOriginalExtension() ,
                'city_id'=> $request->city_id
            ]);
            
            if ($save){
                return response()->json(['status' =>"success","response"  =>$path],200);
            }else{
                return response()->json(['status' =>"error","response"  =>'error'],401);
            }

        }else{
            return response()->json(['status' =>"error","response"  =>'error'],401);
        }
    }
}
