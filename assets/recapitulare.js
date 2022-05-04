//Tipuri de date primitive:
//undefined -> undefined; reprezinta o variabila care nu a fost definita;
//boolean -> true, false;
//number -> numar (ex. 1,2,3 68,70,72)
//string -> "Ana are mere"; sir de caractere
//NULL -> null; variabila nu exista in locatia de memorie;

//Operatori logici in Javascript:
// Operatorul "AND" -> &&
// Operatorul "SAU" -> ||

//Operatori Aritmetici in Javascript:
// Adunare sau concatenare: +
// Scadere: -
// Inmultire: *
// Impartire sau divisible (aka. div): /
// Restul impartirii sau modulo (aka. mod): %

//Operatori de comparare: 
// <, >, <=, >=, ==, ===;
// * diferenta intre == si === este ca == verifica valoarea 
// === verifica valoarea si tipul de data

//Ex.: ('33' == 33) // true
//Ex.: ('33' === 33) // false

// Exemple: 
// "Ana are mere" - 3 = NaN (Not a Number);
// "Ana are mere" + 3 = "Ana are mere3"
// 7 / 3 = 2.3 (Pentru a lua doar catul folosim Math.floor(7 / 3))
// 7 % 3 = 1; <- reprezinta DOAR restul impartirii;


// Structuri de date decizionale;

//Documentatie: https://www.w3schools.com/js/js_if_else.asp
// if else:

// if (conditie) {
    //Se intampla ceva
// } else {
    //Se intampla altceva
// }

//Documentatie: https://www.w3schools.com/js/js_switch.asp
// Switch

// switch (type) {
//     case "conditie 1":
//         se intampla conditie 1;
//         break;
//     case "conditie 2":
//         se intampla conditie 2;
//         break;
//     default
//         se intampla default;
// }

//Structuri repetitive:
// For, while, do while;

//For:
// for (declarare incrementor; conditie oprire; incrementare) {
    //Aici adaugam cod;
// }

// Ex: 
// for (var i = 0; i <= 5; i++) {
    // console.log('I love JavaScript'); // se printeaza mesajul de 5 ori;
// }

//While 
//while (conditie) {
    // run code
// }

//do While;

//do {
    //Executam mai intai
// } while(conditie de oprire)