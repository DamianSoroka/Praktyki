function handleCalculatorForm(form){
    var liczba1 = document.getElementById("jeden").value;
    var liczba2 = document.getElementById("dwa").value;

    if(document.getElementById('pomnoz').checked == true){
        if(liczba1 == 0 || liczba2 == 0){
            document.getElementById("calcResult").innerHTML = 0;
        }
        else{
            document.getElementById("calcResult").innerHTML = liczba1*liczba2;
        }
    }
    else if(document.getElementById('podziel').checked == true){
        if(liczba2 == 0){
            document.getElementById("calcResult").innerHTML = "Nie można dzielić przez 0!";
        }
        else{
            document.getElementById("calcResult").innerHTML = liczba1/liczba2;
        }
    }
    else if(document.getElementById('dodaj').checked == true){
        document.getElementById("calcResult").innerHTML = parseFloat(liczba1) + parseFloat(liczba2);
        }
    else if(document.getElementById('odejmij').checked == true){
        document.getElementById("calcResult").innerHTML = liczba1-liczba2;
        }
    else{
        document.getElementById("calcResult").innerHTML = "Nie zaznaczono operacji";
    }
}


function handlePalindromeForm(form){
    var slowo = form.inputbox.value; // pobór danych z inputboxa
    var doUsuniecia = /[^A-Za-z0-9]/g; // do usunięcia są wszystkie znaki niebędące liczbami i literami
    slowo = slowo.toLowerCase().replace(doUsuniecia, ''); // usunięcie wszystkich nie-cyfr i nie-liter, lowercase, żeby duże litery nie mieszały

    var czyJestPalindromem = true;

    for (var i = 0; i < slowo.length/2; i++) { // pętla sprawdza czy pierwsza połowa tekstu jest taka sama jak druga odwrocona polowa 
        if (slowo[i] !== slowo[slowo.length - 1 - i]) {czyJestPalindromem = false} 
    }

    document.getElementById("palindromeResult").innerHTML = czyJestPalindromem;
    
}

function handleArrayForm() {
    //var array = ["John", "Steve", "Rebecca", "Nicola", "Thomas"]
	var array = [2, 5, 4, 4, 3, 1, 5];
    var finalArray = [];
    var tempArray = []; // tablica przechowuje długości słów
    var finalLength = [] // tablica przechowuje posortowane długości słów bez powtórek
    var almostLongest; // zmienna przechowuje drugą największą długość

    if(typeof array[0] === "number"){
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array.length; j++) {
                if (array[j] > array[j + 1]) {
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        for (var i = 0; i < array.length; i++) {
            if(array[i] != array[i+1]){
                finalArray.push(array[i]);
            }
        }
        document.getElementById("arrayResult").innerHTML = finalArray[finalArray.length - 2];
    }
    else{
        if(typeof array[0] === "string"){ // bubblesort według długości napisu
            for (var i = 0; i < array.length - 1; i++) {
                for (var j = 0; j < array.length - 1; j++) {
                    if ((array[j].length) > (array[j + 1].length)) {
                        var temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            for (var i = 0; i < array.length; i++) { // petla dodaje długości napisów do nowego arraya
                tempArray.push(array[i].length);
            }
            for (var i = 0; i < tempArray.length; i++) { //petla usuwa powtarzające się długości
                if(tempArray[i] != tempArray[i+1]){
                    finalLength.push(tempArray[i]); 
                }
            }

            almostLongest = finalLength[finalLength.length - 2]; //dzięki czemu można łatwo znaleźć 2gi najdłuższy napis

            for(var i = 0; i < array.length - 1; i++){ // petla dodaje do finalnego arraya napisy o długości prawie najdłuższej
                if(array[i].length == almostLongest){
                    finalArray.push(array[i]);
                }
            }

            document.getElementById("arrayResult").innerHTML = finalArray;
        }
    }
        
}

//funkcyjne programowanko reduce()
const array1 = [1, 2, 3, 4];
const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue - currentValue, 10);
console.log(sumWithInitial);

const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

//zadanie 1
const zad1a = () => {console.log(arr1.concat(arr2))};
const zad1b = (arr1, arr2) => [...arr1, ...arr2];

//zadanie 2
const zad2 = ((...args) => {
    args.forEach(element => {
        console.log(element.reverse()[0]);
    });
});

//zadanie 3
const zad3 = (arr) => {arr.filter(arr => arr.length > 4)};