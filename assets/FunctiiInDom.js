// Functii de accesare a elementelor din DOM;
// I: Ce era DOM-ul?
// R: Structura arborescenda a unei pagini web;
// I: Din ce este formata o pagina web?
// R: O pagina web este formata din taguri HTML;
// I: Ce era un tag HTML?;
// R: Un "nod" in DOM format din: atribute si valori;

// Ce este un Obiect?
// Un obiect este un tip de data NON-Primitiva ce contine o "colectie"(multe) de primitive;
// Tipuri de obiecte: 
// Dictionar: const objDictionar = {key: value, ...}
// Vector sau Array: const objArr = [value1, value2, value3];
// Functii: function myFunction {console.log('ceva')};

// Exercitii: 
// Sa se creeze un buton si camp sau "input" (numar de telefon);
// La apasarea butonului sa se afiseze un mesaj cu Numarul este valid sau invalid;

const phoneButton = document.getElementById('addNumber');
const phoneNumberList = document.getElementById('phoneNumberList');
phoneButton.addEventListener('click', isPhoneValid);

let phoneNumList = [];

function isPhoneValid() {
    const phoneInputValue = document.getElementById('phoneInput').value;
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const isPhoneNumber = phoneInputValue.match(regex);

    if (isPhoneNumber) {
        addNumberToList(phoneInputValue);
    } else {
        phoneNumberList.innerText = 'Phone number not valid';
        phoneNumberList.style.color = 'red';
    }
}

function addNumberToList(phoneNumber) {
    phoneNumList.push(phoneNumber);
    
    for(let i = 0; i < phoneNumList.length; i++) {
        let li = document.createElement('li');
        phoneNumberList.appendChild(li);
        li.innerText = phoneNumList[i];
    }
}