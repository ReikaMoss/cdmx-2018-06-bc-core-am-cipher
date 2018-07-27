//window.cipher = {
  // ...
//};
/*const cifrado = (insertarMensaje) => {
insertarMensaje = document.getElementById('input_mensaje').value;


  let cifradoCesar = '';
//	(initial setup; condition; increment)
 for (let i = 0; i < insertarMensaje.length; i++) {
  // If para que no acepte números
     if   (parseInt(insertarMensaje[i]) %1 === 0){
          alert("Ups, no son validos los números");
        }
  // Para que otorgue espacios en el texto
     else if (insertarMensaje.charCodeAt(i)===32){
         let salto = ' ';
         cifradoCesar += salto;
      }
      //MAYUSCULAS
      else if (insertarMensaje.charCodeAt(i) >=65 && insertarMensaje.charCodeAt(i) <=90) {
  //	 Esta es la formula para que cifre en ASCII
	let ubicacionDeLetras = insertarMensaje.charCodeAt(i) - 65 + 5 % 26 + 65;
// Devuelve el mensaje cifrado
	let mensajeCifrado = String.fromCharCode(ubicacionDeLetras);
  cifradoCesar += mensajeCifrado;
  //console.log(cifradoCesar);
	}
//MINUSCULAS
  else if (insertarMensaje.charCodeAt(i) >=97 && insertarMensaje.charCodeAt(i) <=122) {
  let ubicacionDeLetras = insertarMensaje.charCodeAt(i) - 97 + 5 % 26 +97;
  let mensajeCifrado = String.fromCharCode(ubicacionDeLetras);
  cifradoCesar += mensajeCifrado;
  }

}
  document.getElementById('resultadoCifrado').value=cifradoCesar;

}

const descifrado= (insertarMensaje) => {
insertarMensaje = document.getElementById('input_mensaje').value;


  let descifradoCesar = '';
 // (initial setup; condition; increment)
 for (let i = 0; i < insertarMensaje.length; i++){
//if para que no acepte números
   if (parseInt(insertarMensaje[i]) %1 ===0) {
         alert("No son validos los números");
    }
// Otorga espacios
     else if (insertarMensaje.charCodeAt(i)===32){
             let salto = ' ';
          descifradoCesar += salto;
   }
   // MAYUSCULAS
      else if (insertarMensaje.charCodeAt(i) >=65 && insertarMensaje.charCodeAt(i) <=90) {
// Esta es la formula ASCII
    let ubicacionDeLetras =(insertarMensaje.charCodeAt(i) + 65 - 5) % 26 + 65;
// Devuelve el mensaje descifrado
    let mensajeDescifrado = String.fromCharCode(ubicacionDeLetras);
    descifradoCesar += mensajeDescifrado;

} // MINUSCULAS
    else if (insertarMensaje.charCodeAt(i) >=97 && insertarMensaje.charCodeAt(i) <=122) {
    let ubicacionDeLetras =insertarMensaje.charCodeAt(i) + 97 - 5 % 26 - 97;
    let mensajeDescifrado = String.fromCharCode(ubicacionDeLetras);
    descifradoCesar += mensajeDescifrado;

    }
  }

  document.getElementById('resultadoDescifrado').value=descifradoCesar;
  }
*/
