/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function cargarNodo(id){
    $('#nodo').hide();
    $('#loader_nodo').show();
    $('#nodo').load(
        $('#form_nodo').attr('action'),
        {
            nodo_id: id
        },
        function() {
            $('#loader_nodo').hide();
            $('#nodo').show();
        }
        );
}

function cargarNodo(id, edita){
    
    if(edita == 1){
        edita = true;
    }
    else{
        edita = false;
    }
    
    $('#nodo').hide();
    $('#loader_nodo').show();
    $('#nodo').load(
    $('#form_nodo').attr('action'),
    {
        nodo_id: id,
        edicion: edita
    },
    function() {
        $('#loader_nodo').hide();
        $('#nodo').show();
    }
    );
}


function editarNodo(id){
    $('#contenido_nodo').hide();
    $('#loader_save').show();
    $('#contenido_nodo').load(
    $('#form_editar_nodo').attr('action'),
    {
        nodo_id: id
    },
    function() {
        $('#loader_save').hide();
        $('#contenido_nodo').show();
    }
    );
}

function borrarNodo(nodoid){
    // Enviamos el formulario usando AJAX
    $.ajax({
        type: 'POST',
        url: $('#form_borrar_nodo').attr('action'),
        data: {
            id : nodoid
        },
        // Mostramos un mensaje con la respuesta de PHP
        success: function(data) {
           
        }
    })        
    return false;
}

function moverNodo(nodoid, posx, posy){
    // Enviamos el formulario usando AJAX
    $.ajax({
        type: 'POST',
        url: $('#form_mover_nodo').attr('action'),
        data: {
            id : nodoid, 
            x : posx, 
            y : posy
        },
        // Mostramos un mensaje con la respuesta de PHP
        success: function(data) {
           
        }
    })        
    return false;
}


function crearMedio(id, tipo){
    $('#opciones_medio').hide();
    $('#medio').hide();
    $('#loader_medio').show();
    $('#medio').load(
        $('#form_crear_medio').attr('action'),
        {
            nodo_id: id,
            tipo_medio: tipo
        },
        function() {
            $('#loader_medio').hide();
            $('#medio').show();
        }
        );
}

function editarMedio(id){
    $('#edicion_nodo').hide();
    $('#loader_nodo').show();
    $('#edicion_nodo').load(
        $('#form_editar_medio').attr('action'),
        {
            nodo_id: id
        },
        function() {
            $('#loader_nodo').hide();
            $('#edicion_nodo').show();
        }
        );
}

function cargarMedio(id){
    $('#medio').hide();
    $('#loader_medio').show();
    $('#medio').load(
        $('#form_cargar_medio').attr('action'),
        {
            nodo_id: id
        },
        function() {
            $('#loader_medio').hide();
            $('#medio').show();
        }
        );
}

function guardarNodo(){
    $('#nodo').hide();
    $('#loader_nodo').show();
    $('#nodo').load(
        $("#medio_texto").attr('action'),
        {
        },
        function() {
            $('#loader_nodo').hide();
            $('#nodo').show();
        }
        );
}

function limitChars(textid, limit, infodiv)
{
    var text = $('#'+textid).val();	
    var textlength = text.length;
    if(textlength >= limit)
    {
        $('#' + infodiv).html('No puedes escribir más de '+limit+' caracteres');
        $('#'+textid).val(text.substr(0,limit));
        $('input[type="submit"]').attr("disabled", true);
        return false;
    }
    else
    {
        $('#' + infodiv).html('Quedan '+ (limit - textlength) +' caracteres.');
        $('input[type="submit"]').removeAttr("disabled");
        return true;
    }
}

function guardarTag(nombre, id){
    
    // Rellenamos el nombre en el formulario
    $('#nodo_nombre').val(nombre);
    $('#nodo_tag_id').val(id);
    
    // Enviamos
    $('#crear_nodo').submit();
}


function reestablecerOpciones(){
    // Restablecemos los colores
    $('.tabs li').each(function(index){
        $(this).css("background-color","#dbdbdb");
    });
    
    // Ocultamos las opciones
    $('.opciones').hide();
}

