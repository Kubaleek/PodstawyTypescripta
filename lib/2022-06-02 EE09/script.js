"use strict";
// W Tabeli 1 podano Wybrane pola i metody modelu DOM języka JavaScript. Wymagania dotyczące skryptu:2 
// Napisany w języku JavaScript
// Składa się z funkcji wywoływanej po wciśnięciu przycisku
// Pobiera wartość wpisaną w polu edycyjnym
// Ustala tło w formacie HSL dla komórek tabeli. Składowa H odpowiada wartości pobranej z 
// pola edycyjnego, wartość L jest stała i wynosi zawsze 50%, wartość S jest różna dla poszczególnych komórek tabeli i wynosi:
// dla pierwszego wiersza 100%
// dla drugiego wiersza, kolejno w czterech komórkach: 80%, 60%, 40% i 20%
var handleSubmit2 = function (e) {
    e.preventDefault();
    var InputColor = document.getElementById('colorInput');
    var H = InputColor.value;
    var L = 50;
    var S = [100, 80, 60, 40, 20];
    var cls = document.querySelectorAll("table tr td");
    cls.forEach(function (c, i) {
        var cell = c;
        cell.style.backgroundColor = "hsl(".concat(H, ", 1     00%, ").concat(L, "%)");
        cell.style.backgroundColor = "hsl(".concat(H, ", ").concat(S[i], "%, ").concat(L, "%)");
    });
};
