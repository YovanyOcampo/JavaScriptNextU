var calculadora = {

  teclaON: document.getElementById("on"),
  teclaSign: document.getElementById("sign"),
  teclaSqr: document.getElementById("raiz"),
  teclaDiv: document.getElementById("dividido"),
  teclaSum: document.getElementById("mas"),
  teclaMult: document.getElementById("por"),
  teclaPunto: document.getElementById("punto"),
  teclaRes: document.getElementById("menos"),
  teclaIgual: document.getElementById("igual"),
  tecla1: document.getElementById("uno"),
  tecla2: document.getElementById("dos"),
  tecla3: document.getElementById("tres"),
  tecla4: document.getElementById("4"),
  tecla5: document.getElementById("5"),
  tecla6: document.getElementById("6"),
  tecla7: document.getElementById("7"),
  tecla8: document.getElementById("8"),
  tecla9: document.getElementById("9"),
  tecla0: document.getElementById("cero"),
  cambioTamaño: function(objeto){
    objeto.style = "width: 95%"
    setTimeout(function(){
      objeto.style = "width: 100%";
    },80)
  }
}

calculadora.teclaON.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaON)
})
calculadora.teclaSign.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaSign)
})
calculadora.teclaSqr.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaSqr)
})
calculadora.teclaDiv.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaDiv)
})
calculadora.teclaSum.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.teclaSum.style = "width: 95%"
  setTimeout(function(){
    calculadora.teclaSum.style = "width: 100%";
  },80)
})
calculadora.teclaMult.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaMult)
})
calculadora.teclaPunto.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaPunto)
})
calculadora.teclaRes.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaRes)
})
calculadora.teclaIgual.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.teclaIgual)
})
calculadora.tecla1.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla1)
})
calculadora.tecla2.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla2)
})
calculadora.tecla3.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla3)
})
calculadora.tecla4.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla4)
})
calculadora.tecla5.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla5)
})
calculadora.tecla6.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla6)
})
calculadora.tecla7.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla7)
})
calculadora.tecla8.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla8)
})
calculadora.tecla9.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla9)
})
calculadora.tecla0.addEventListener('click', function(e) {
  e.preventDefault()
  calculadora.cambioTamaño(calculadora.tecla0)
})
