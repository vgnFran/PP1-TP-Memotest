const arrayColores = ["green", "blue", "red", "yellow", "brown", "black", "gray", "pink", "green", "blue", "red", "yellow", "brown", "black", "gray", "pink"] // array de colores

let piezasMezcladas = _.shuffle(arrayColores)

const containerMemotest = document.querySelector("#container-memotest") // guardamos en una variable el ELEMENTO con el id container-memotest


for(i = 0; i < piezasMezcladas.length; i++){  //iteramos el array de colores

    let elemento = document.createElement("div")  //creo un div html
    elemento.dataset.color=piezasMezcladas[i]   //a cada div le asignamos un data-set (ej:data-color=red)
    elemento.classList.add("pieza")  //a ese div que creamos le pongo la clase .pieza

    elemento.style.width="100px"
    elemento.style.height="100px"
    elemento.style.backgroundImage = "url('./imgs/pieza-abz.jpg')";  //imagen de fondo
    elemento.style.backgroundPosition = "center"
    elemento.style.backgroundSize="cover"

    containerMemotest.appendChild(elemento)  //en el div contenedor agregamos el nuevo elemento (pieza)
}

const piezas = document.querySelectorAll(".pieza")  //en la variable piezas guardamos TODOS los elementos con la clase pieza

let primeraSeleccion = null
let segundaSeleccion = null

let turno = 1

let contadorJugador1 = 0
let contadorJugador2 = 0

for(let i = 0; i < piezas.length; i++){  //recorremos todas las piezas que guardamos en la variable "piezas"

    piezas[i].onclick = () =>{  //asignamos un evento click a cada uno de los elementos con clase "pieza"

        let pieza = piezas[i]


        piezas[i].style.backgroundColor = piezas[i].dataset.color   //mostramos el color que se le asigno .
        piezas[i].style.backgroundImage="none"  //ocultamos la imagen 

        if (!primeraSeleccion) { // primera carta levantada

            primeraSeleccion = pieza
            return
        }

        segundaSeleccion = pieza  // segunda carta levantada

        if(primeraSeleccion.dataset.color == segundaSeleccion.dataset.color){
            console.log("hay coincidencia")
        } else {
            console.log("no hay coincidencia")
        }

        console.log("finalizo el turno")
        resetTurno()
        cambiarTurno()

    }

}


function resetTurno() {
  primeraSeleccion = null
  segundaSeleccion = null
}

function cambiarTurno() {

  if(turno == 1){
    turno = 2
  } else {
    turno = 1
  }

  console.log("turno deljugador: ", turno)
}