function mostrarYoutube(medio){
    
    this.reestablecerOpciones();
     
    // Establecemos dentro del formulario la opcion seleccionada
    document.getElementById('medio_' + medio + '_opcion').value= 'youtube';
     
    // Cambiamos el color de los tabs
    $('#buscar_youtube_tab').css("background-color","#eee");

    // Mostramos la selección
    $('#medio_youtube').show();
}
 
function mostrarArchivo(medio){
     
    this.reestablecerOpciones();
     
    document.getElementById('medio_' + medio + '_opcion').value= 'archivo';

    // Cambiamos el color de los tabs
    $('#subir_tab').css("background-color","#eee");

    $('#medio_archivo').show();
}
 
function mostrarVimeo(medio){
     
    this.reestablecerOpciones();
     
    document.getElementById('medio_' + medio + '_opcion').value= 'vimeo';
     
    // Cambiamos el color de los tabs
    $('#buscar_vimeo_tab').css("background-color","#eee");

    $('#vimeo').show();
}
 
function mostrarSoundCloud(medio){
     
    this.reestablecerOpciones();
     
    document.getElementById('medio_' + medio + '_opcion').value= 'soundcloud';
     
    // Cambiamos el color de los tabs
    $('#buscar_soundcloud_tab').css("background-color","#eee");

    $('#medio_soundcloud').show();
}
 
function mostrarCodigo(medio){
     
    this.reestablecerOpciones();
     
    document.getElementById('medio_' + medio + '_opcion').value= 'codigo';
     
    // Cambiamos el color de los tabs
    $('#integrar_tab').css("background-color","#eee");

    $('#medio_codigo').show();
}
 
function mostrarGoogle(medio){
     
    this.reestablecerOpciones();
     
    document.getElementById('medio_' + medio + '_opcion').value= 'google';
     
    // Cambiamos el color de los tabs
    $('#buscar_google_tab').css("background-color","#eee");

    $('#medio_google').show();
}

function buscarImagen(event){
    if(event && event.which == 13){
        SearchGoogleImages($('#busqueda_google').val());
        return false;
        
    }  
    else{
        return true;
    }
}

function buscarYoutube(event){
    if(event && event.which == 13){
        ytVideoApp.listVideos($('#queryType').val(), $('#busqueda_youtube').val(), 1);
        return false;
        
    }  
    else{
        return true;
    }
}


function ajaxFileUpload(url_upload, medio, folder, nodo_id)
{
    $("#loading")
    .ajaxStart(function(){
        $(this).show();
    })
    .ajaxComplete(function(){
        $(this).hide();
    });
    
    $.ajaxFileUpload
    (
    {
        url: url_upload,
        secureuri:false,
        fileElementId:'fileToUpload',
        dataType: 'json',
        data:{
            name:'logan', 
            id: nodo_id
        },
        success: function (data, status)
        {
            if(typeof(data.error) != 'undefined')
            {
                if(data.error != '')
                {
                    alert(data.error);
                }else
                {
                    // alert(data.msg);
                    $('#fileToUpload').attr('disabled', 'disabled');
                    $('#buttonUpload').attr('disabled', 'disabled');
                    $('#upload_file').hide();
                    $('#medio_'+medio+'_fuente').val(data.name);
                    
                    if(medio == 'imagen'){
                        // Visor de imagen
                        $('#upload_message').html('<img src="../../../uploads/'+folder+'/'+data.name+'">');
                        document.getElementById('medio_' + medio + '_opcion').value= 'archivo';
                    }
                    else if(medio == 'sonido'){
                        // Reproductor de sonido
                        jwplayer("upload_message").setup({
							file: "../../../uploads/"+folder+"/"+data.name,
							width: 500,
							height: 27
						});
                        
                        document.getElementById('medio_' + medio + '_opcion').value= 'archivo';
                    }
                    else if(medio == 'video'){
                    // Reproductor de video
                        
                    }
//                    $('#medio_'+medio).submit();
                }
            }
        },
        error: function (data, status, e)
        {
            alert(e);
        }
    }
    )
    return false;
}
