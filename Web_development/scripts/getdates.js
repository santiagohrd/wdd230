const lastModified = document.querySelector('#lastModified');

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

lastModified.innerHTML = new Date().toLocaleDateString("en-UK", options);

const copyright = document.querySelector('#copyright');

copyright.innerHTML = "&copy 2023";