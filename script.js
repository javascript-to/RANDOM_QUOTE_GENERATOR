const quotes = [
    {
        text: '"When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy,to love.."',
        author: 'Marcus Aurelius'
    },
    {
        text: '"Wealth consists not is having great possessions, but in having few wants"',  
        author: 'Epictetus'
    },
    {
        text: '"Luck is what happens when proportion meets oppurtinity"',
        author: 'seneca'
    },
];

// Function to generate random quote
function generateQuote() {
    // Select a random quote object from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    // Update HTML with the quote's content
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quote.text;
  
    // If the quote has an author, display it
    if (quote.author) {
      const authorElement = document.createElement('p');
      authorElement.textContent = '- ' + quote.author;
      quoteElement.appendChild(authorElement);
    }
  }
// Event listener for the "Generate Quote" button


const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', generateQuote);
