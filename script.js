//document.write("<br>Hello world");
newFunction();

function newFunction() {
    document.write("<br>Hello world<br>");
}

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
                    //