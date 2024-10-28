// Napisany w języku wykonywanym po stronie przeglądarki
// Oblicza łączną cenę zabiegów wybranych za pomocą pól checkbox zgodnie z cennikiem w tabeli
// Wyświetla wynik działania pod przyciskiem według wzoru: „Cena zabiegów: <suma>”,
// gdzie <suma> oznacza całkowitą cenę wybranych zabiegów

const HandleSubmit = (e: Event) => {
  e.preventDefault();
  let checkboxInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]');
  let suma = 0;

  checkboxInputs.forEach((i) => {
    if(i.checked){
        const cena = parseInt(i.value);
        suma += cena;
    }
  })

  const result = document.getElementById('result') as HTMLParagraphElement;
  result.innerText = `Cena zabiegów: ${suma}`;
};
