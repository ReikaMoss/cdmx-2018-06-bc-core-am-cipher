function cifrado() {
	let insertarMensaje = document.getElementById('perrito').value;
  let insertarKey = document.getElementById('input_key').value;

  let cifradoCesar = '';
//	(initial setup; condition; increment)
	for (let i = 0; i < insertarMensaje.length; i++) {
	//	 Esta es la formula para que cifre en ASCII
		let ubicacionDeLetras = (insertarMensaje.toUpperCase().charCodeAt(i) - 65 + insertarKey) % 26 + 65;
// Devuelve el mensaje cifrado
		let mensajeCifrado = String.fromCharCode(ubicacionDeLetras);
    cifradoCesar += mensajeCifrado;
	}
  document.getElementById('resultadoCifrado').value=cifradoCesar;
}

function descifrado() {
  let insertarMensaje = document.getElementById('perrito').value;
  let insertarKey = document.getElementById('input_key').value;

  let descifradoCesar = '';
  // (initial setup; condition; increment)
  for (let i = 0; i < insertarMensaje.length; i++){
// Esta es la formula ASCII
    let ubicacionDeLetras =(insertarMensaje.toUpperCase(). charCodeAt(i)+ 65 - insertarKey) % 26+65;
// Devuelve el mensaje descifrado
    let mensajeDescifrado = String.fromCharCode(ubicacionDeLetras);
    descifradoCesar += mensajeDescifrado;
  }
    document.getElementById('resultadoDescifrado').value=descifradoCesar;

}
