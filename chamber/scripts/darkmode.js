const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const eventHero = document.querySelectorAll(".event-hero");
const weather = document.querySelector(".weather-info");
const spotCards = document.querySelectorAll('.spot-card');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		eventHero.forEach(function(event){
			event.style.backgroundColor = "#0B0D22";
		});
		weather.style.background = "#0B0D22";
		spotCards.forEach(function(card) {
			card.style.backgroundColor = "#0B0D22";
		});
		modeButton.textContent = "☀️";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		eventHero.forEach(function(event){
			event.style.backgroundColor = "#f1f1f1";
		});

		weather.style.background = "#f1f1f1";

		spotCards.forEach(function(card) {
			card.style.backgroundColor = "#f1f1f1";
		});
		modeButton.textContent = "🌙"; 
	}
});