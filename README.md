
# Dropzone Library

if you wanna upload mulitple image/video you can use dropzone library it's working with laravel or php or javascript or jquery


## Contributing

Contributions are always welcome!

See `javascript file` for ways to get started.

Please adhere to this project's `code of conduct`.


## Features

- upload single/multiple file mode
- add multiple params
- Add a specific action


## Links

```javascript

 <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.js"></script>

 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/basic.min.css">

```


## Usage Html Examples

```javascript
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
```

## Javascript/Jquery

```javascript

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
                timeout:2000,
            });
            myDropzone.on("success", ( file , response ) => {
                // log response
            });
             myDropzone.on("error", ( file , respose ) => {
                // log response
            });

});
 

```


## Events


```javascript
var myDropzone = new Dropzone("#kt_dropzonejs_example_1",{
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    // Add Condition
    accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
        done("Naha, you don't.");
        }
        else { done(); }
    }
}


myDropzone.on("addedfile", file => {
    // After adding a file, you can perform any action
});
 

myDropzone.on("addedfile", file => {
    // After adding a file, you can perform any action
});
 
myDropzone.on("removedfile", function(file) {
    // in case you can perform any action
}


myDropzone.on("complete", function(file) {
    // In case upload complete you can perform remove file or any other action
  myDropzone.removeFile(file);
  
});


```





## Install  Dropzone\Library


```javascript


 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.css">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/basic.min.css">

 <script src="jquery.js">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.3/dropzone.min.js"></script>
 <script src="dropzoneLib.js">
 

 

```


## Dropzone\Library


```javascript
var dropzone = new DropzoneLib();
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .setParam('id',1)
        .subscribe()
        .addedFile(file=>{
            console.log('start added file');
        })
        .success((file,res)=>{
            console.log('success');
        })
        .error((file,res)=>{
            console.log('error');
        })
        .complete(file=>{
            console.log('complete');
        })


```


## send one request with multiple data

```javascript
var dropzone = new DropzoneLib();
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .multiple() // add this function
        .subscribe()
```

## set configrations

```javascript
var dropzone = new DropzoneLib();
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .set('paramName','files')
        .subscribe()
```

## add dropzone action

```javascript
var dropzone = new DropzoneLib();
dropzone.action(Dropzone.autoDiscover=false)
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .subscribe()
```

## add dropzone events

```javascript
var dropzone = new DropzoneLib();
dropzone.action(Dropzone.autoDiscover=false)
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .event('addedfile',(file)=>{})
        .subscribe()
```

## add dropzone accept

```javascript
var dropzone = new DropzoneLib();
dropzone.action(Dropzone.autoDiscover=false)
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .accept((file,done)=>{
            if (file)
        })
        .subscribe()
```



## add dropzone extensions

```javascript
var dropzone = new DropzoneLib();
dropzone.action(Dropzone.autoDiscover=false)
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .extensions('.png,.jpg')
        .subscribe()
```

## set dropzone parameter

```javascript
var dropzone = new DropzoneLib();
dropzone.action(Dropzone.autoDiscover=false)
dropzone.select("#kt_dropzonejs_example_1")
        .url('/')
        .setParam('_token',"{{ csrf_token() }}")
        .subscribe()
```


## Background

```javascript
.subscribe() // Execute dropzone 
.complete(file=>{}) //event complete  , It works after adding the files and  send request
.addedFile(file=>{}) // in case start adding the file
```





## Dropzone/Options


```javascript
https://docs.dropzone.dev/configuration/basics/configuration-options

```
## Author

- Mohamed Hesham

