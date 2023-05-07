class DropzoneLib{roadMap={};param={};dropZone;selector;constructor(){this.set('paramName','file');this.set('uploadMultiple',true);this.set('maxFiles',10);this.set('maxFilesize',5);this.set('autoProcessQueue',true);this.set('parallelUploads',1);this.set('addRemoveLinks',true);this.set('acceptedFiles','.jpeg,.jpg,.png');this.set('removeType','server')}set(key,val){this.roadMap[key]=val;return this}url(url){this.set('url',url);return this}setParam(key,val){this.param[key]=val;this.set('params',this.param);return this}select(selector){this.selector=selector;return this}subscribe(){Dropzone.autoDiscover=false; var drop=new Dropzone(this.selector,this.roadMap);this.dropZone=drop;return this}success(call){this.dropZone.on('success',call);return this}error(call){this.dropZone.on('error',call);return this}addedFile(call){this.dropZone.on('addedfile',call);return this}complete(call){this.dropZone.on('complete',call);return this}event(eventname,call){this.dropZone.on(eventname,call);return this}multiple(){this.set('parallelUploads',10000);return this}action(val){return val}accept(call){this.set('accept',call);return this}extensions(ex){this.set('acceptedFiles',ex); return this}}
