// Recapitulare:
// Un tip de data non-primitiva care contine mai multe primitive: O colectie de primitive!!!

// Obiecte de tip dictionar:

// const objDictionary = {
//     key: 'value',
//     key2: 'value2',
// }

// Obiecte de tip vector sau Array:
// const objArr = [1, 2, 3, 'ceapa', 'marinata', true, false];

// Functii; sau "A block of reusable code";
// Structura: 
// function numeFunctie () { aici adaugam codul nostru};
//ex: 

// function myFct (param1, param2) {
//     // aici putem adauga cod;
//     // logica/ declarare de variabile/ calcule/ etc.
//     console.log(param1, param2);
// }

// myFct('Ana are ', 21);

// Varianta de scriere a unei functii in ES6;
// fat arrow function; programare functionala;

// const functiaMea = (param1, param2) => {}

// functiaMea('Ana are ', 21);

// 1) Sa se creeze o functie care caculeaza si afiseaza 2 numere;

// function sumaADouaNumere(a, b) {
//     console.log(a + b);
// }
// sumaADouaNumere(10, 32);

// 2) O functie care sa imi spuna daca un numar este par sau  impar;
// function oddOrEven(number) {// 4 % 2 = 0; 5 % 2 = 1; 6 % 2 = 0
//     if (number % 2 === 0) { 
//         console.log('Nr par');
//     } else {
//         console.log('Nr impar');
//     }
// }
// oddOrEven(10);
// 3) O functie ce afiseaza 2 vectori (Array), unul par si impar. 
// 3.1)Aceasta functie primeste ca parametru un array de numere [1, 2, 3, 6, 9, 32, 71];
// function oddOrEvenArr (arr) {
//     const oddArr = [];
//     const evenArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenArr.push(arr[i]);
//         } else {
//             oddArr.push(arr[i]);
//         } 
//     }

//     console.log(oddArr);
//     console.log(evenArr);
// }
// oddOrEvenArr([1, 2, 3, 6, 9, 32, 71]);

// 4) sa se creeze o functie care ridica la putere un numar;
// function ridicarePutere(a, b){
//     console.log(a**b);
// }

// ridicarePutere(3,2);

// 5) Sa se calculeze si afiseze suma numerelor dintr-un array; 
// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// output: suma numerelor;

// function arrSum(array) {
//     //suma numerelor din array;
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         // console.log(array[i]);
//         sum = sum + array[i];
//     }
//     console.log(sum);
// }

// arrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 6) Sa se calculeze suma cifrelor unui numar;
// ex: Input: 111;
// Output: 3;

// Pas 1: initialize functie;
// pas 2: Am o variabila suma care este egala cu 0;
// pas 3: cat timp numarul meu este diferit de 0; (folosim while);
// pas 3.1 Restul impartirii numarului la 10 il adaug la suma;
// pas 3.2 Numarul meu va fi egal cu catul impartirii numarului la 10;

// function digitSum(num) {
//     let digitSum = 0;

//     while(num !== 0) { 
//         digitSum += num % 10;
//         num = Math.floor(num / 10);
//     }
    
//     console.log(digitSum);
// }

// digitSum(123123);

//7) Sa se creeze o functie care converteste km in mile;
// function kmToMiles(km) {
//     const factor = 0.621371;
//     let kmToMiles = Math.floor(km * factor);
//     console.log(kmToMiles);
// }
// kmToMiles(100);


// 8) Sa se creeze o functie care converteste Celsius in Fahrenheit;

// function cToF(celsius) 
// {
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9 / 5 + 32;
//   let message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }
 
// cToF(50);


// Javascript poate sa fie folosit la a adauga functionalitate in pagina web;

const buttonKm = document.getElementById('addKmButton');

console.log(addKmField);
buttonKm.addEventListener('click', kmToMiles);

function kmToMiles() {
    const km = document.getElementById('addKmField').value;
    const factor = 0.621371;

    let kmToMiles = Math.floor(km * factor);

    document.getElementById('km').innerHTML = kmToMiles;
}