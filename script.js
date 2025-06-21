function convertTemp() {
  var input = document.getElementById("tempInput").value;
  var unit = document.getElementById("unit").value;
  var output = document.getElementById("output");

  if (input === "") {
    output.innerHTML = "Please enter a number.";
    return;
  }

  var result;

  if (unit === "C") {
    result = (input * 9 / 5) + 32;
    output.innerHTML = input + "°C = " + result.toFixed(2) + "°F";
  } else {
    result = (input - 32) * 5 / 9;
    output.innerHTML = input + "°F = " + result.toFixed(2) + "°C";
  }
}
