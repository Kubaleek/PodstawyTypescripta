"use strict";
// Napisany w języku wykonywanym po stronie przeglądarki
// Oblicza łączną cenę zabiegów wybranych za pomocą pól checkbox zgodnie z cennikiem w tabeli
// Wyświetla wynik działania pod przyciskiem według wzoru: „Cena zabiegów: <suma>”,
// gdzie <suma> oznacza całkowitą cenę wybranych zabiegów
var HandleSubmit = function (e) {
    e.preventDefault();
    var checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    var suma = 0;
    checkboxInputs.forEach(function (i) {
        if (i.checked) {
            var cena = parseInt(i.value);
            suma += cena;
        }
    });
    var result = document.getElementById('result');
    result.innerText = "Cena zabieg\u00F3w: ".concat(suma);
};
