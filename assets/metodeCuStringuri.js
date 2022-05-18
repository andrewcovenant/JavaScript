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

// if (badKids.includes('Daniel')) {
//     badKids = badKids.replace('Daniel', 'Cornel');
// }

// 2. Se da urmatorul sir de caractere; "Avadacadavra";
// Sa se corecteze in "Abracadabra"; FARA A FOLOSI REPLACE;
// Este permisa concatenare, slice, substring etc.

// let spell = "Avadacadavra";
// let replaceChar = spell.replaceAll('v', 'b');
// let subStringOne; //slice  la "Ab"
// let subStringTwo; //slice  la "adacadabra"
// console.log(subStringOne + 'r' + subStringTwo);

// Move k element to the end;
// k = 2;
// input = [2,3,4,5,6,1,2,3,6,7,9,2,3];
// output = [3,4,5,6,1,3,6,7,9,3,2,2,2];
// Two pointers approach; Unde folosesc 2 pointeri; cu un while;
//  const input = [2,3,4,5,6,1,2,3,6,7,9,2,3];
//  let p1 = 0;
//  let p2 = input.length - 1;

//  while (p1 < p2) {
//     if (input[p1] != k) {
//         const [p1, p2] = [p2, p1];
//         p1++;
//         p2--;
//     } else {
//         p2--;
//     }
//  }


