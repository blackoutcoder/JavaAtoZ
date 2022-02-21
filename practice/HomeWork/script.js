            // Pratimas 1
/*const numbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9]; 
const a = numbers[0];
const b = numbers[8];
let totalSum = a + b;
console.log(totalSum); */

            //Pratimas 2
/* const numbers = [10, 20, 50, 90, 100, 150];
function myFunc(a, b) {
    return a + b;
  }
console.log(numbers.reduce(myFunc));
 */

// 2.2. Parašykite programą kuri suskaičiuos cities bendrą area sumą
/* const cities = [
    { name: "Klaipeda", area: 10000 },
    { name: "Vilnius", area: 50000 },
    { name: "Kaunas", area: 30000 },
    { name: "Siauliai", area: 8000 },
];
const totalArea = cities.reduce((a, b) => a + b.area, 0);
console.log("2.2 ", totalArea); */

// Array.find()
// 3. Parašykite programą kuri suras vartotoją su id=3 ir atvaizduos jo vardą bei slaptažodį

/* const users = [
    { username: "rokasandreikenas", pass: "rokand", id: 1 },
    { username: "zigmaszigmutis", pass: "ziggy", id: 2 },
    { username: "simassimutis", pass: "simsam", id: 3 },
];

const printLoginById = (users, id) => {
    console.log('User Name: ', users.find(user => user.id === id)['username'])
    console.log('Password: ', users.find(user => user.id === id)['pass'])
}
printLoginById(users, 3);
console.log(" ");
 */
// Array.push()
// 4.1. Parašykite programą kuri įstums į tuščią masyvą 3 vaisius. Susikurti const fruits = []

/* const fruits = [];
fruits.push("fruit1", "fruit2", "fruit3");
console.log(fruits);
console.log(" "); */

// 4.2. Parašykite programą kuri įstums naują miestą į cities masyvą su atitinkamais duomenim. Naudoti cities masyva iš antros užduoties.
/* 
const cities4 = [
    { name: "Klaipeda", area: 10000 },
    { name: "Vilnius", area: 50000 },
    { name: "Kaunas", area: 30000 },
    { name: "Siauliai", area: 8000 },
];
cities4.push({ name: 'Nida', area: 1000 });
console.log(cities4); */
// Array.unshift()
// Padarykite tokias pačias užduotis kaip 3 pratime, tik panaudokite unshift metodą

// Push metodas prideda elementą masyvo pabaigoje, unshift - masyvo gale

// 5.1.
/* const fruits5 = [];

const unshiftFruits5 = (fruits5, fruit1, fruit2, fruit3) => {
    fruits5.unshift(fruit1, fruit2, fruit3);
}

unshiftFruits5(fruits5, 'apple', 'banana', 'lemon');
unshiftFruits5(fruits5, 'orange', 'kiwi', 'mango');
console.log(fruits5);
console.log(" ");
 */
// 5.2.

/* const cities5 = [
    { name: "Klaipeda", area: 10000 },
    { name: "Vilnius", area: 50000 },
    { name: "Kaunas", area: 30000 },
    { name: "Siauliai", area: 8000 },
];

const unshiftCities5 = (cities5, city) => {
    cities5.unshift(city);
}
unshiftCities5(cities5, { name: 'Nida', area: 1000 });
console.log(cities5);
console.log(" "); */

// Array.pop() ir Array.shift()
// 6. Parašykite programą kuri paliks vidurinį vardą masyve.Atsakymas turi būti ["Ash"]

// shift() metodas pašalina pirmąjį masyvo elementą, o pop() - paskutinį.

/* const names6 = ["Rock", "Bob", "Ash", "Sue", "Johny"];
const leaveMiddle = (names6) => {
    let namesMiddle = names6;
    for (; namesMiddle.length > 2;) {
        namesMiddle.pop();
        namesMiddle.shift();
    }
    return namesMiddle;
}

console.log(leaveMiddle(names6));
console.log(" ");
 */
// Array.slice()
// 7. Parašykite programą kuri paims pirmus du ir paskutinius vardus iš masyvo. Atsakymas turi būti: firstTwo = ["Rock", "Bob"]; ir lastTwo ="Sue", "Johny"];
/* 
const names7 = ["Rock", "Bob", "Ash", "Sue", "Johny"];

const firstAndLastTwo = (names7) => {
    const firstTwo = names7.slice(0, 2);
    const lastTwo = names7.slice(-2);
    let firstAndLast = [];
    firstAndLast.push(firstTwo);
    firstAndLast.push(lastTwo);
    return firstAndLast;
}
 */
// buvo galima čia išsaugoti atskiruose kintamuosiuose, bet nedariau
/* 
console.table(firstAndLastTwo(names7));
console.log("firstTwo = ", firstAndLastTwo(names7)[0]);
console.log("firstTwo = ", firstAndLastTwo(names7)[1]);
console.log(" "); */

// Array.concat()
// 8. Parašykite programą kuri sujungs du masyvus į vieną. Naudokite 6 užduoties atsakymus kaip kintamuosius. Atsakymas turi būti concated = ["Rock", "Bob", "Sue", "Johny"];

/* const concated = firstAndLastTwo(names7)[0].concat(firstAndLastTwo(names7)[1]);

console.log("concated = ", concated);
console.log(" ");
 */
// Array.splice()
// Parašykite programą kuri papildys trūkstamus mėnesius. Mėnesių turi būti 12

/* const months = ["Sausis", "Kovas", "Balandis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Gruodis"];

const newMonths = months;
newMonths.splice(1, 0, "Vasaris");
newMonths.splice(4, 0, "Gegužė", "Birželis");
newMonths.splice(10, 0, "Lapkritis");



console.log(newMonths);
console.log("Mėnesių yra: ", newMonths.length)
console.log(" ");

 */
