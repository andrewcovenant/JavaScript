// Metode de lucrat cu Stringuri;
//Substring numeString.substring()
const string = "I love JavaScript";
let substring = string.substring(0, 5);

//Length; numeString.length;
let lungimeString = string.length;

//Includes; numeString.includes(ceva)
let includes = string.includes('JavaScript');

//IndexOf; numeString.indexOf('JavaScript');
let index = string.indexOf('JavaScript');

//Slice; numeString.slice(start, end);
let slice = string.slice(7, 17);

//Replace; numeString.replace(ceva);
let replace = string.replace('JavaScript', 'TypeScript');

//Exercises;

// 1. Se da urmatorul string:
let badKids = "Lista copiilor pesepsiti este urmatoarea: Manuela, Daniel, Vicentiu";
// 1.1 Verifica daca numele "Daniel" se afla pe lista.
// 1.2 Daca numele "Daniel" se afla pe lista, modifica lista, astfel incat in 
// locul lui "Daniel" sa contina "Cornel".

if (badKids.includes('Daniel')) {
    badKids = badKids.replace('Daniel', 'Cornel');
}

// 2. Se da urmatorul sir de caractere; "Avadacadavra";
// Sa se corecteze in "Abracadabra"; FARA A FOLOSI REPLACE;
// Este permisa concatenare, slice, substring etc.

// let spell = "Avadacadavra";
// let replaceChar = spell.replaceAll('v', 'b');
// let subStringOne; //slice  la "Ab"
// let subStringTwo; //slice  la "adacadabra"
// console.log(subStringOne + 'r' + subStringTwo);



