
function sumar() {
  var x1 = parseFloat(document.getElementById("x1").value);
  var y1 = parseFloat(document.getElementById("y1").value);
  var z1 = parseFloat(document.getElementById("z1").value);

  var x2 = parseFloat(document.getElementById("x2").value);
  var y2 = parseFloat(document.getElementById("y2").value);
  var z2 = parseFloat(document.getElementById("z2").value);

  var resultX = x1 + x2;
  var resultY = y1 + y2;
  var resultZ = z1 + z2;

  document.getElementById("result").innerHTML = "Ü resultado: (" + resultX + ", " + resultY + ", " + resultZ + ")";
}

function restar() {
  var x1 = parseFloat(document.getElementById("x1").value);
  var y1 = parseFloat(document.getElementById("y1").value);
  var z1 = parseFloat(document.getElementById("z1").value);

  var x2 = parseFloat(document.getElementById("x2").value);
  var y2 = parseFloat(document.getElementById("y2").value);
  var z2 = parseFloat(document.getElementById("z2").value);

  var resultX = x1 - x2;
  var resultY = y1 - y2;
  var resultZ = z1 - z2;

  document.getElementById("result").innerHTML = "Ü resultado: (" + resultX + ", " + resultY + ", " + resultZ + ")";
}

function productoEscalar() {
  var x1 = parseFloat(document.getElementById("x1").value);
  var y1 = parseFloat(document.getElementById("y1").value);
  var z1 = parseFloat(document.getElementById("z1").value);

  var x2 = parseFloat(document.getElementById("x2").value);
  var y2 = parseFloat(document.getElementById("y2").value);
  var z2 = parseFloat(document.getElementById("z2").value);

  var result = x1 * x2 + y1 * y2 + z1 * z2;

  document.getElementById("result").innerHTML = "Ü resultado: (" + result;
}
function productoCruz() {
  var x1 = parseFloat(document.getElementById("x1").value);
  var y1 = parseFloat(document.getElementById("y1").value);
  var z1 = parseFloat(document.getElementById("z1").value);

  var x2 = parseFloat(document.getElementById("x2").value);
  var y2 = parseFloat(document.getElementById("y2").value);
  var z2 = parseFloat(document.getElementById("z2").value);

  var resultX = y1 * z2 - z1 * y2;
  var resultY = z1 * x2 - x1 * z2;
  var resultZ = x1 * y2 - y1 * x2;

  document.getElementById("result").innerHTML = "Ü resultado: (" + resultX + ", " + resultY + ", " + resultZ + ")";
} function escalarPorVector() {
  var x1 = parseFloat(document.getElementById("x1").value);
  var y1 = parseFloat(document.getElementById("y1").value);
  var z1 = parseFloat(document.getElementById("z1").value);

  var scalar = parseFloat(document.getElementById("scalar").value);

  var resultX = x1 * scalar;
  var resultY = y1 * scalar;
  var resultZ = z1 * scalar;

  document.getElementById("result").innerHTML = "Ü resultado: (" + resultX + ", " + resultY + ", " + resultZ + ")";
}

