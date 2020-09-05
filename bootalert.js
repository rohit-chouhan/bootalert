/*function _bootalert(x){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">Modal Heading</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        'Modal body..'+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
} */

function bootalert(x){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+x+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
}
function bootalert(x,y){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+x+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        y +
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
}

function bootalert(x,y,z){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+x+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        y+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-'+z+'" data-dismiss="modal">Close</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
}

function bootalert(x,y,z,n){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+x+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        y+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-'+z+'" data-dismiss="modal">'+n+'</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
}


function bootprompt(x){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+x+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<input id="data" class="form-control" type="text"/>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-danger" onclick="bootpass();bootrun();">NEXT</button>'+
                        '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
}

function bootprompt(x,y){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+x+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<input id="data" class="form-control" type="text"/>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-danger" onclick="bootpass();bootrun();">NEXT</button>'+
                        '<button type="button" class="btn btn-'+y+'" data-dismiss="modal">Close</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
}

function bootprompt(x,y,z){
    var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+x+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<input id="data" class="form-control" type="text"/>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-'+y+'" onclick="bootpass();bootrun();">'+z+'</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
}

function bootpass(){
    window.bootvar=$("#data").val();
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }