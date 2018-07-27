//window.cipher = {
  // ...
//};
const cifrado = (insertarMensaje) => {
  //Obtenemos el valor que el usuario ingreso en el "input mensaje", y ese valor lo guardamos en la var insertaMensaje
insertarMensaje = document.getElementById('input_mensaje').value;

// Inicializamos la variable 
  let cifradoCesar = '';
//	(initial setup; condition; increment) va a realizar ciclos por cada letra encontrada
 for (let i = 0; i < insertarMensaje.length; i++) { // La propiedad length de un objeto String representa la longitud de una cadena, por ejemplo "laura".length devuelve 5, cinco letras tiene el nombre o en otro ejemplo var animales = ["pato", "zorro", "tortuga"] animales.length
 //nos devuelve 3 animales que estan dentro del arreglo
  // A la variable insertaMensaje en su posicion i le aplica el metodo parseInt para asegurarnos que solo sea cadena de texto
     if (parseInt(insertarMensaje[i]) %1 === 0){ //Estrictamente iguales === Devuelve true si los operandos son igual y tienen el mismo tipo.
          alert("Ups, no son validos los números");
        }
  // el metodo charCodeAt en su posicion (i), si es igual estrictamente a 32 (codigo ASCII del espacio) entonces escribe y/o concatena un
  // espacio que previamente se ha guardado en la variable salto,a la variable cifradoCesar
     else if (insertarMensaje.charCodeAt(i)===32){
         let salto = ' ';
         cifradoCesar += salto;
      }
      //MAYUSCULAS En el codigo ASCII  la A mayuscula empieza en 65 a la Z que termina en 90
      //Para poder obtener el codigo ASCII de una letra del abecedario, se utilizara charCodeAt por ejemplo  var abecedario = 'ABC' abecedario.charCodeAt (0) el resultado sera 65
      // Si el codigo ASCII de la variable insertaMensaje es mayor o igual a 65 y menor o igual a 90, entonces entra...
      else if (insertarMensaje.charCodeAt(i) >=65 && insertarMensaje.charCodeAt(i) <=90) {
  //	 Esta es la formula para que cifre en ASCII
  // A la variable ubicacionDeLetras se le iguala: el mensaje que ingreso el usuario aplicandole el metodo charCodeAt en su posicion (i)
  // y le aplicamos una formula    
	let ubicacionDeLetras = insertarMensaje.charCodeAt(i) - 65 + 5 % 26 + 65;
/// A la var ubicacionDeLetras se le aplica el metodo String.fromCharCode (inverso del charCodeAt) y lo guardamos en la var mensajeCifrado
/// String.fromCharCode funciona de la manera inversa de charCodeAt, para convertir el codigo ASCII a una letra, por ejemplo  String.fromCharCode(65) el resultado sera "A"
	let mensajeCifrado = String.fromCharCode(ubicacionDeLetras);
 // La variable mensajeCifrado (que ahora tien un valor string) se concatena a la variable cifradoCesar      
  cifradoCesar += mensajeCifrado; // Guarda las letras obtenidas
  //console.log(cifradoCesar);
	}
//MINUSCULAS En el codigo ASCII  la a minuscula empieza en 97 a la z que  termina en 122
// Para poder obtener el codigo ASCII de una letra del abecedario, se utilizara charCodeAt por ejemplo  var abecedario = 'ABC' abecedario.charCodeAt (0) el resultado sera 65
// Si el codigo ASCII de la  variable insertaMensaje en su posicion (i) es mayor o igual a 97 y menor o igual a 122, entonces entra... 
  else if (insertarMensaje.charCodeAt(i) >=97 && insertarMensaje.charCodeAt(i) <=122) {
  // Obtenemos el codigo ASCII de la variable insertaMensaje y se le aplica una operacion, y lo guardamos o lo asignamos en la var ubicacionDeLetras
  let ubicacionDeLetras = insertarMensaje.charCodeAt(i) - 97 + 5 % 26 +97;
  //String.fromCharCode funciona de la manera inversa de charCodeAt, para convertir el codigo ASCII a una letra, por ejemplo  String.fromCharCode(65) el resultado sera "A"
  // A la variable ubicacionDeLetras le aplicamos el metodo String.fromCharCode, y esa letra que devuelve la asigno a mensaje cifrado 
  let mensajeCifrado = String.fromCharCode(ubicacionDeLetras);
  // ahora el valor de mensajeCifrado se concatena a la variable cifradoCesar
  cifradoCesar += mensajeCifrado;
  }

}
//  Salio de la condicion y ahora la variable cifradoCesar ya trae un valor 
  
 // El elemento del HTML con el id resultadoCifrado le asignamos como valor a cifradoCesar (que es el mensaje que veniamos obteniendo)
  document.getElementById('resultadoCifrado').value=cifradoCesar;
//.value Especifica el valor del atributo
}
//TERMINA CIFRADO


