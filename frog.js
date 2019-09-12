let leafNr = 0;
let totalTries = 0;
let average = 0;
let attempts = [];
let jumps = [];


function nextJump(remaining) {
	return Math.ceil(Math.random() * remaining);
};

function jumpCalculator(numberOfAttempts) {

	for (var i = 1; i <= numberOfAttempts; i++) {

		leafNr = 10;

		while (leafNr > 0) {
			leafNr -= nextJump(leafNr);
			attempts.push(leafNr);
		}
		jumps.push(attempts.length);
		//console.log(attempts);
		attempts = [];
		
	};
	//console.log(jumps);

	for (var i = 0; i < jumps.length; i++) {
		totalTries += jumps[i];
		//console.log(jumps[i]);
	}

	average = (totalTries / jumps.length);
	return (`I tried it ${numberOfAttempts} times and the average number of jumps was ${average}`);
};