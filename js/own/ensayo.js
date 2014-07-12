// Cargador de palabras
function generarArreglo() 
{
    var string = $('#nidea_hipermediobundle_hipermedio_ensayo_texto').val();
    
    // Reemplazamos los caracteres
    string = string.replace(/[^a-zA-Z0-9ñÑáÁéÉíÍóÓúÚ]+/g,' ');
    
    // Dividimos las palabras en un array
    var palabras = string.split(' ');
    
    // Sacamos las palabras funcionales
    var funcionales = devolverPalabras();
    palabras = palabras.filter(function(e) 
        { 
            if(funcionales.indexOf(e.toLowerCase()) < 0){
                return funcionales
            }
        }
    );
    
    // Capitalizamos las palabras
    palabras = capitalizarArray(palabras);
    
    // Contamos cuantas veces se repiten las palabras
    palabras = contador(palabras);
    
    // Seteamos el campo dentro del Form
    $('#nidea_hipermediobundle_hipermedio_ensayo_palabras').val(JSON.stringify(palabras));
}

function contador(array)
{
    var counts = new Array();
    for(var i=0; i< array.length; i++)
    {
        var key = array[i];
        counts[key] = (counts[key])? counts[key] + 1 : 1 ;
    }

    // Generamos el arreglo 
    var arreglo = Array();
    for(var k in counts)
    {
        arreglo.push({ nombre: k, contador: counts[k] });
    }
    
    return arreglo;
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

function toJson(arr,level) {
    
    var json_text = "{";
    json_text += "\"palabras\" : ["
    
    for(var key in arr){
        var value = arr[key];
        json_text +="{";
        json_text += "\"nombre\": \""+key+"\",";
        json_text += "\"contador\": "+value;
        json_text +="},";
    }
    json_text = json_text.slice(0, -1)
    json_text += "]}";
    
    return json_text;
}

function capitalizarArray(array)
{
    for(var i=0; i< array.length; i++){
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array;
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

// Validadores

function validarSonido(){
    
}
