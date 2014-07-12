/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function devolverPalabras(){
    var palabras = new Array();
    
    // Artículos
    var articulos = new Array("el", "los", "un", "uno", "unos", "la", "las", "una", "unas", "lo", "del");
    
    // Demostrativos
    var demostrativos = new Array("este", "ese", "aquel", "esta", "esa", "aquella", "estos", "esos", "aquellos", "estas", "esas", "aquellas", "esto", "eso", "aquello", "dicha", "dichas", "dicho", "dichos");
        
    // Preposiciones
    var preposiciones = new Array("a", "al", "ante", "bajo", "cabe", "con", "contra", "de", "desde", "en", "entre", "hacia", "hasta", "para", "por", "según", "sin", "so", "sobre", "tras", "mediante", "durante");
    
    // Posesivos
    var posesivos = new Array("mi" ,"mío" ,"tu" ,"tuyo" ,"su" ,"suyo" , "sus", "mi" ,"mía" , "tuya" , "suya" , "nuestro" , "vuestro" , "nuestra", "vuestra", "mis" ,"míos" ,"tus" ,"tuyos" , "suyos" , "mías" , "tuyas" , "suyas" ,"nuestros" , "vuestros" , "nuestras" , "vuestras");
    
    // Interrogativos
    var interrogativos = new Array("qué", "cuál", "cuáles", "cuánto", "cuántos", "cuánta", "cuántas", "dónde", "cómo");
    
    // Pronombres
    var pronombres = new Array("me", "te", "se", "nos", "os", "lo", "los", "le", "les", "mí", "ti", "sí", "mío", "tuyo", "vuestro", "suyo", "cuyo", "que", "quien", "cual", "cuales", "quienes", "como", "ustedes", "ello", "ellos", "ella", "ellas", "usted", "ustedes", "tú", "ésta", "éste", "éstos", "éstas", "él", "todos", "todas", "todo", "toda", "otro", "otros", "otra", "otras");
    
    // Conjunciones
    var conjunciones = new Array("aunque", "ca", "car", "como", "cuando", "dado", "e", "empero", "entonces", "ergo", "es", "decir", "luego", "mas", "menos", "ni", "ora", "pero", "porque", "poró", "pu", "pues", "que", "si", "sino", "siquier", "siquiera", "tal", "través", "u", "y", "ya", "ó", "o");
    
    // Adverbios
    var adv_tiempos = new Array("ahora", "ayer", "anteayer", "hoy", "mañana", "antes", "anoche", "aún", "cuando", "después", "entonces", "jamás", "luego", "mientras", "nunca", "primero", "siempre", "tarde", "todavía", "ya");
    var adv_lugares = new Array("aquí", "allí", "allá", "acá", "fuera", "abajo", "delante", "adelante", "alrededor", "arriba", "atrás", "cerca", "debajo", "donde", "encima", "enfrente", "fuera", "lejos");
    var adv_modo = new Array("así", "bien", "mal", "casi", "como", "despacio", "rápido", "lento", "deprisa", "semi");
    var adv_negacion = new Array("no", "nunca", "tampoco", "jamás");
    var adv_afirmacion = new Array("sí", "claro", "exacto", "efectivamente", "ciertamente", "seguramente", "justo", "ya");
    var adv_cantidad = new Array("algo", "nada", "apenas", "bastante", "casi", "cuanto", "demasiado", "más", "menos", "mucho", "poco", "todo", "sólo", "mitad", "tan", "tanto");
    var adv_duda = new Array("quizá", "acaso", "probable", "tal vez");
    var adv = new Array("conque", "embargo", "obstante", "manera", "además", "vez", "también", "finalmente", "mismo", "misma", "solamente", "claramente", "muy", "cualquier", "cualquiera", "cualquieras");
    
    // Verbos comunes
    var ser = new Array("ser","es", "fue", "era", "soy", "será", "son", "siendo", "sería", "sea", "sean", "serían", "fueron", "sido");
    var haber = new Array("haber", "ha", "han", "hubo", "habrá", "hay", "habrán", "habría", "habrían", "hace", "había");
    var estar = new Array("estar", "está", "estará", "estoy", "estuvo", "estás", "estuve", "estaba");
    var verbos = new Array("puede", "vuelve", "implica", "pese", "posee", "debe", "pueden", "puedan", "podrán", "tiene", "tendra", "va", "da", "podrá", "tenga", "tener");
    
    // Adjetivos
    var adj = new Array("cada", "distinto", "contrario", "gran", "etc");
    
    // Sinónimos
    var sin = new Array("parte", "partes", "ejemplo");
    
    // Inglés
	var english = new Array("the", "those", "one", "ones", "by", "because", "he", "she", "him", "that", "why", "when", "then", "it", "how", "of", "i", "to", "in", "out", "is", "was", "am", "were", "are", "have", "has", "had", "and", "his", "her", "not", "no", "but", "for", "be", "we", "you", "what", "as", "with", "all", "can", "may", "should", "this", "an", "who", "himself", "herself", "do", "s", "own", "mine", "or", "on", "at", "being", "which", "only", "our", "even", "their", "without", "after", "before", "they", "from", "two", "one", "if", "would", "really", "most", "more", "into", "something", "somewhere", "there", "your", "yours", "very", "around", "always", "little", "will", "did", "have", "any", "other", "otherside", "does", "has", "had", "been", "could", "my", "seen", "others");    
    palabras = articulos.concat(demostrativos, preposiciones, posesivos, interrogativos, pronombres, conjunciones, adv_tiempos, adv_lugares, adv_modo, adv_negacion, adv_afirmacion, adv_cantidad, adv_duda, adv, ser, haber, estar, verbos, adj, sin, english);
    
    return palabras;
}

/**
*
*  UTF-8 data encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Utf8 = {
 
	// public method for url encoding
	encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// public method for url decoding
	decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
		return string;
	}
}
