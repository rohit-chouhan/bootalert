function bootalert() {
    if(arguments.length === 1) {
        var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+arguments[0]+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
        );
        $('#'+r+'').modal('show');
    }
    if(arguments.length === 2) {
        var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+arguments[0]+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                    arguments[1] +
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
    }
    if(arguments.length === 3) {
        var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+arguments[0]+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                    arguments[1]+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-'+arguments[2]+'" data-dismiss="modal">Close</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
    }
    if(arguments.length === 4) {
        var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+arguments[0]+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                    arguments[1]+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-'+arguments[2]+'" data-dismiss="modal">'+arguments[3]+'</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
    }
    // your further logic if needed
}

function bootprompt() {
    if(arguments.length === 1) {
        var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+arguments[0]+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<input id="data" class="form-control" type="text"/>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-danger" onclick="bootpass();bootrun();">NEXT</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
    }
    if(arguments.length === 2) {
        var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+arguments[0]+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<input id="data" class="form-control" type="text"/>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-'+arguments[1]+'" onclick="bootpass();bootrun();">NEXT</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
    }
    if(arguments.length === 3) {
        var r=makeid(10);
        $("body").append(
            '<div class="modal fade" id="'+r+'">'+
                '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h4 class="modal-title">'+arguments[0]+'</h4>'+
                        '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<input id="data" class="form-control" type="text"/>'+
                    '</div>'+
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-'+arguments[1]+'" onclick="bootpass();bootrun();">'+arguments[2]+'</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                '</div>'
        );
        $('#'+r+'').modal('show');
    }
}

function bootpass(){
    window.bootval=$("#data").val();
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
