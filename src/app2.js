/*
stappenplan:
1. Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over één specifiek land op te halen, zoals nederland?
2. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint voor nederland. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
3. Probeer eens om de naam en populatie van het land te loggen in de console. Welk pad moet je hiervoor volgen?
4. Maak een <article>- of <div>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;
5. Zorg ervoor dat de naam van het land weergegeven wordt in bovenstaande tag;
6. Zorg er nu voor dat de zin [country-naam] is situated in [subarea-name]. It has a population of [amount] people. daaronder wordt weergegeven;
7. Zorg ervoor dat er een afbeelding van een vlag naast de naam van het land komt te staan;
8. Schrijf een functie die, ongeacht of er één of twee valuta's gebruikt worden, eenn string teruggeeft. Tip: dit kun je checken door bijvoorbeeld de informatie over panama op te halen.
    1 valuta: and you can pay with [currency]'s
    2 valuta's: and you can pay with [currency]'s and [currency]'s
9. Gebruik deze functie de correcte zin, The capital is [city] and you can pay with [currency] and [currency]'s weer te geven.
10. Maak een inputveld met zoek-knop op de pagina. In plaats van dat de data wordt opgehaald wanneer de pagina laadt, zorg je er nu voor dat de data over Nederland pas wordt opgehaald wanneer de gebruiker op ENTER of 'Zoek' drukt;
11. Zorg ervoor dat de waarde uit het inputveld wordt gebruikt als dynamische waarde in jouw GET-request;
12. Zorg ervoor dat de waarde van het input veld wordt leeggemaakt na elke zoekopdracht en dat er altijd maar één zoekresultaat op de pagina staat;
13. Zorg ervoor dat als er naar een land wordt gezocht dat niet bestaat, er een foutmelding wordt getoond. Tip: als er een ongeldige API call wordt gemaakt, zal de response in het catch blok terecht komen.
14. Zorg er ook voor dat wanneer er daarna een geldig verzoek wordt gedaan, de foutmelding weer verdwenen is.
*/


//Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint voor nederland. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
import axios from 'axios';

async function fetchCountry(nameCountry) {

    const userWarning = document.getElementById('user-warning');
    if (nameCountry !== "") {
        try {
        //Zorg ervoor dat de waarde uit het inputveld wordt gebruikt als dynamische waarde in jouw GET-request;
        let output2 = await axios.get("https://restcountries.com/v2/name/" + nameCountry);

        results(output2.data[0]);
        userWarning.textContent = '';
        }
        catch (e) {
            //Zorg ervoor dat als er naar een land wordt gezocht dat niet bestaat, er een foutmelding wordt getoond. Tip: als er een ongeldige API call wordt gemaakt, zal de response in het catch blok terecht komen.
            userWarning.textContent = 'Het ingetypte land is niet correct';
            console.log(e);
        }
    }

}

const userInput = document.getElementById('zoek-veld');

userInput.addEventListener('keyup', checkUserInput)

function checkUserInput(input) {


    let buttonElement = document.getElementById('zoek-knop');
    let buttonElement2 = document.getElementById('zoek-veld');


    buttonElement.addEventListener('click', (e) => {
        fetchCountry(input.target.value);
        buttonElement2.value = "";
    });

    buttonElement2.addEventListener('keydown', (e) => {
        if(e.code === 'Enter'){
            document.getElementById("zoek-veld").click();
             fetchCountry(input.target.value);
             buttonElement2.value = "";
        }
    });
}

function results (output3) {
    let currencys;

   // Schrijf een functie die, ongeacht of er één of twee valuta's gebruikt worden, eenn string teruggeeft. Tip: dit kun je checken door bijvoorbeeld de informatie over panama op te halen.
    function currencies (input) {
        for (let i = 0; i < input.currencies.length; i++) {
            if (i === 0) {
                currencys = input.currencies[0].name + "'s.";
            }

            else if (i >= 0){
                 currencys = currencys + " and " + input.currencies[i].name + "'s.";
            }
        }

        return currencys;
    }

    currencies (output3);

    const countryItem2 = document.getElementById('country-items');
    let country2 = `
        <li>
            <img src="${output3.flag}" class="flag" alt=" "/>          
            <h3>${output3.name}</h3>
            <div>${output3.name} is situated in ${output3.subregion}. 
            It has a population of ${output3.population} people.</br>
            The capital is ${output3.capital} and you can pay with ${currencys}
            </div>
        </li>
`;
 countryItem2.innerHTML = `${country2}`;

}




