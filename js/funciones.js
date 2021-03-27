/**
 * Función que indica si una cadena es Pangrama en JavaScript
 * 
 * @author parzibyte
 */
const pangrama = () => {
	const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxyz";
	let cadena = document.getElementById("texto").value;
	cadena = cadena.toLowerCase();

	let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);

	// Recorrer alfabeto
	for (let indice = 0; indice < alfabetoComoArreglo.length; indice++) {
		let letraActual = alfabetoComoArreglo[indice];
		// En caso de que la cadena NO contenga la letra, regresamos false de una vez
		if (!cadena.includes(letraActual)) {
			document.getElementById('resultado').innerHTML= "El texto ingresado no es pangrama.";
			console.log("No es pangrama") 
			return;
		}
	document.getElementById('resultado').innerHTML= "El texto ingresado es pangrama."; 
	console.log("es pangrama")
	}
};//https://parzibyte.me/blog/2019/04/23/javascript-cadena-pangrama/

const bisiesto =()=> {
	let year=document.getElementById("year").value;
	if(((year%4 ===0)&& (year%100!==0)) || (year%400===0)){
		document.getElementById('resultado').innerHTML= `El año ${year} es bisiesto`; 
		return;
	}else{
		document.getElementById('resultado').innerHTML= `El año ${year} no es bisiesto`; 
		return;
	}
};

function listaRepetidos(){    
    let lista = document.getElementById("lista").value;
    let arregloLista = Array.from(lista);
    let listaAux = arregloLista.slice();
    var arregloResultado =[];
    for (let indice = 0; indice < arregloLista.length; indice++) {
        let auxiliar = arregloLista[indice];
        listaAux.shift();
        if(listaAux.includes(auxiliar)||arregloResultado.includes(auxiliar)){
            arregloResultado.push(auxiliar);       
        }
    }
    console.log(arregloResultado);
    document.getElementById('resultado').innerHTML= "[ " + arregloResultado + " ]";
}

function romanize () {
	let num=document.getElementById("num").value;
	var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
	for ( i in lookup ) {
		while ( num >= lookup[i] ) {
			roman += i;
			num -= lookup[i];
		}
	}
	document.getElementById("resultado").innerHTML=roman;
}