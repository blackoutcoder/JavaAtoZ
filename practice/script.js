// number, string, array metodai
// 1. Number
// integer - skaicius be kablelio
// float arba double - skaicius su kableliu

/*const breadPrice = 5; // integer
const milkPrice = 3.49; // float

console.log("price :", Number.isInteger(milkPrice));
console.log(parseInt(milkPrice));
console.log(parseFloat(milkPrice));


let totalPrice = breadPrice + milkPrice;

if (Number.isInteger(totalPrice)) {
    console.log("Centu nereikia");
} else console.log("centu reikia");

const numbers = [3, 4.555555, 5.1, 7.45];

numbers.forEach((number) => {
    console.log(number.toFixed(0)); //toFixed rodo kiek skaiciu bus po kablelio.
    console.log(parseInt(number.toFixed(1)));
});*/

// number, string, array metodai

// 2. string
const myName = "Roman Repic, 37 metai";
console.log(myName.includes("36"));   //includes tikrina ar yra toks tekstas
console.log(myName.slice(6, 11)); //nukerpa nuo - iki
console.log(myName.trim()); // Nuima pradzios i galo tuscia vieta
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.repeat(3)); //Pakartoja tiek kiek irasita
console.log(myName.split(", ", 2)); //isskaido stringa i masyva (array) pagal duota parametra, 2 parametras nurodo kiek bus elementu massyve

const firstCity = "Klaipefda";
const secondCity = "KlaipedA";

const a = w
if (firstCity.toLocaleLowerCase === secondCity.toLocaleLowerCase) {
    console.log("pavadinimai sutampa")
} else console.log("pavadinimai skiriasi");
