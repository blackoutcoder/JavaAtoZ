//document.write("<br>Hello world");
//newFunction();

//function newFunction() {
//    document.write("<br>Hello world<br>");
//}

            //peremennije
//var number = 21; //Переменная может быть чем угодно (цифра, строка, условие)
//var string; 
//string = "Hello world";
//var floatNumber = 1.23;
//var isTrue;
//isTrue = true;
//document.write("Variable number =" + number + "<br>" + string + "<br>" + floatNumber + "<br>" + isTrue);

            // Aritmethical functions
//var x = 5;
//var y;
//var result;
//y = 12;
//result = x - y; //result = x * y, result = x / y
//document.write(result);
//result = result + x; // or result += x; 
//document.write("<br>" + result); 
//result ++  dobavliajet 1;
//result --  otnomaet 1;
//document.write(x + "+" + y + "=" + (x + y));

//var str_1 = "12";
//var str_2 = Number("24");
//document.write(Number(str_1) + str_2);

//var bool;
//var z = 6;
//var d = 7;
//bool = z < d; // >, <, =, <=, >=.
//document.write(bool);

            //ostatok pri delenii
//document.write(10 + "%" + 7 + "=" + (10%7)); // ostatok pri delenii 3;
            

            //Uslovnije operatori 
//var x = 4;
//var y = 5;
//if (x > y) // == - sravnenije, != ne ravno
//    document.write("x < y");
//else if (x == y)
//    document.write("x==y");    
//else 
//    document.write("x < y");   

//var stroka = "word12";

//switch(stroka) {
//    case "4": 
//        console.log("number 4");
//        break;
//    case "45": 
//        console.log("number 45");
//        break;
//    case "word": 
//        console.log("word");
//        break;   
//    default: 
//        console.log("default");     
// }

                     //Arrays , massivi dannih

//var arr = new Array(43,43,54,65)  or 
//var arr =  [5, true, "stroka", 5.7, -100];
//arr = [34,43,43,43];  
//arr[3] = "word";               
//console.log(arr.length);
//var matrix = [[4, 5, 6], [7, 8, 9], [1, 2, 3], ];

//matrix[1] [1] = 90;
//console.log(matrix);
            
                //Loops, cikli

//for(i = 100; i > 5; i /= 2/*Kazdij raz delim na 2  */ ) {
//    console.log(i);
//}        


/* var j = 1000;
while(j >= 100) {
    j -= 100;
    console.log(j);
}

var isHasCar = true;
while(isHasCar) {
    
} */

/*var i = 0;
do {
  i++;
    console.log(i);
} while(i < 10); */

/* for(i = 10; i <+ 20;i += 2) {
    //if(i > 15)
      //  break;
    if(i % 2 == 0)
        continue; //pozvoliajet propusti tu cast, kogda ostatok raven 0, toest vidast tolko neciotnie cisla  
    console.log(i);
} */

/*var arr = ["r", "o", "m", "a", "n"];

for(i = 0; i < arr.length; i++) {
    arr[i] += "+1"
    console.log("element" + (i + 1) + ":" + arr[i]);
}*/
                    //Alert, Promt, Confirm

/*alert("Roman is a programer"); //Vsplivajushee okno

var data = confirm("Are you ready?"); //
console.log(data);
if(data) {
    alert("Good, then let's proceed!");
} else {
    alert("Ohh alright then, maybe next time...");
    newFunction = "Shame on you!!!";
}*/

/*var data1 = prompt("How old are you?", "Enter you're age here pleace...");
console.log(data1);
var var1 = null;*/

/*var person = null;
var age = null;
if(confirm("Are you sure?")) {
    person = prompt("Enter your name");
    
    age = prompt("Enter your age");
    alert("Hello " + person);
} else {
    alert("See you next time... Bye!");
}*/


                                //Funkcii JS

/*function info(word) {                       //V kruglih skobkah parametri
    console.log(word + "!");
    console.log("Hello");
} /*
info("Hello Roman, you're strarted your funcktion lesson", );        //vizivajem funkciju

function summ(a ,b) {     //Slozenije dvuh peremennih
    var res = a + b;
    console.log(res); 
    info(res);            //Vizivaem funkciju v funkcii
 
}
summ(5, 7); */

/*function summa(arr) {      //Funkcija skladivaet vse cisla massiva 
    var sum = 0;

    for(var i = 0; i < arr.length; i++) 
        sum += arr[i];
    return sum;   //Vozvrashajem rezultat 
}    

var array = [10, 20, 30];
var array_2 = [30, 30, 30, 30];
var array_3 = [1, 2, 3, 4, 5];

var res = summa(array);
var res1 = summa(array_2);
var res2 = summa(array_3);
console.log("Result: " + res + ", " + res2 + " ," + res1); */

                        //Lokalnije i Globalnije peremennije

/*var num = 10; // Globalnaja peremennaja

function info() {
    
    var num = 20; //lokalnaja peremennaja, rabotaet tolko v predelah funkcii
    console.log(num);
}

info();
console.log(num);*/

                            //Sobitija i obrabotcik sobitij
/*var counter = 0;
function onClickButton(el) {
    counter++;
    el.innerHTML = "You pushed the button " + counter + " time(s)";//dobavliajem stili
    el.style.cssText = "border-radius: 6px; border: solid; font-size: 20px";
    el.style.background = "black";
    el.style.color = "white"; 
    console.log(el.name)
}

function onInput(el) {
    if(el.value == "1984")
        alert("Password accepted")
    console.log(el.value);
} */

                                //Formi 

/* let text = document.getElementById('text');
text.title = "old text";
console.log(text.title);
console.log(text.id);
text.style.color = "red";
text.style.backgroundColor = "pink";
text.innerHTML = "Roman <br> Repic";
document.getElementById('text').style.textAlign = "center"; 

// spans = document.getElementsByTagName('span');
var spans = document.getElementsByClassName('simple-text');

for(i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
} */

/* document.getElementById('button').addEventListener("click", checkForm);
function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById('main-form');

    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var repass = document.getElementById('repass').value;
    let state = document.getElementsByName('state').value;
    
    var fail = "";
    if(name == "" || pass == "" || state == "") 
        fail = "Fill all the tables";
    else if(name.lenght <= 1 || name.lenght > 50)
        fail = "Enter the correct name";
    else if(pass != repass)
        fail = "Paassword doesn't match";
    else if(pass.split("&").lenght > 1)
        fail = "Password is not correct"    
    
    if(fail != "") {
        document.getElementById('error').innerHTML = fail;
    
    } else {
        alert("Form was filled correctly");
        document.getElementById('error').innerHTML = "";
        
    } 
    
}
 */

                            //Taimeri i intervali 

/* var id = setInterval(my_func, 1000);// prostoj sciotcik do 10

var counter = 0;
function my_func() {
    counter++;
    console.clear();
    console.log("Counter: " + counter);
    if(counter == 10) {
        clearInterval(id);
        console.log("Counter stopped!");
    }   
}  */

/* var counter = 0;
setInterval(function() {
    counter++;
    console.clear();
    console.log("Seconds passed: " + counter);
}, 1000); */


/* setTimeout(function() {
    console.log("Timer is working");
}, 2000);
 */

/* setTimeout(my_funk, 2000);
function my_funk() {
    console.log("Timer is working!");
}
 */


                        // 