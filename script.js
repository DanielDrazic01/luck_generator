const mainCollection = {
	planets: [
		"Mercury",
		"Venus",
		"Earth",
		"Mars",
		"Jupiter",
		"Saturn",
		"Uranus",
		"Neptune"
	],
	colors: ["Red", "Yellow", "Blue", "Orange", "Green", "Violet"],
	quotes: [
		"I think we consider too much the luck of the early bird and not enought the bad luck of teh early worm.",
		"Here's the thing about luck...you don't know if it's good or bad until ou have some perspective.",
		"Learn to recognize good luck wgen it'wavin at you, hopping to get your attention.",
		"The harder I work, the luckier I get.",
		"Beware what you wish for. unless you have the grace to hope that your luck can be shared."
	]
};

const getRandomIndex = (num) => {
	return Math.floor(Math.random() * num);
};

let finalMessage = {};

//from mainCollectino make a finalMessage obj
for (const prop in mainCollection) {
	if (Object.hasOwnProperty.call(mainCollection, prop)) {
		const element = mainCollection[prop];
		const randomIndex = getRandomIndex(element.length);
		switch (prop) {
			case "planets":
				if (!finalMessage.hasOwnProperty("planet")) {
					finalMessage.planet = element[randomIndex];
				}
				break;
			case "colors":
				if (!finalMessage.hasOwnProperty("color")) {
					finalMessage.color = element[randomIndex];
				}
				break;
			case "quotes":
				if (!finalMessage.hasOwnProperty("quote")) {
					finalMessage.quote = element[randomIndex];
				}
				break;
			default:
				finalMessage.err = "Something went wrong!";
		}
	}
}

//function to print your resonse (lucky planet, lucky color, quote) and formated
const getMessage = (obj) => {
	if (obj.hasOwnProperty(err)) return "Error, something went wrong!";
	let message = "";
	message += "Are u ready to feel lucky?\n";
	message += `Your lucky planet: ${obj.planet}\n
                Your lucky color: ${obj.color}\n
                Message for you: "${obj.quote}"`;
	return message;
};

console.log(getMessage(finalMessage));
