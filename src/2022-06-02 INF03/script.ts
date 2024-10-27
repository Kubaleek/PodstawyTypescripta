// Napisany w języku wykonywanym po stronie przeglądarki
// Skrypt uruchamia się po wciśnięciu przycisku OBLICZ na stronie obliczenia.html
// Skrypt pobiera wartości z obu pól edycyjnych
// Następnie oblicza koszt  paliwa ze względu na rodzaj i liczbę litrów uwzględniając:
// Gdy rodzaj paliwa jest równy 1 – koszt jednego litra paliwa wynosi 4 zł
// Gdy rodzaj paliwa jest równy 2 – koszt jednego litra paliwa wynosi 3,5 zł
// W każdym innym przypadku koszt paliwa wynosi 0 zł
// Następnie skrypt wyświetla wynik działania pod przyciskiem OBLICZ 
// według wzoru: „koszt paliwa: <wartość> zł”, gdzie <wartość> oznacza obliczony wcześniej koszt paliwa.


const handleSubmit = (e: Event) => {
    e.preventDefault();

    const InputOne = document.getElementById('FuelType') as HTMLInputElement;
    const InputTwo = document.getElementById('FuelLitr') as HTMLInputElement;

    const fuelType = parseInt(InputOne.value);
    const fuelLitr = parseInt(InputTwo.value);

    let fuelCost = 0;

    if (fuelType === 1) {
        fuelCost = fuelLitr * 4;
    } else if (fuelType === 2) {
        fuelCost = fuelLitr * 3.5;
    } else {
        fuelCost = 0;
    }

    const result = document.getElementById('resultCost') as HTMLElement;
    result.innerText = `Koszt paliwa: ${fuelCost} zł`;
};
