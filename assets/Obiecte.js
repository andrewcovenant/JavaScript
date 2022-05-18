// Tipuri de date non-primitive;
// Sunt tipuri de date create de programator;

// Objects; Dictionare
// const objDictionary = {
//     nume: 'Andrei',
//     varsta: 21,
//     esteProgramator: true
// }

// Asa schimbam valoarea unei key din obiect;
//objDictionary.nume = 'Gigel';

//Stergem o cheie din obiect;
//delete objDictionary.nume;

//Parcurgerea unui obiect in ES6 
// for (let key in objDictionary) {
//     console.log(key, objDictionary[key]);
// }

//Parcurgerea unui Obiect de tip Vector || Array;
// const objArrayNume = ['Dragos', 'Valentin', 'Mihai', 'Cosmin'];

// for (var i = 0; i < objArrayNume.length; i++) {
//     console.log(objArrayNume[i]);
// }

//Pentru a afisa indexul fiecarui element folosim "in";
// for (let name in objArrayNume) {
//     console.log(name);
// }

// Pentru afisarea elementului in sine folosim "of";
// for (let name of objArrayNume) {
//     console.log(name);
// }

//Intrebare de interviu:

// const objOne = {
//     val1: 'Andrei',
//     varsta: 21,
//     bani: 9999
// }
// const objTwo = {
//     val1: 'Marcel',
//     varsta: 26
// }

// console.log(objOne === objTwo); 
// O sa afiseze false; pentru ca noi comparam defapt adresa locatiilor de memorie; 0xfg2jk === 0xfg2;


// Cum testam existenta unui key in obiect;
// if (objOne.bani) { // if (objOne.bani !== 'undefined')
//     console.log(objOne.bani);
// } else {
//     console.log('Nu exista');
// }

// Adaugare key in obiect de tip dictionar;
//1) 
// objOne.mihai = 'Mihai';


//2) Object.assign menit sa faca cununia intre 2 obiecte;
// const objThree = Object.assign(objOne, objTwo);

// Adaugare element in obiect de tip vector;
// const objArrayNume = ['Dragos', 'Valentin', 'Mihai', 'Cosmin'];
// objArrayNume.push('Vasile');
// console.log(objArrayNume);

// Exercitii;
// 1. Creeaza un obiect, care sa descrie o masina
// cu urmatoarele proprietati: marca, model, an, pret, numar km.
// Sa se creeze urmatoarele chei:
// 1.1 Modifica numarul de km, dandu-le o valoare mai mica
// 1.2 Adauga o proprietate noua, descrierea, cu ce valoare doresti.
// 1.3 Sterge descrierea din obiect.

// const objCar = {
//     marca: 'Opel',
//     model: '4x4',
//     an: 2010,
//     pret: 5000,
//     km: 100000
// }
// objCar.km = 200000;
// objCar.descriere = "Lorem ipsum";

// delete objCar.descriere;
// console.log(objCar);

// 2. Folosind Sfantul Gugîl returnati data curenta in consola: HH:MM:SS.
// let today = new Date()
// let dd = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// console.log(dd);

// Exercitii cu Vectori / Arrays;
// Se da urmatorul vector / Array:

const array = [3, 12, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// 1) Sa se sorteze crescator;
// const sortedAscendingArr = array.sort((min, max) => min - max);
// console.log(sortedAscendingArr);

// 2) Sa se sorteze descrescator;
// const sortedDescendingArr = array.reverse((min, max) => min - max);
// const sortedDescendingArr = array.sort((min, max) => max - min);
// console.log(sortedDescendingArr);

// 3) Sa se afiseze elementele din vector pe rand;
// for (let nums in array) {
//     console.log(nums);
// }

// 4) Sa se afiseze numarul de elemente din vector;
// console.log(array.length);

// 5) Sa se afiseze elementul de pe pozitia 3;
// console.log(array[2]);

// 6) Sa se adauge un element in vector la sfarsit;
// array.push(99)
// console.log(array);

// 7) Sa se stearga un element din vector la sfarsit;
// array.pop();

// 8) Sa se stearga un element de pe prima pozitie;
// array.shift();

// FUNCTIONS;
// Functiile sunt obiecte, asadar sunt tipuri de date non primitive;

function sort(a, b) {
    const count = {};

    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }

    const sortedArr = [];
    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            sortedArr.push(i);
            count[i]--;
        }
    }
    return sortedArr;
};

sort(min, max);

function numeFunctie() {

}
