const HandlerSubmit = (e: Event) => {
    e.preventDefault();

    // Pobranie wszystkich elementów radio
    const radioInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="radio"]');
    let suma = 0;
    const result = document.getElementById('costResult') as HTMLParagraphElement;
    const selectedRadio = Array.from(radioInputs).find((i) => i.checked);
    if (selectedRadio){
        suma = parseInt(selectedRadio.value) || 0;
        result.innerHTML = `Cena zabiegów: ${suma} zł`;
    }
}
