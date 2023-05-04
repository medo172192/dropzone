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