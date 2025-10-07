const arrayColores = ["green", "blue", "red", "yellow", "brown", "black", "gray", "pink", "green", "blue", "red", "yellow", "brown", "black", "gray", "pink"] // array de colores

let piezasMezcladas = _.shuffle(arrayColores)  //mezclamos el array de colores 

const containerMemotest = document.querySelector("#container-memotest") // guardamos en una variable el ELEMENTO con el id container-memotest


for(i = 0; i < piezasMezcladas.length; i++){  //iteramos el array de colores

  let elemento = document.createElement("div")  //creo un div 
  elemento.dataset.color=piezasMezcladas[i]   //a cada div le asignamos un data-set (ej:data-color=red)
  elemento.classList.add("pieza")  //a ese div que creamos le pongo la clase .pieza

  elemento.classList.add("background-pieza")

  containerMemotest.appendChild(elemento)  //en el div contenedor agregamos el nuevo elemento (pieza)
}

//una vez creadas todas las piezas

const piezas = document.querySelectorAll(".pieza")  //en la variable piezas guardamos TODOS los elementos con la clase pieza (16 elementos)


let primeraSeleccion = null
let segundaSeleccion = null

let turno = 1

let contadorJugador1 = 0
let contadorJugador2 = 0

const spanJugador1 = document.querySelector("#span-jugador1")  
const spanJugador2 = document.querySelector("#span-jugador2")
const spanTurnoDe = document.querySelector("#mostrar-turno")

for(let i = 0; i < piezas.length; i++){  //recorremos todas las piezas que guardamos en la variable "piezas"

  piezas[i].onclick = () =>{  //asignamos un evento click a cada uno de los elementos con clase "pieza"

    let pieza = piezas[i]  //guardamos en la variable pieza el elemento completo 

    pieza.style.backgroundColor = piezas[i].dataset.color   //mostramos el color que se le asigno .
    pieza.style.backgroundImage="none"  //ocultamos la imagen 

    if (!primeraSeleccion) { // si primera seleccion es null (esta vacio) guarda su valor

      primeraSeleccion = pieza 
      return
    }

    segundaSeleccion = pieza  // segunda carta levantada

    if(primeraSeleccion.dataset.color == segundaSeleccion.dataset.color){  // si los colores de las piezas seleccionadas son iguales "hay coincidencia"

      console.log("hay coincidencia")

      resetTurno()  // reseteamos las variables a null para poder asignar nuevos valores en los nuevos clicks 
      contador(turno)  // sumanos 1 al jugador que este de turno actualmente 

    } else {

      console.log("no hay coincidencia")
      console.log("finalizo el turno")

      setTimeout(() => { //esperamos 1.5 segundos y removemos propiedades que asignamos, y volvemos a agregar el fondo original 
        
        primeraSeleccion.style.removeProperty("background-color")
        primeraSeleccion.style.removeProperty("background-image")
        primeraSeleccion.classList.add("background-pieza")

        segundaSeleccion.style.removeProperty("background-color")
        segundaSeleccion.style.removeProperty("background-image")
        segundaSeleccion.classList.add("background-pieza")

        resetTurno()
        cambiarTurno()

      }, 1500)


    }


  }

}


function resetTurno() { //seteo de variables en null para poder asignar nuevos valores y no confundir con valores anteriores

  primeraSeleccion = null
  segundaSeleccion = null

}

function cambiarTurno() { //funcion para cambiar el turno del jugador actual al jugador contrario 

  if(turno == 1){
    turno = 2
  } else {
    turno = 1
  }

  console.log("turno deljugador: ", turno)
  spanTurnoDe.textContent = turno //mostrar en el html de quien es el turno actual
}

function contador(turno){  // funcion para sumar 1 al jugador actual 

  if(turno == 1){
    contadorJugador1 += 1
  } else{
    contadorJugador2 += 1
  }

  //mostrar los contadores actualizados en el htm
  spanJugador1.textContent = contadorJugador1  
  spanJugador2.textContent = contadorJugador2

  if(contadorJugador1 == 5){

    alert("GANO EL JUGADOR 1")  //mostrar alerta
    window.location.href="/"  //recargar pagina 

  } else if (contadorJugador2 == 5){

    alert("GANO EL JUGADOR 2")  //mostrar alerta
    window.location.href="/"  //recargar pagina 

  }

}



