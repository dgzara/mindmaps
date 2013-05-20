// Definimos los botones para cargar el nodo.
$(".abrirNodo").click( function (event) {
    event.preventDefault();
    abrirNodo($(this).attr("href"));
} );

// Definimos los comportamientos de eliminacion       
$(".removeform").submit( function (event) {
    event.preventDefault();
    borrarAsociacion($(this));
} );

/*
 * Ejecuta un request en ajax.
 */
function enviarAjax(url){
	$.ajax({
        url: url,
        type: "POST",
        success: function(data){
        }
    });
}

/*
 * Abre el nodo y ejecuta el llamado ajax de la URL
 */
function abrirNodo(url){
    $.ajax({
        url: url,
        type: "POST",
        beforeSend: function(){
        	$('#nodo').hide();
    		$('#loader_nodo').show();
        },
        success: function(data){
            $('#loader_nodo').hide();
            $('#nodo').show();
        }
    });
}

/*
 * Ejecuta un llamado en ajax dentro de un nodo y carga el contenido en #nodo
 */
function ajaxNodo(url){
	$.ajax({
        url: url,
        type: "POST",
        beforeSend: function(){
        	$('#nodo').hide();
    		$('#loader_nodo').show();
        },
        success: function(data){
            $('#loader_nodo').hide();
            $('#nodo').html(data);
        	$('#nodo').show();
        }
    });
}

/*
 * Ejecuta un llamado en ajax dentro en un form y carga el contenido en #nodo
 */
function ajaxFormNodo(form){
	$.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: "POST",
        beforeSend: function(){
        	$('#nodo').hide();
    		$('#loader_nodo').show();
        },
        success: function(data){
            $('#loader_nodo').hide();
            $('#nodo').html(data);
        	$('#nodo').show();
        }
    });
}

/*
 * Ejecuta un llamado en ajax dentro de un nodo y carga el contenido en #nodo
 */
function editarNodo(form){
	$.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: "POST",
        beforeSend: function(){
        	$('#nodo').hide();
    		$('#loader_nodo').show();
        },
        success: function(data){
            $('#loader_nodo').hide();
            $('#nodo').html(data.html);
        	$('#nodo').show();
        	$('#node-caption-'+data.uuid).html(data.nombre);
        }
    });
}

/*
 * Ejecuta los llamados en ajax para borrar un nodo.
 */
function borrarNodo(form){
	$.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: form.serialize(),
        
        // Mostramos un mensaje con la respuesta de PHP
        success: function(data) {
            $('#ventana').dialog('close');
            $('#node-'+data.uuid).remove();
        }
    });    
}

/*
 * Al mover el nodo envia las nuevas posiciones a la base de datos.
 */
function moverNodo(id, posx, posy){
    $.ajax({
        type: 'POST',
        url: $('#form_mover_nodo').attr('action'),
        data: {
        	id: id,
            x : posx, 
            y : posy
        },
        // Mostramos un mensaje con la respuesta de PHP
        success: function(data) {
           
        }
    });      
}

/*
 * Dentro del nodo, muestra las opciones para crear el nodo
 */
function crearMedio(url){
	$.ajax({
        url: url,
        type: "POST",
        beforeSend: function(){
        	$('#opciones_medio').hide();
			$('#medio').hide();
			$('#loader_medio').show();
        },
        success: function(data){
            $('#loader_medio').hide();
            $('#medio').show();
        }
    });
}

/*
 * Dentro del nodo, muestra las opciones para crear el nodo
 */
function editarMedio(url){
	$.ajax({
        url: url,
        type: "POST",
        beforeSend: function(){
        	$('#edicion_nodo').hide();
    		$('#loader_nodo').show();
        },
        success: function(data){
            $('#loader_nodo').hide();
            $('#edicion_nodo').show();
        }
    });
}

/*
 * Limita en un campo de texto el máximo de carácteres a ingresar
 */
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
                        $('#upload_message').html('<audio src="../../../uploads/'+folder+'/'+data.name+'" controls="controls"></audio>');
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
    
function dump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;
	
    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";
	
    if(typeof(arr) == 'object') { //Array/Hashes/Objects 
        for(var item in arr) {
            var value = arr[item];
			
            if(typeof(value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}

function strip(string)
{
   return string.replace(/<(?:.|\n)*?>/gm, '');
}

function corregirTexto(texto){
    
    texto = Utf8.encode(texto);
    
    texto = texto.replace('oÌ', 'Ã³');
    
    return Utf8.decode(texto);
}
