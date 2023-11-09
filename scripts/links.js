const baseURL = 'https://santiagohrd.github.io/wdd230/';
const linksURL = 'https://santiagohrd.github.io/wdd230/data/links.json';

async function getActivityData(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getActivityData();

const ul = document.querySelector('ul');

const displayLinks = (weeks) => {

    weeks.forEach(lesson => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = `${baseURL}${lesson.links.url}`;
        a.textContent = `${lesson.week}: ${lesson.links.title}`;

        ul.appendChild(li);
        li.appendChild(a);
    });
}
