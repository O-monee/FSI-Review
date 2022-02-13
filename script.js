let animals = document.querySelectorAll (".animal")
console.log(animals)

//create dog vote button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"

animals[0].append(dogVoteBtn)

//isolate the vote count for the dog in the voting table
let dogVotesCell = document.querySelector("#doggo-votes");

let dogVotes = localStorage.getItem('dog-votes')
if (dogVotes) {
    dogVotesCell.textContent = dogVotes;
}

//Now, we're adding this event listener
dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;

    localStorage.setItem('dog-votes', dogVotesCount);
});


//create cat vote button
let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto"

animals[1].append(catVoteBtn)

//isolate the vote count for the cat in the voting table
let catVotesCell = document.querySelector("#catto-votes");

let catVotes = localStorage.getItem('cat-votes')
if (catVotes) {
    catVotesCell.textContent = catVotes;
}


//Now, we're adding this event listener
catVoteBtn.addEventListener('click', function(e) {
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;

    localStorage.setItem('cat-votes', catVotesCount);
});


//create Fish vote button
let fishVoteBtn = document.createElement("button")
fishVoteBtn.textContent = "Vote for Fish Gold"

animals[2].append(fishVoteBtn)

//isolate the vote count for the dog in the voting table
let fishVotesCell = document.querySelector("#fish-votes");

let fishVotes = localStorage.getItem('fish-votes')
if (fishVotes) {
    fishVotesCell.textContent = fishVotes;
}


//Now, we're adding this event listener
fishVoteBtn.addEventListener('click', function(e) {
    let fishVotesCount = parseInt(fishVotesCell.textContent);
    fishVotesCount = fishVotesCount + 1;
    fishVotesCell.textContent = fishVotesCount;

    localStorage.setItem('fish-votes', fishVotesCount);
});

