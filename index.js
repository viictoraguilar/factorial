/*
  5! = 1x2x3x4x5 =120
*/

function cargarFunciones(entrada) {
  let numero = entrada.value
  if(numero >= 0 && numero <= 100) {
    let resultado = factorial(numero)
    limpiar()
    imprimir(resultado)
  } else {
    limpiar()
    imprimir("Valor incorrecto. Se aceptan valores entre 0 y 100")
  }
}

function factorial(n) {
  if(n == 0 || n == 1) {
    return 1
  } else {
    //Llamando a la función recursiva
    return n * factorial(n - 1)
  }
}

function imprimir(valor) {
  let resultado = document.getElementById('resultado')
  resultado.innerHTML = "Resultado: " + valor
}

function limpiar() {
  let resultado = document.getElementById('resultado')
  resultado.innerHTML = ""
}