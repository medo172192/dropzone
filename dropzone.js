$(function (){
    //  Upload multiple Images
            Dropzone.autoDiscover = false;
            var myDropzone = new Dropzone("#kt_dropzonejs_example_1", {
                url: "/api/upload/images",
                paramName: 'file',
                uploadMultiple: true,
                maxFiles: 10,
                maxFilesize: 5,
                autoProcessQueue: true,
                parallelUploads: 1,
                removeType: "server",
                params: {
                    _token: '{{ csrf_token() }}',
                    city_id:" {{ $model->id }}",
                    city_name: "{{ $model->cityData->name ?? '' }}",
                    country_code: "{{ $model->Country->code }}"
                },
                addRemoveLinks: true,
                acceptedFiles: ".jpeg,.jpg,.png",
            });
            myDropzone.on("success", ( file , response ) => {
                // log response
            });
             myDropzone.on("error", ( file , respose ) => {
                // log response
            });

});



