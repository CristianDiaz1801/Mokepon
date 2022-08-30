let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//estas son variables globales y las puedo utilizar en cuanquier parte del codigo; ya que las variables por lo general solo se pueden utilizar dentro de la funcion en donde fueron creadas. Las variables globales se crean por encima de todo el coddigo.

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none" //con la propiedad .style.display ocultamos elementos de html desde javascript, todos los elementos tienenuna propiedad style, incluso si no hemos programado css. La propiedad display en concreto es ue que nos permite mostrar u ocultar cosas a voluntad, para ocultar le ponemos el valor none. 

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    //ocultamos el boton reiniciar para que no se muestre cuando iniciemos el juego, la idea es que aparezca al final cuando ya hayamos persiso o ganado.

    let botonMascotaJugador = document.getElementById("boton-mascota") //creamos una variable para el boton de seleccionar mascota que se va a conectar al archivo html, document representa al archivo html y con el metodo .getElementById le decimos que nos traiga el elemento que corresponda con el nombre del id que ponemos entre parentesis.
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador) //para que el boton funcione, ponemos la variable de arriba y le ponemos el metodo .addEventListener que nos permite escuchar eventos, en este caso el evento que queremos escuchar es cuando el usuario le de click entonces le decimos entre parentesis que el evento es "click" para decirle al codigo que hacer al darle click ponemos un segundo argumento separado por una , en este caso una function la cual es seleccionarMascotaJugador que es el script de condiciones.

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    //estas 3 variables son las que llaman a los botones de los ataques, igual a la de arriba que llama al boton mascota jugador.

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
//todo lo que valla dentro de la funcion iniciarJuego se va a cargar cuando carge el html.

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none" 
    //despues de que el jugadir haya seleccionado la mascota ocultaremos esa seccion y que solo le muestre la seccion ataque que aparecera a continuacion.

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block" //utilizando la propiedad .style.display con el valor block podemos mostrar elementos que hayamos ocultado previamente. En este caso mostraremos la seccion de ataques, que habiamos ocultado al iniciar el juego, despues de que el jugador seleccione su mascota.

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    //aqui creamos variables con un document.getElementById para conectarlos a los botones de html por su id y entre parentesis le ponemos los nombres de los botones que vamos a verificar. El document.getElementById puede ir dentro de los parentesis de los condicionales tambien pero aqui decidimos hacerlo con variables. 

    let spanMascotaJugador = document.getElementById("mascota-jugador") //esta variable la creamos y utilizamos .getElementById y le ponemos el id de la etiqueta de html entre parentesis para llamarla. 

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodogue"
    }else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else {
        alert("No seleccionaste ninguna mascota")
    }    
    //finalmente al crear nuestros condicionales ponemos las variables con el metodo .checked para que nos verifique cual de los botones esta en true. Tambien ponemos la variable spanMascotaJugador con el metodo .innerHTML para que al seleccionar una mascota manipulemos el DOM con la etiqueta <span> en html, y nos aparezca el nombre de la mascota que escogimos y nos la muestre en el juego. 

    seleccionarMascotaEnemigo()
}
//con la funcion seleccionarMascotaJugador hacemos que el juego nos diga que mascota fue la que elegimos exactamente. 

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3) //aqui llamo a la funcion aleatorio y le doy mi valor maximo y minimo. 
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya" 
    } 
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}
//con estas funciones hacemos que la variable general ataqueJugador de arriba guarden el ataque que selecciono el jugador, y que despues nos muestre la seleccion del enemigo, porque estamos llamando la funcion ataqueAleatorioEnemigo

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}
//aquí creamos la funcion para que con aleatoriedad la variable general ataqueJugador de arriba guarde el ataque seleccionado por el enemigo. Y despues de que se ejecute la funcion ataqueAleatorioEnemig invocamos a la funcion combate. 

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE") 
        vidasEnemigo--   
        spanVidasEnemigo.innerHTML = vidasEnemigo   
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--   
        spanVidasEnemigo.innerHTML = vidasEnemigo    
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE") 
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo      
    }else {
        crearMensaje("PERDISTE")
        vidasJugador-- // el -- sirve para restarle uno a la variable
        spanVidasJugador.innerHTML = vidasJugador       
    }

    revisarVidas()
}
//en esta funcion realizamos la logica de cuando ganamos perdemos o empatamos, y dependiendo de el resultado, llamamos a la funcion crearMensaje y le ponemos como parametro cual fue el resultado. Al final llamamos a la funcion revisarVidas para que revise cuando llegan a 0 las vidas de alguno de los jugadores.

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICIDADES! GANASTE ✨")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("PERDISTE 😥")
    } 
}
//la funcion revisarVidas toma el contador de vidas de las variables globales que definimos al inicio, ya que son las que guardan la informacion de cuantas vidas tenemos o tiene el enemigo. Y al momento de llegar a 0 vidas nalguno de los dos nos envia el mensaje de que ganamos o perdimos.

function crearMensaje(resultado){ //la variable resultado la ponemos en el parametro de esta funcion para conectar los parametros que pusimos al invocarla en la funcion combate, asi en el parrafo la variable resultado siempre va a valer exactamente el resultado que hayamos obtenido en el combate.
    let sectionMensajes = document.getElementById("mensajes") //aqui creo una variable para indicar la seccion en la cual quiero incertar el parrafo, la seccion mensajes en html. 

    let parrafo = document.createElement("p") //aqui creo una variable y adentro con el metodo .createElementById le digo a javascript que me cree un elemento, en este caso un parrafo en la etiqueta <p> de html.
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + "   "+ resultado //aquí llamo la variable parrafo con el atributo .innerHTML y escribo el parrafo que va a ser creado. 

    sectionMensajes.appendChild(parrafo) // el metodo .appendChild sirve para insertar el parrafo en la seccion mensajes, llamamos la variable sectionMensajes que es la que nos trae la etiqueta y el .appendChild le dice que lo que va entre parentesis se va a insertar en esa etiqueta, en este caso la variable parrafo.
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true 
//tan pronto como se cree el mensaje final y hallamos perdido o ganado, se van a bloquear los botones de los ataques y ya no podremos seguir jugando. Esto de hace con el atributo disabled, el cual bloquea los botones, y el valor true para decirle que se debe activar osea que sea true.

let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
    //aqui hacemos aparecer el boton de reiniciar, una vez que ya se haya mostrado el mensaje final y sepamos si hemos ganado o perdido y nos permita jugar de nuevo. 
}

function reiniciarJuego() {
    location.reload() // el metodo location.reload recarga la locacion en la que estemos situados, location hace referencia a la ubicacin o direccion en la que nos encontramos. Este metodo permite reiniciar el juego al darle click al boton. 
}
//esta funcion es la que ejecuta el boton reiniciar-juego cuando se le de click, que es el boton que llamamos en la funcion iniciar juego. 

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//esta es la funcion para generar numeros aleatorios.

window.addEventListener("load", iniciarJuego) //aqui llamamos el evento de carga para que el documento js pueda funcionar cuando ya haya cargado el html, ya que al poner la etiqueta script en el head de html js no encuentra los botones del body, window es el navegador y el metodo listener es el mismo del click y entre parentesis que escuche el evento load despues de la , ponemos lo que vamos a llamar cuando cargue asi que llamamos la funcion iniciar juego.


