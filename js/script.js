/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: 'Dr. Seuss'
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: 'John Lennon',
    citation: 'Beautiful Boy (Darling Boy)',
    year: 1981
  },
  {
    quote: "Get busy living or get busy dying.",
    source: 'Stephen King',
    citation: 'Rita Hayworth and Shawshank Redemption',
    year: 1982
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source: 'Mark Twain'
  },
  {
    quote: "The opposite of love is not hate; it’s indifference.",
    source: 'Elie Wiesel'
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: 'Eleanor Roosevelt'
  },
  {
    quote: "Not all those who wander are lost.",
    source: 'J.R.R. Tolkien',
    citation: 'The Lord of the Rings',
    year: 1954
  }, 
  {
    quote: "All those moments will be lost in time, like tears in rain.",
    source: 'David Peoples',
    citation: 'Blade Runner',
    year: 1982
  }, 
  {
    quote: "Every lie we tell incurs a debt to the truth. Sooner or later that debt is paid.",
    source: 'Craig Mazin',
    citation: "HBO's Chernobyl",
    year: 2019
  }
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(arr) {
  let randomNum = Math.floor(Math.random() * arr.length) + 1
  return quotes[randomNum];
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let HTMLString = `<p class="quote">"${randomQuote.quote}"</p>
  <p class="source"> ${randomQuote.source}`

  if (randomQuote.citation) {
    HTMLString += ` <span class="citation"> ${randomQuote.citation} </span>`;
  }

  if (randomQuote.year) {
    HTMLString += `<span class="year"> ${randomQuote.year} </span>`;
  }

  HTMLString += `</p>`;

  document.getElementById('quote-box').innerHTML = HTMLString;
}

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.