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

const alertTimer = setInterval(alertBox, 3000); 

function alertBox() {
    alert("Bentornato")
    clearInterval(alertTimer);
};



