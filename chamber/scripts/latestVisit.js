const divVisit =document.querySelector(".latestVisit");
const today = Date.now();
const lastDate = localStorage.getItem("lastVisit");
let message = "";

if (!lastDate) {
    divVisit.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = today - parseInt(lastDate);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        divVisit.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        divVisit.textContent = "You last visited 1 day ago.";
    } else {
        divVisit.textContent = `You last visited ${daysDifference} days ago.`;
    }
}
localStorage.setItem("lastVisit", today.toString());