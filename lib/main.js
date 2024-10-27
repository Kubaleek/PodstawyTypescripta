"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Typy proste i zmienne
// Zadeklaruj zmienne różnych typów (np. string, number, boolean) i przypisz im odpowiednie wartości.
// Zmodyfikuj typy tych zmiennych i sprawdź, czy kompilator TypeScriptu wykrywa błędy typowania.
var test = "Janusz";
var age = 36;
var isAdmin = true;
var objects = {
    name: "Janusz",
    age: 36,
    isAdmin: false,
};
var tab = [25, 5, 6, 4];
var peoples;
(function (peoples) {
    peoples[peoples["wiek"] = age] = "wiek";
})(peoples || (peoples = {}));
// 2. Funkcje z typowaniem
// Stwórz funkcję, która przyjmuje dwa parametry liczbowe i zwraca ich sumę.
// Zrób funkcję, która przyjmuje tablicę stringów i zwraca liczbę elementów w tablicy.
var sum = function (a, b) {
    return a + b;
};
console.log("Wynik dzia\u0142ania sumy: ".concat(sum(5, 5)));
var countTab = function (ar) {
    return ar.length;
};
var strings = ["Janek", "Kowalek", "Bolek"];
console.log("liczby element\u00F3w w tej tablicy wynosi ".concat(countTab(strings)));
// Utwórz obiekt, który implementuje ten interfejs i przypisz mu wartości.
// Zaimplementuj funkcję, która przyjmuje obiekt typu Person i wypisuje jego informacje na konsolę.
var People = [
    {
        id: 1,
        name: "Janek",
        age: 18,
        email: "janek@wp.pl",
    },
];
People.forEach(function (pr) {
    console.log("".concat(pr.id, ", ").concat(pr.name, ", ").concat(pr.age, ", ").concat(pr.email));
});
var ReadPeople = function () {
    People.map(function (pr) {
        console.log("".concat(pr.id, ", ").concat(pr.name, ", ").concat(pr.age, ", ").concat(pr.email));
    });
};
ReadPeople();
// 4. Typowanie tablic
// Zadeklaruj tablicę liczb, a następnie dodaj kilka elementów do tej tablicy.
// Zrób funkcję, która przyjmuje tablicę string[] i zwraca nową tablicę, gdzie każdy element jest przekształcony na wielkie litery.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tmp;
var upperText = function (str) {
    var tmp = [];
    for (var i = 0; i < str.length; i++) {
        tmp.push(str[i].toUpperCase());
    }
    console.log("FOR: ".concat(tmp));
    tmp = [];
    tmp = str.map(function (e) { return e.toUpperCase(); });
    console.log("MAP: ".concat(tmp));
    tmp = [];
    str.forEach(function (e) { return tmp.push(e.toUpperCase()); });
    console.log("FOREACH: ".concat(tmp));
    return tmp;
};
var textArray = ["kuba", "banan", "januś"];
upperText(textArray);
// 5. Unie (Union Types)
// Utwórz zmienną, która może być liczbą lub stringiem.
// Napisz funkcję, która przyjmuje parametr będący liczbą lub stringiem i zwraca odpowiedni wynik w zależności
// od typu argumentu (np. jeśli to string, zwróć jego długość, a jeśli liczba, zwróć jej kwadrat).
var tr = "Janek";
var squareOrLength = function (sL) {
    if (typeof sL === 'string') {
        console.log("D\u0142ugo\u015B\u0107: ".concat(sL.length));
    }
    if (typeof sL === 'number') {
        console.log("Kwadrat: ".concat(Math.pow(sL, 2)));
    }
};
squareOrLength(5);
squareOrLength("25");
// 6. Typ any i unknown
// Zadeklaruj zmienną typu any i przypisz jej wartość dowolnego typu, np. string, a potem liczbę.
var testAny = "Siema";
testAny = 5;
// Zmień typ tej zmiennej na unknown i spróbuj wykonać na niej różne operacje (np. dodawanie, przypisanie do zmiennej innego typu);
var testUnknown = 2;
var concatenateString = function (input, count) {
    return input + count.toString();
};
var result = concatenateString("Wynik: ", 25);
console.log(result);
// 8. Klasy i dziedziczenie
// Stwórz klasę Animal z właściwościami name i age, oraz metodą, która zwraca opis zwierzęcia.
// Utwórz klasę Dog, która dziedziczy z Animal, dodaj do niej nową właściwość breed oraz nadpisz metodę z klasy bazowej, by uwzględniała rasę psa w opisie.
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Animal.prototype.GetAnimal = function () {
        return "Zwierz\u0119: ".concat(this.name, ", wiek: ").concat(this.age);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, breed) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.GetAnimal = function () {
        return "Zwierz\u0119: ".concat(this.name, ", wiek: ").concat(this.age, ", rasa: ").concat(this.breed);
    };
    return Dog;
}(Animal));
var dog = new Dog('Burek', 5, 'Labrador');
console.log(dog.GetAnimal());
var distance = function (p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};
var point1 = { x: 0, y: 0 };
var point2 = { x: 3, y: 4 };
console.log("Odleg\u0142o\u015B\u0107: ".concat(distance(point1, point2))); // 5
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
var getDay = function (day) {
    return "Dzi\u015B jest ".concat(day);
};
console.log(getDay(Days.Monday));
