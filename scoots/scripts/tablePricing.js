



const jsondata = 'https://santiagohrd.github.io/wdd230/scoots/data/rentalPricing.json';

const metroScooter = document.querySelector("#metroScooter");

async function pricingData(){
    const response = await fetch(jsondata);
    const data = await response.json();
    displayCards(data.rentalPricing.filter(item => item.type === "Reservation"));
}

function displayCards(pricing) {
    const cardsContainer = document.getElementById('cardsContainer');

    pricing.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('rental_card');

        const title = document.createElement('h3');
        title.textContent = item.name;

        const description = document.createElement('p');
        description.classList.add('rental_card', 'text');
        description.textContent = item.description;

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        image.classList.add('rental_card', 'metro');

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(image);

        cardsContainer.appendChild(card);
    });
}

pricingData();