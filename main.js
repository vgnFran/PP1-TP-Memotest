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

        segundaSeleccion = piezas[i].dataset.color  //guardamos en esta variable la seleccion actual 
        console.log("seleccion actual: ", segundaSeleccion)
        console.log("ultima seleccion: ", primeraSeleccion)

        piezas[i].style.backgroundColor = piezas[i].dataset.color   //mostramos el color que se le asigno .
        piezas[i].style.backgroundImage="none"  //ocultamos la imagen 

        if(segundaSeleccion == primeraSeleccion){  // si la seleccion actual es igual a lo que tenemos guardado en ultima seleccion entonces coincide

            console.log("COINCIDE")
            contadorJugador1 += 1



        } else {

            primeraSeleccion = piezas[i].dataset.color
            console.log("NO COINCIDE")

            if(turno == 1){
                turno = 2
                console.log("finaliza el turno del jugador uno, comienza el turno del jugador dos")
            } else if(turno == 2){
                turno = 1
                console.log("finaliza el turno del jugador dos, comienza el turno del jugador uno")

            }


        }
        

    }

}





//tenemos una variable que se llama primeraSeleccion
//detectamos el click en cada pieza y vemos su color
//guardamos el color en primeraSeleccion

//al hacer un click analizamos si la variable primeraSeleccion tiene guardado el mismo color que el click actual

