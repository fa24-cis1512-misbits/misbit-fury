
const story = [
    {
        text: "You wake up in a dark forest. Do you go left or right?",
        choices: [
            { text: "Go left", next: 1 },
            { text: "Go right", next: 2 }
        ]
    },
    {
        text: "You find a river. Do you swim across or follow the river?",
        choices: [
            { text: "Swim across", next: 3 },
            { text: "Follow the river", next: 4 }
        ]
    },
    {
        text: "You encounter a wolf. Do you run or stand your ground?",
        choices: [
            { text: "Run", next: 5 },
            { text: "Stand your ground", next: 6 }
        ]
    },
    {
        text: "You swam across the river and found a village. You win!",
        choices: [
            { text: "Play again", next: 0 }
        ]
    },
    {
        text: "You followed the river but got lost. Game over.",
        choices: [
            { text: "Play again", next: 0 }
        ]
    },
    {
        text: "You ran and escaped. You win!",
        choices: [
            { text: "Play again", next: 0 }
        ]
    },
    {
        text: "The wolf caught you. Game over.",
        choices: [
            { text: "Play again", next: 0 }
        ]
    }
];

//start the game
function startGame() {
    showStoryNode(0);  //first story node
}

//update the story text
function showStoryNode(index) {
    const node = story[index];
    document.getElementById('story-text').innerText = node.text;
    
    //update the first button text
    document.getElementById('choice1').innerText = node.choices[0].text;
    document.getElementById('choice1').style.display = 'inline-block';  //make sure it is visible

    //update second button text or hide
    if (node.choices[1]) {
        document.getElementById('choice2').innerText = node.choices[1].text;
        document.getElementById('choice2').style.display = 'inline-block';  
    } else {
        document.getElementById('choice2').style.display = 'none';  //hide the second button if only one choice
    }
}

//function to handle choice
function makeChoice(choiceIndex) {
    const currentStory = document.getElementById('story-text').innerText;
    const currentNode = story.find(node => node.text === currentStory);

    //move to next story node
    const nextNodeIndex = currentNode.choices[choiceIndex - 1].next;
    showStoryNode(nextNodeIndex);
}

//start game when page isloaded
window.onload = startGame;
