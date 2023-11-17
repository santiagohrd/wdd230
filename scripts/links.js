const baseURL = 'https://santiagohrd.github.io/wdd230/';
const linksURL = 'https://santiagohrd.github.io/wdd230/data/links.json';

async function getActivityData(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

getActivityData();

const ul = document.querySelector('#lessons');

// function displayLinks(weeks){

//     weeks.forEach(lesson => {
//         const li = document.createElement('li');
//         const a = document.createElement('a');

//         a.setAttribute('href', `${linksURL}`);
//         a.textContent = `${lesson.lesson}: ${lesson.links[0].title}`;

//         ul.appendChild(li);
//         li.appendChild(a);
//     });
// }
function displayLinks(weeks) {
    for (let i = 0; i < weeks.length; i++) {
        const lesson = weeks[i];
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (lesson.links.length > 0) {
            for (let j = 0; j < lesson.links.length; j++) {
                const link = lesson.links[j];
                const linkText = ` ${lesson.lesson}: ${lesson.links[j].title} |`;
                const linkURL = `${baseURL}${link.url}`;

                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', linkURL);
                linkElement.textContent = linkText;

                li.appendChild(linkElement);
                ul.appendChild(li);
            }
        }
    }
}