//INICIA DESCIFRADO
const descifrado= (insertarMensaje) => {
  // Tomamos el valor que el usuario ingreso en el elemento con el id input_mensaje, y lo guardamos en la variable insertarMensaje
insertarMensaje = document.getElementById('input_mensaje').value;

// Inicializamos la variable descifradoCesar como un string 
  let descifradoCesar = '';
 // (initial setup; condition; increment) va a realizar ciclos por cada letra encontrada
 for (let i = 0; i < insertarMensaje.length; i++){ // La propiedad length de un objeto String representa la longitud de una cadena, por ejemplo "laura".length devuelve 5, cinco letras tiene el nombre o en otro ejemplo var animales = ["pato", "zorro", "tortuga"] animales.length
 //nos devuelve 3 animales que estan dentro del arreglo
// para que no acepte números
   if (parseInt(insertarMensaje[i]) %1 ===0) { //Estrictamente iguales === Devuelve true si los operandos son igual y tienen el mismo tipo.
         alert("No son validos los números");
    }
// Otorga espacios
     else if (insertarMensaje.charCodeAt(i)===32){
             let salto = ' ';
          descifradoCesar += salto;
   }
   // MAYUSCULAS En el codigo ASCII  la A mayuscula empieza en 65 a la Z que termina en 90
   //Para poder obtener el codigo ASCII de una letra del abecedario, se utilizara charCodeAt por ejemplo  var abecedario = 'ABC' abecedario.charCodeAt (0) el resultado sera 65
      else if (insertarMensaje.charCodeAt(i) >=65 && insertarMensaje.charCodeAt(i) <=90) {
// Esta es la formula ASCII
  // A la variable ubicacionDeLetras se le iguala: el mensaje que ingreso el usuario aplicandole el metodo charCodeAt en su posicion (i)
  // y le aplicamos una formula         
    let ubicacionDeLetras =(insertarMensaje.charCodeAt(i) + 65 - 5) % 26 + 65;
// String.fromCharCode funciona de la manera inversa de charCodeAt, para convertir el codigo ASCII a una letra, por ejemplo  String.fromCharCode(65) el resultado sera "A"
    let mensajeDescifrado = String.fromCharCode(ubicacionDeLetras);
    descifradoCesar += mensajeDescifrado;

} // MINUSCULAS En el codigo ASCII  la a minuscula empieza en 97 a la z que  termina en 122
//Para poder obtener el codigo ASCII de una letra del abecedario, se utilizara charCodeAt por ejemplo  var abecedario = 'ABC' abecedario.charCodeAt (0) el resultado sera 65
    else if (insertarMensaje.charCodeAt(i) >=97 && insertarMensaje.charCodeAt(i) <=122) {
    let ubicacionDeLetras =insertarMensaje.charCodeAt(i) + 97 - 5 % 26 - 97;
    //String.fromCharCode funciona de la manera inversa de charCodeAt, para convertir el codigo ASCII a una letra, por ejemplo  String.fromCharCode(65) el resultado sera "A"
    let mensajeDescifrado = String.fromCharCode(ubicacionDeLetras);
    descifradoCesar += mensajeDescifrado; //

    }
  }
  
  //Salimos del condicional 
// Al elemento del HTML con id resultadoDescifrado le asigna descifradoCesar a su valor 
  document.getElementById('resultadoDescifrado').value=descifradoCesar;
  }
