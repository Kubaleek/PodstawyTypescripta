const HandlerSubmit = (e: Event) => {
    e.preventDefault();

    const selectedRadio = document.querySelector<HTMLInputElement>('input[type="radio"]:checked');
    const result = document.getElementById('costResult') as HTMLParagraphElement;
    
    const suma = selectedRadio ? parseInt(selectedRadio.value) || 0 : 0;
    result.innerHTML = `Cena zabiegów: ${suma} zł`;
}
