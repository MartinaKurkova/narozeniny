/* Mimozemský život
Porovnejte datumy.
Podívejte se na stránku existuje-mimozemsky-zivot.cz. Podle toho, v jakém období toto zadání čtete, se dozvíte, zda jsme již objevili život mimo planetu Zemi. Stránka zobrazuje pouze jednoduchou zprávu. Podobných stránek lze na internetu najít vícero. Například

sediuzbabis.cz
uzjepatek.cz
Vytvořte podobnou stránku s vaším vlastním tématem.

Vytvořte prázdnou stránku, do které vložte knihovnu Day.js.
Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. Za pomoci knihovny Day.js vytvořte stránku zobrazující velké ANO nebo NE případně krátkou zprávu podle toho, zda už událost nastala či nikoliv.
*/

console.log(dayjs);
const narozeniny = dayjs("30-09-2025");
const dnes = dayjs();

if (dnes.isAfter(narozeniny)) {
    document.body.innerHTML += `<h1>ANO, máš narozeniny, vše nejlepší!</h1>`;
} else {
    document.body.innerHTML += `<h1>NE, ještě si musíš počkat!</h1>`;
}