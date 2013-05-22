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
 * Cambia los tabas
 */
function cambiarTab(url)
{
	$(".tab-pane").removeClass("active");
	$(".tabs li").removeClass("active");
	$(url).addClass("active");
	$('a[href$="'+url+'"]').closest("li").addClass("active");
}

/*
 * Limita en un campo de texto el máximo de carácteres a ingresar
 */
function limitChars(input, limit, infodiv)
{
    var text = input.val();	
    var textlength = text.length;
    if(textlength >= limit)
    {
        $('#' + infodiv).html('No puedes escribir más de '+limit+' caracteres');
        input.val(text.substr(0,limit));
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

function ajaxFileUpload(url_upload)
{
	$('#upload_file').hide();
	$('#loading').show();
    			
    $.ajaxFileUpload(
    {
        url: url_upload,
        secureuri: false,
        fileElementId: 'fileToUpload',
        dataType: 'json',
        success: function (data, status)
        {
            if(typeof(data.error) != 'undefined')
            {
                if(data.error != '')
                {	
                    alert(data.error);
                }
                else
                {
                	$('#loading').hide();
                    $('#fileToUpload').attr('disabled', 'disabled');
                    $('#buttonUpload').attr('disabled', 'disabled');
                    $('#upload_file').hide();
                    $('#loading').hide();
                    
                    // Copiamos los valores
                    $('#artifica_mapabundle_mediotype_opcion').val('archivo');
                    $('#artifica_mapabundle_mediotype_codigo').val(data.direccion);
                    
                    if(data.medio == 'imagen'){
                        $('#upload_message').html('<img src="'+ data.direccion +'?rand='+Math.floor((Math.random()*1000)+1)+'">');
                    }
                    else if(data.medio == 'sonido'){
                    	$('#upload_message').html('<embed type="application/x-shockwave-flash" src="http://www.google.com/reader/ui/3523697345-audio-player.swf" flashvars="audioUrl='+data.direccion+'" width="500" height="27" quality="best"></embed>');
                    }
                }
            }
        },
        error: function (data, status, e)
        {
            alert(data.responseText);
            //alert(e);
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
