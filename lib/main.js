"use strict";
// 1. Typy proste i zmienne
// Zadeklaruj zmienne różnych typów (np. string, number, boolean) i przypisz im odpowiednie wartości.
// Zmodyfikuj typy tych zmiennych i sprawdź, czy kompilator TypeScriptu wykrywa błędy typowania.
const name = "Janusz";
const age = 36;
const isAdmin = true;
const objects = {
    name: "Janusz",
    age: 36,
    isAdmin: false,
};
const tab = [25, 5, 6, 4];
var peoples;
(function (peoples) {
    peoples[peoples["wiek"] = age] = "wiek";
})(peoples || (peoples = {}));
// 2. Funkcje z typowaniem
// Stwórz funkcję, która przyjmuje dwa parametry liczbowe i zwraca ich sumę.
// Zrób funkcję, która przyjmuje tablicę stringów i zwraca liczbę elementów w tablicy.
const sum = (a, b) => {
    return a + b;
};
console.log(`Wynik działania sumy: ${sum(5, 5)}`);
const countTab = (ar) => {
    return ar.length;
};
const strings = ["Janek", "Kowalek", "Bolek"];
console.log(`liczby elementów w tej tablicy wynosi ${countTab(strings)}`);
// Utwórz obiekt, który implementuje ten interfejs i przypisz mu wartości.
// Zaimplementuj funkcję, która przyjmuje obiekt typu Person i wypisuje jego informacje na konsolę.
const People = [
    {
        id: 1,
        name: "Janek",
        age: 18,
        email: "janek@wp.pl",
    },
];
People.forEach((pr) => {
    console.log(`${pr.id}, ${pr.name}, ${pr.age}, ${pr.email}`);
});
const ReadPeople = () => {
    People.map((pr) => {
        console.log(`${pr.id}, ${pr.name}, ${pr.age}, ${pr.email}`);
    });
};
ReadPeople();
// 4. Typowanie tablic
// Zadeklaruj tablicę liczb, a następnie dodaj kilka elementów do tej tablicy.
// Zrób funkcję, która przyjmuje tablicę string[] i zwraca nową tablicę, gdzie każdy element jest przekształcony na wielkie litery.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tmp;
const upperText = (str) => {
    let tmp = [];
    for (let i = 0; i < str.length; i++) {
        tmp.push(str[i].toUpperCase());
    }
    console.log(`FOR: ${tmp}`);
    tmp = [];
    tmp = str.map((e) => e.toUpperCase());
    console.log(`MAP: ${tmp}`);
    tmp = [];
    str.forEach((e) => tmp.push(e.toUpperCase()));
    console.log(`FOREACH: ${tmp}`);
    return tmp;
};
const textArray = ["kuba", "banan", "januś"];
upperText(textArray);
// 5. Unie (Union Types)
// Utwórz zmienną, która może być liczbą lub stringiem.
// Napisz funkcję, która przyjmuje parametr będący liczbą lub stringiem i zwraca odpowiedni wynik w zależności
// od typu argumentu (np. jeśli to string, zwróć jego długość, a jeśli liczba, zwróć jej kwadrat).
const tr = "Janek";
const squareOrLength = (sL) => {
    if (typeof sL === 'string') {
        console.log(`Długość: ${sL.length}`);
    }
    if (typeof sL === 'number') {
        console.log(`Kwadrat: ${Math.pow(sL, 2)}`);
    }
};
squareOrLength(5);
squareOrLength("25");
// 6. Typ any i unknown
// Zadeklaruj zmienną typu any i przypisz jej wartość dowolnego typu, np. string, a potem liczbę.
let testAny = "Siema";
testAny = 5;
// Zmień typ tej zmiennej na unknown i spróbuj wykonać na niej różne operacje (np. dodawanie, przypisanie do zmiennej innego typu);
let testUnknown = 2;
const concatenateString = (input, count) => {
    return input + count.toString();
};
const result = concatenateString("Wynik: ", 25);
console.log(result); // Wydrukuje: "Wynik: 5"
// 8. Klasy i dziedziczenie
// Stwórz klasę Animal z właściwościami name i age, oraz metodą, która zwraca opis zwierzęcia.
// Utwórz klasę Dog, która dziedziczy z Animal, dodaj do niej nową właściwość breed oraz nadpisz metodę z klasy bazowej, by uwzględniała rasę psa w opisie.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    GetAnimal() {
        return `Zwierzę: ${this.name}, wiek: ${this.age}`;
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    GetAnimal() {
        return `Zwierzę: ${this.name}, wiek: ${this.age}, rasa: ${this.breed}`;
    }
}
const dog = new Dog('Burek', 5, 'Labrador');
console.log(dog.GetAnimal());
const distance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};
const point1 = { x: 0, y: 0 };
const point2 = { x: 3, y: 4 };
console.log(`Odległość: ${distance(point1, point2)}`); // 5
// 10. Enumy
// Zdefiniuj enum dla dni tygodnia.
// Stwórz funkcję, która przyjmuje dzień tygodnia jako parametr i zwraca komunikat, np. „Dziś jest poniedziałek”.
var Days;
(function (Days) {
    Days["Monday"] = "Poniedzia\u0142ek";
    Days["Tuesday"] = "Wtorek";
    Days["Wednesday"] = "\u015Aroda";
    Days["Thursday"] = "Czwartek";
    Days["Friday"] = "Pi\u0105tek";
    Days["Saturday"] = "Sobota";
    Days["Sunday"] = "Niedziela";
})(Days || (Days = {}));
const getDay = (day) => {
    return `Dziś jest ${day}`;
};
console.log(getDay(Days.Monday));
