const baseURL = 'https://santiagohrd.github.io/wdd230/';
const linksURL = 'https://santiagohrd.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#members')

async function getMembersData(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayInfo(data.Companies);
}

getMembersData();

function displayInfo(company){
    company.forEach((business) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let web = document.createElement("a");

        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone_number}`;
        web.textContent = `${business.Website}`;

        logo.setAttribute("src", business.image);
        logo.setAttribute("alt", `Logo of ${business.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("max-width", "100%");
        logo.setAttribute("height", "75");


        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
        
        cards.appendChild(card);

    });
}