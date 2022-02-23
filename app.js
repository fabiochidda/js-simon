alert("Benvenuto!");

const arrayRandomNumbers = [];
console.log(arrayRandomNumbers);

for (i=0; i<5; i++) {

    function generatedRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomNumbers = generatedRandomNumbers(1,30);
    arrayRandomNumbers.push(randomNumbers)

};

console.log(arrayRandomNumbers);

alert(`Ricorda questi 5 numeri: ${arrayRandomNumbers}`);

alert("Ci rivediamo tra 30 secondi");

const alertTimer = setInterval(alertBox, 3000); //Timer cambiato a 3 secondi per la sanità mentale dei tutor :) 

function alertBox() {
    alert("Bentornato");
    alert("Se te li ricordi inserisci di seguito i 5 numeri");

    const arrayUserInput = [];

    for (i=0; i<5; i++) {

    let userInput = parseInt(prompt());
    arrayUserInput.push(userInput)

    };

    console.log(arrayUserInput);

    const filteredArray = arrayRandomNumbers.filter(Element => arrayUserInput.includes(Element));

    console.log(filteredArray.length);

    alert(`Hai indovinato ${filteredArray.length} numeri, ovvero: ${filteredArray}`);

    clearInterval(alertTimer);
};




