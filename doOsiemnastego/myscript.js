const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

//zadanie 1
const zad1a = (arr1, arr2) => {return (arr1.concat(arr2))};
console.log("Zadanie 1, sposób a):");
console.log(zad1a(arr1, arr2));

const zad1b = (arr1, arr2) => [...arr1, ...arr2];
console.log("Zadanie 1, sposób b):");
console.log(zad1b(arr1, arr2));

//zadanie 2
var zad2 = (...args) => {return args[0].reverse()[0]};
console.log("Zadanie 2:");
console.log(zad2(arr2));

//zadanie 3  
//filtr sprawdza, czy argument występuje w tablicy i zwraca każdy element, w którym index argumentu nie równa się -1
const zad3 = (arr, arg) => arr.filter(element => element.indexOf(arg) !== -1);
console.log("Zadanie 3:");
console.log(zad3(arr2, "ar"));

//zadanie 4
// zaczynając od indeksu 0 funkcja iteruje przez tablice dodając wartości kolejnych elementów
const zad4 = numbers.reduce((suma, aktualnaWartosc) => suma + aktualnaWartosc, 0);
console.log("Zadanie 4:");
console.log(zad4);

//zadanie 5
const zad5 = numbers.map(x => (x*x)+3);
console.log("Zadanie 4:");
console.log(zad5);

//zadanie 1 dodatkowe
const zad1dod = (arr) => arr.filter(element => element.length <= 5 && element.match(/[A-Z]+ek/ig));
console.log("Zadanie 1 dodatkowe:");
console.log(zad1dod(arr2));

//zadanie 2 dodatkowe
const zad2dod = (arr) => arr.filter(element => element % 2 == 0);
console.log("Zadanie 2 dodatkowe:");
console.log(zad2dod(numbers));

//zadanie 3 dodatkowe
