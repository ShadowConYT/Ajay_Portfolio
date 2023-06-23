var texts = [
    "Web Developer",
    "Data Analyst",
    "Student",
    "Often Watch Anime",
    "Enjoy!"
  ];
  
// Get the typewriter container element
var typewriterContainer = document.getElementById("subtext");

function displayRandomText() {
    // Get a random index from the texts array
    var randomIndex = Math.floor(Math.random() * texts.length);
    
    // Get the random text
    var randomText = texts[randomIndex];
    
    // Clear the previous text
    typewriterContainer.textContent = "";
      
      // Loop through each letter of the random text
      for (var i = 0; i < randomText.length; i++) {
        // Create a span element for each letter
        var letterSpan = document.createElement("span");
        
        // Set the text content of the span to the current letter
        letterSpan.textContent = randomText[i];
        
        // Append the span to the typewriter container
        typewriterContainer.appendChild(letterSpan);
      }
    }
    
    // Call the function initially
displayRandomText();

// Call the function every 5 seconds to display a new random text
setInterval(displayRandomText, 5000);