"use strict";
var HandlerSubmit = function (e) {
    e.preventDefault();
    // Pobranie wszystkich elementów radio
    var radioInputs = document.querySelectorAll('input[type="radio"]');
    var suma = 0;
    var result = document.getElementById('costResult');
    var selectedRadio = Array.from(radioInputs).find(function (i) { return i.checked; });
    if (selectedRadio) {
        suma = parseInt(selectedRadio.value) || 0;
        result.innerHTML = "Cena zabieg\u00F3w: ".concat(suma, " z\u0142");
    }
};
