// W Tabeli 1 podano Wybrane pola i metody modelu DOM języka JavaScript. Wymagania dotyczące skryptu:2 
// Napisany w języku JavaScript
// Składa się z funkcji wywoływanej po wciśnięciu przycisku
// Pobiera wartość wpisaną w polu edycyjnym
// Ustala tło w formacie HSL dla komórek tabeli. Składowa H odpowiada wartości pobranej z 
// pola edycyjnego, wartość L jest stała i wynosi zawsze 50%, wartość S jest różna dla poszczególnych komórek tabeli i wynosi:
// dla pierwszego wiersza 100%
// dla drugiego wiersza, kolejno w czterech komórkach: 80%, 60%, 40% i 20%

const handleSubmit2 = (e: Event) => {
    e.preventDefault();

    let InputColor = document.getElementById('colorInput') as HTMLInputElement;

    let H = InputColor.value;
    const L = 50;
    let S = [100, 80, 60, 40, 20];

    const cls = document.querySelectorAll("table tr td");

    cls.forEach((c, i) => {
        const cell = c as HTMLElement;
        cell.style.backgroundColor = `hsl(${H}, 1     00%, ${L}%)`;
        cell.style.backgroundColor = `hsl(${H}, ${S[i]}%, ${L}%)`;
    });


}