/*pseudocode
-Installeer en importeer Axios;
-Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen?
-Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
-Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
-Maak een <ul>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;
-Zorg ervoor dat de naam van het allereerste land wordt weergegeven als <li>-tag in het lijst-element op de pagina;
-Zorg er nu ook voor dat de populatie (Has a population of [amount] people) daaronder wordt weergegeven;
-Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. Tip: zorg ervoor dat je CSS-classes maakt voor alle regio-kleuren!
-Breidt de <li>-tag uit met een <img>-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven;
-Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;
-Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen mapt om de landen op de pagina weer te geven.

*/

import axios from 'axios';

async function fetchCountrys() {
    try {

        let output = await axios.get('https://restcountries.com/v2/all');

        const results1 = output.data.sort ((a,b) => a.population - b.population));

        const results2 = results1.map((result) => {
            const countrysList = document.getElementById('country-list');
            const countryItem = document.createElement('li');
            const {name, population, flag, region} = result;

            country = document.createElement('h2');
            country.textContent = `${name}`;

            population = document.createElement('h3');
            population.textContent = "Has a population of " + population +  " people";

            flag = document.createElement('img');
            flag.setAttribute('src', `${flag}`);
            flag.textContent = flag;

            countryItem.appendChild(flag);
            countryItem.appendChild(country);
            countryItem.appendChild(population);

            let regioNaam = region;
            regio(regioNaam);
            country.classList.add(regioKleur);

            countrysList.appendChild(countryItem);

            function regio (regioNaam) {
            switch (regioNaam) {
                case 'Africa':
                    regioKleur = 'blauw';
                    break;
                case 'Americas':
                    regioKleur = 'groen';
                    break;
                case 'Asia':
                    regioKleur = 'rood';
                    break;
                case 'Europe':
                    regioKleur = 'geel';
                    break;
                case 'Oceania':
                    regioKleur = 'paars';
                    break;
                default:
                    regioKleur = 'overig';
                }

                return regioKleur;
            }

    });

    }

    catch (e) {
        console.error(e);
    }

}


fetchCountrys();