//funcion que suma
function add(n1, n2) {
  return n1 + n2;
}
document.getElementById("demo1").innerHTML = add(9824, 777);

// funcion que multiplica

function multiply(n1, n2) {
  return n1 * n2;
}
document.getElementById("demo").innerHTML = multiply(4, 3);


//funcion que multiplica ambos argumentos

function multiply2(n1, n2) {
  return n1 * n2;
}
document.getElementById("demo3").innerHTML = multiply2(add(9824, 777), 36325);