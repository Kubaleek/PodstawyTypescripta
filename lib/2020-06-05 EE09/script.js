"use strict";
var HandlerSubmit = function (e) {
    e.preventDefault();
    var selectedRadio = document.querySelector('input[type="radio"]:checked');
    var result = document.getElementById('costResult');
    var suma = selectedRadio ? parseInt(selectedRadio.value) || 0 : 0;
    result.innerHTML = "Cena zabieg\u00F3w: ".concat(suma, " z\u0142");
};
