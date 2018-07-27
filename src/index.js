//window.cipher = {
  // ...
//};
const cifrado = (insertarMensaje) => {
  //El usuario va a ingresar el mensaje
insertarMensaje = document.getElementById('input_mensaje').value;

// Esta variable va a guardar las letras
  let cifradoCesar = '';
//	(initial setup; condition; increment) va a realizar ciclos por cada palabra encontrada
 for (let i = 0; i < insertarMensaje.length; i++) { // La propiedad length de un objeto String representa la longitud de una cadena, por ejemplo "laura".length devuelve 5, cinco letras tiene el nombre o en otro ejemplo var animales = ["pato", "zorro", "tortuga"] animales.length
 //nos devuelve 3 animales que estan dentro del arreglo
  // If para que no acepte números
     if   (parseInt(insertarMensaje[i]) %1 === 0){
          alert("Ups, no son validos los números");
        }
  // Para que otorgue espacios en el texto
     else if (insertarMensaje.charCodeAt(i)===32){
         let salto = ' ';
         cifradoCesar += salto;
      }
      //MAYUSCULAS En el codigo ASCII  la A mayuscula empieza en 65 a la Z que termina en 90
      //Para poder obtener el codigo ASCII de una letra del abecedario, se utilizara charCodeAt por ejemplo  var abecedario = 'ABC' abecedario.charCodeAt (0) el resultado sera 65
      else if (insertarMensaje.charCodeAt(i) >=65 && insertarMensaje.charCodeAt(i) <=90) {
  //	 Esta es la formula para que cifre en ASCII
	let ubicacionDeLetras = insertarMensaje.charCodeAt(i) - 65 + 5 % 26 + 65;
// Devuelve el mensaje cifrado
// String.fromCharCode funciona de la manera inversa de charCodeAt, para convertir el codigo ASCII a una letra, por ejemplo  String.fromCharCode(65) el resultado sera "A"
	let mensajeCifrado = String.fromCharCode(ubicacionDeLetras);
  cifradoCesar += mensajeCifrado; // Guarda las letras obtenidas
  //console.log(cifradoCesar);
	}
//MINUSCULAS En el codigo ASCII  la a minuscula empieza en 97 a la z que  termina en 122
// Para poder obtener el codigo ASCII de una letra del abecedario, se utilizara charCodeAt por ejemplo  var abecedario = 'ABC' abecedario.charCodeAt (0) el resultado sera 65
  else if (insertarMensaje.charCodeAt(i) >=97 && insertarMensaje.charCodeAt(i) <=122) {
    //	 Esta es la formula para que cifre en ASCII
  let ubicacionDeLetras = insertarMensaje.charCodeAt(i) - 97 + 5 % 26 +97;
  //String.fromCharCode funciona de la manera inversa de charCodeAt, para convertir el codigo ASCII a una letra, por ejemplo  String.fromCharCode(65) el resultado sera "A"
  let mensajeCifrado = String.fromCharCode(ubicacionDeLetras);
  cifradoCesar += mensajeCifrado;
  }

}
  document.getElementById('resultadoCifrado').value=cifradoCesar;
//.value Especifica el valor del atributo
}

const descifrado= (insertarMensaje) => {
  //  //El usuario va a ingresar el mensaje cifrado
insertarMensaje = document.getElementById('input_mensaje').value;


  let descifradoCesar = '';
 // (initial setup; condition; increment) va a realizar ciclos por cada palabra encontrada
 for (let i = 0; i < insertarMensaje.length; i++){ // La propiedad length de un objeto String representa la longitud de una cadena, por ejemplo "laura".length devuelve 5, cinco letras tiene el nombre o en otro ejemplo var animales = ["pato", "zorro", "tortuga"] animales.length
 //nos devuelve 3 animales que estan dentro del arreglo
//if para que no acepte números
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
    let ubicacionDeLetras =(insertarMensaje.charCodeAt(i) + 65 - 5) % 26 + 65;
// Devuelve el mensaje descifrado
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

  document.getElementById('resultadoDescifrado').value=descifradoCesar;
  }
