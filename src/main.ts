// 1. Typy proste i zmienne
// Zadeklaruj zmienne różnych typów (np. string, number, boolean) i przypisz im odpowiednie wartości.
// Zmodyfikuj typy tych zmiennych i sprawdź, czy kompilator TypeScriptu wykrywa błędy typowania.
const name: string = "Janusz";
const age: number = 36;
const isAdmin: boolean = true;
const objects: object = {
  name: "Janusz",
  age: 36,
  isAdmin: false,
};
const tab: number[] = [25, 5, 6, 4];
enum peoples {
  wiek = age,
}

// 2. Funkcje z typowaniem
// Stwórz funkcję, która przyjmuje dwa parametry liczbowe i zwraca ich sumę.
// Zrób funkcję, która przyjmuje tablicę stringów i zwraca liczbę elementów w tablicy.

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(`Wynik działania sumy: ${sum(5, 5)}`);

const countTab = (ar: string[]): number => {
  return ar.length;
};

const strings = ["Janek", "Kowalek", "Bolek"];
console.log(`liczby elementów w tej tablicy wynosi ${countTab(strings)}`);

// 3. Interfejsy (Interfaces)
// Stwórz interfejs Person z polami name (string), age (number) i email (opcjonalny string).

interface Person {
  id: number;
  name: string;
  age: number;
  email?: string;
}
// Utwórz obiekt, który implementuje ten interfejs i przypisz mu wartości.
// Zaimplementuj funkcję, która przyjmuje obiekt typu Person i wypisuje jego informacje na konsolę.

const People: Person[] = [
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

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tmp;

const upperText = (str: string[]) : string[] => {
    let tmp: string[] = [];

    for(let i = 0; i < str.length; i++){
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
}

const textArray = ["kuba", "banan", "januś"];
upperText(textArray);

// 5. Unie (Union Types)
// Utwórz zmienną, która może być liczbą lub stringiem.
// Napisz funkcję, która przyjmuje parametr będący liczbą lub stringiem i zwraca odpowiedni wynik w zależności
// od typu argumentu (np. jeśli to string, zwróć jego długość, a jeśli liczba, zwróć jej kwadrat).

const tr: string | number = "Janek";

const squareOrLength = (sL: string | number) => {
    if(typeof sL ===  'string'){
        console.log(`Długość: ${sL.length}`);
    }

    if(typeof sL === 'number'){
        console.log(`Kwadrat: ${Math.pow(sL, 2)}`);
    }

}

squareOrLength(5);
squareOrLength("25");

// 6. Typ any i unknown
// Zadeklaruj zmienną typu any i przypisz jej wartość dowolnego typu, np. string, a potem liczbę.
let testAny: any = "Siema";
testAny = 5;
// Zmień typ tej zmiennej na unknown i spróbuj wykonać na niej różne operacje (np. dodawanie, przypisanie do zmiennej innego typu);
let testUnknown: unknown = 2;
// let w = testUnknown + 5; błąd
/* 
    Typ 'unknown' wymaga sprawdzenia typu przed użyciem, co zwiększa bezpieczeństwo kodu.
    Typ 'any' pozwala na dowolne operacje bez weryfikacji, co może prowadzić do błędów. 
*/

// 7. Funkcje jako typy (Function Types)
// Zdefiniuj typ funkcji, która przyjmuje dwa parametry: string i number, i zwraca string.
// Stwórz funkcję, która spełnia ten typ i przetestuj ją.

type StringNumberToString = (input: string, count: number) => string;

const concatenateString: StringNumberToString = (input, count) => {
    return input + count.toString();
};

const result = concatenateString("Wynik: ", 25);
console.log(result); // Wydrukuje: "Wynik: 5"


// 8. Klasy i dziedziczenie
// Stwórz klasę Animal z właściwościami name i age, oraz metodą, która zwraca opis zwierzęcia.
// Utwórz klasę Dog, która dziedziczy z Animal, dodaj do niej nową właściwość breed oraz nadpisz metodę z klasy bazowej, by uwzględniała rasę psa w opisie.

class Animal {
    protected name: string;
    protected age: number;
    


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    public GetAnimal(){
        return `Zwierzę: ${this.name}, wiek: ${this.age}`;
    }
}

class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public GetAnimal(): string {
        return `Zwierzę: ${this.name}, wiek: ${this.age}, rasa: ${this.breed}`;
    }
}

const dog = new Dog('Burek',5,'Labrador');
console.log(dog.GetAnimal());


// 9. Typy złożone i aliasy
// Stwórz alias typu Point reprezentujący współrzędne 2D (x i y jako liczby).
// Stwórz funkcję, która przyjmuje dwa punkty typu Point i zwraca odległość między nimi.
type Point = {
  x: number;
  y: number;
}

const distance = (p1: Point, p2: Point): number => {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
};

const point1: Point = { x: 0, y: 0 };
const point2: Point = { x: 3, y: 4 };
console.log(`Odległość: ${distance(point1, point2)}`); // 5

// 10. Enumy
// Zdefiniuj enum dla dni tygodnia.
// Stwórz funkcję, która przyjmuje dzień tygodnia jako parametr i zwraca komunikat, np. „Dziś jest poniedziałek”.
enum Days {
  Monday = "Poniedziałek",
  Tuesday = "Wtorek",
  Wednesday = "Środa",
  Thursday = "Czwartek",
  Friday = "Piątek",
  Saturday = "Sobota",
  Sunday = "Niedziela",
}

const getDay = (day: Days): string => {
  return `Dziś jest ${day}`;
}

console.log(getDay(Days.Monday));



