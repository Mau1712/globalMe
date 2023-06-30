var contadorElemento1 = document.getElementById("conteoClientesAct1");
var contadorElemento2 = document.getElementById("conteoClientesAct2");
var contadorElemento3 = document.getElementById("conteoClientesAct3");
var incremento = 5;

var contador1 = 0;
var contador2 = 0;
var contador3 = 0;

var seccionElemento1 = document.getElementById("sectionDosContadores1");
var seccionElemento2 = document.getElementById("sectionDosContadores2");
var seccionElemento3 = document.getElementById("sectionDosContadores3");

var valorMaximo1 = 127;
var valorMaximo2 = 1015;
var valorMaximo3 = 120;

function incrementarContador1() {
  contador1 += incremento;
  contadorElemento1.textContent = contador1;

  if (contador1 < valorMaximo1) {
    requestAnimationFrame(incrementarContador1);
  }
}

function incrementarContador2() {
  contador2 += incremento;
  contadorElemento2.textContent = contador2;

  if (contador2 < valorMaximo2) {
    requestAnimationFrame(incrementarContador2);
  }
}

function incrementarContador3() {
  contador3 += incremento;
  contadorElemento3.textContent = contador3;

  if (contador3 < valorMaximo3) {
    requestAnimationFrame(incrementarContador3);
  }
}

function verificarPosicion() {
  var rect1 = seccionElemento1.getBoundingClientRect();
  var rect2 = seccionElemento2.getBoundingClientRect();
  var rect3 = seccionElemento3.getBoundingClientRect();

  var posicionVisible1 = rect1.top < window.innerHeight && rect1.bottom >= 0;
  var posicionVisible2 = rect2.top < window.innerHeight && rect2.bottom >= 0;
  var posicionVisible3 = rect3.top < window.innerHeight && rect3.bottom >= 0;

  if (posicionVisible1) {
    incrementarContador1();
    window.removeEventListener("scroll", verificarPosicion);
  }

  if (posicionVisible2) {
    incrementarContador2();
    window.removeEventListener("scroll", verificarPosicion);
  }

  if (posicionVisible3) {
    incrementarContador3();
    window.removeEventListener("scroll", verificarPosicion);
  }
}

window.addEventListener("scroll", verificarPosicion);



function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

window.addEventListener("click", function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
});

