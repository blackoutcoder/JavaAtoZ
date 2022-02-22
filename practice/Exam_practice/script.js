/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti temperatūra celsijum ir
pamatyti jo pateikto temperatūros kovertavimą į:
1. Farenheitus (°F) | Formulė: °F = °C * 1.8 + 32;
2. Kalvinus (K) | Formulė: K = °C + 273.15;

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById('submit-btn').addEventListener("click", checkForm);
search.style.color = "red";
search.style.backgroundColor = "pink";
function checkForm(event) {
    event.preventDefault();
    const tempC = document.getElementById('search').value;
    tempF = tempC * 1.8 + 32;
    tempK = tempC * 1 + 273.15;
    console.log("Temperatura: " + tempC + " C");
    console.log("Temperatura farengeitais: " + tempF.toFixed(1) + " F");
    console.log("Temperatura kelvinais: " + tempK.toFixed(1)) + " K"; 
}
