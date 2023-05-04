<form class="form" action="#" method="POST" enctype="multipart/form-data">
<div class="fv-row">
    <div class="dropzone" id="kt_dropzonejs_example_1">
        <div class="dz-message needsclick">
            <i class="ki-duotone ki-file-up fs-3x text-primary"><span class="path1"></span><span
                    class="path2"></span></i>
            <div class="ms-4">
                <h3 class="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                <span class="fs-7 fw-semibold text-gray-400">Upload files</span>
            </div>
        </div>
    </div>
</div>
</form>

<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.js"></script>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/basic.min.css">


Dropzone.autoDiscover = false;
        /*
         * __________________________________________________
         *             Upload multiple Images
         */
        $(function() {
            var myDropzoneDataForm = new FormData();
            Dropzone.autoDiscover = false;
            var myDropzone = new Dropzone("#kt_dropzonejs_example_1", {
                url: "/api/upload/muliple/images",
                paramName: 'file',
                uploadMultiple: true,
                maxFiles: 10,
                maxFilesize: 5,
                autoProcessQueue: true,
                parallelUploads: 1,
                removeType: "server",
                params: {
                    _token: '{{ csrf_token() }}',
                    'city_id': {{ $model->id }},
                    'city_name': "{{ $model->cityData->name ?? '' }}",
                    'country_code': "{{ $model->Country->code }}"
                },
                addRemoveLinks: true,
                acceptedFiles: ".jpeg,.jpg,.png",
            });
            myDropzone.on("success", file => {
                // log response
            });


        });





public function MultipleImages(Request $request)
    {
        $valid = Validator::make($request->file('file'),[
            'file.*' =>"required|image|mimes:png,jpg,jpeg"
        ]);

        if ($valid->fails()){
            return $this->catchErrors(['file' => $valid->errors()]);
        }

        if ($request->hasFile('file')){

            $path = base_path() . '/public/uploads/city/';
            $name = $request->country_code.'/'.$request->city_name .'_'. rand(0,1000000);
            $image =  $request->file('file')[0];

            $request->file('file')[0]->move( $path,$name . '.'.$image->getClientOriginalExtension());

            $save = GalleryCity::create([
                'path' =>'/uploads/city/'.$name. '.'.$image->getClientOriginalExtension() ,
                'city_id'=> $request->city_id
            ]);
            if ($save){
                return response()->json(['status' =>"success","response"  =>$path],200);
            }else{
                return response()->json(['status' =>"success","response"  =>'error'],401);
            }

        }else{
            return $this->catchErrors(['file' => ['empty']]);
        }
    }