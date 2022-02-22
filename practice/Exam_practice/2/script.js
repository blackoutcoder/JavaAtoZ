// Parašykite JS kodą, kuris nuspaudus mygtuką "Plus one" pridės vieną prie counter skaičiaus
// nuspaudus "Minus one" atims vieną nuo counter skaičiaus


let counter = 0;
document.getElementById('plus').addEventListener("click", plusOne);
document.getElementById('minus').addEventListener("click", minusOne);
function plusOne(event) {
    event.preventDefault();
    counter += 1;
    console.clear();
    console.log(counter);
    
} 
function minusOne(event) {
    event.preventDefault();
    counter -= 1;
    console.clear();
    console.log(counter);
    
} 