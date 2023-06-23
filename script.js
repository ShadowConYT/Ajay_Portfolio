var texts = [
    "Hello, World!",
    "Welcome to my website.",
    "This is a typewriter effect.",
    "Feel free to modify and customize.",
    "Enjoy!"
  ];
  
// Get the typewriter container element
var typewriterContainer = document.getElementById("typewriter-container");

// Function to display random texts in typewriter effect
function displayRandomText() {
// Get a random index from the texts array
var randomIndex = Math.floor(Math.random() * texts.length);

// Get the random text
var randomText = texts[randomIndex];

// Set the random text as the content of the typewriter container
typewriterContainer.textContent = randomText;
}

// Call the function initially
displayRandomText();

// Call the function every 5 seconds to display a new random text
setInterval(displayRandomText, 5000);